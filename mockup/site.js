// Mockup behaviour. Content is complete without it; this only adds motion and scroll state.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const wide = matchMedia("(min-width: 56rem)");
  const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
  const easeOut = (t) => 1 - (1 - t) ** 3;
  const smooth = (t) => t * t * (3 - 2 * t);

  const bar = document.querySelector(".topbar");
  const hero = document.querySelector(".hero");
  const heroPaths = [...document.querySelectorAll(".hero-name .wordmark path")];
  const scenesList = document.querySelector(".scenes");
  const scenes = [...document.querySelectorAll(".scene")];
  const expEntries = [...document.querySelectorAll(".exp-entry")];
  const expLinks = [...document.querySelectorAll(".exp-index a")];
  const expProgress = document.querySelector(".exp-progress");
  const expList = document.querySelector(".exp-list");

  // ---------- Page transitions: a curtain covers, names the destination, then lifts ----------
  const curtain = document.querySelector(".curtain");
  const curtainLabel = curtain?.querySelector(".curtain-label span");
  const labelFor = (url) => {
    const file = url.pathname.split("/").pop().replace(".html", "") || "index";
    return { index: url.hash === "#work" ? "Work" : "Pierre Hervelin", about: "About", estuaire: "Estuaire", abacus: "Abacus" }[file] ?? "Pierre Hervelin";
  };
  if (root.classList.contains("curtain-in")) {
    try { sessionStorage.removeItem("curtain"); } catch {}
    requestAnimationFrame(() => setTimeout(() => {
      curtain.classList.add("is-lifting");
      setTimeout(() => { root.classList.remove("curtain-in"); curtain.classList.remove("is-lifting"); }, 900);
    }, 140));
  }
  if (!reduce && curtain) {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== "_self") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.hash) return;
      e.preventDefault();
      const label = labelFor(url);
      curtainLabel.textContent = label;
      try { sessionStorage.setItem("curtain", label); } catch {}
      curtain.classList.add("is-covering");
      // Leave only once the curtain has really closed: on a heavy page the animation
      // can lag behind any fixed delay, and the old page would show through.
      const panel = curtain.querySelector(".curtain-panel");
      let gone = false;
      const go = () => {
        if (gone) return;
        gone = true;
        curtain.classList.replace("is-covering", "is-covered");
        root.classList.add("is-leaving");
        requestAnimationFrame(() => requestAnimationFrame(() => { location.href = url.href; }));
      };
      panel.addEventListener("animationend", go, { once: true });
      setTimeout(go, 1200);
    });
    addEventListener("pageshow", (e) => {
      if (e.persisted) { curtain.classList.remove("is-covering", "is-covered", "is-lifting"); root.classList.remove("curtain-in", "is-leaving"); }
    });
  }

  // ---------- Mobile menu: opens as a circle out of the burger ----------
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");
  if (burger && menu) {
    const small = matchMedia("(max-width: 48rem)");
    const isOpen = () => root.classList.contains("menu-open");
    const setOpen = (open) => {
      const r = burger.querySelector(".burger-lines").getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      menu.style.setProperty("--cx", `${cx}px`);
      menu.style.setProperty("--cy", `${cy}px`);
      menu.style.setProperty("--r", `${Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) + 20}px`);
      root.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.querySelector(".sr-only").textContent = open ? "Close menu" : "Menu";
      menu.inert = !open;
      document.querySelectorAll("main, footer, .skip").forEach((el) => { el.inert = open; });
      if (open) setTimeout(() => menu.querySelector(".menu-links a")?.focus({ preventScroll: true }), 350);
      else burger.focus({ preventScroll: true });
    };
    burger.addEventListener("click", () => setOpen(!isOpen()));
    addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) setOpen(false); });
    // A link to a section of the current page just closes the menu and lets the page scroll.
    menu.addEventListener("click", (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.pathname === location.pathname && url.hash) setOpen(false);
    });
    small.addEventListener("change", () => { if (!small.matches && isOpen()) setOpen(false); });
  }

  // ---------- Intro: the hero name rises letter by letter on a first arrival ----------
  const fromSite = document.referrer && new URL(document.referrer).origin === location.origin;
  if (!reduce && heroPaths.length && !fromSite && !root.classList.contains("curtain-in")) {
    root.classList.add("intro");
    setTimeout(() => root.classList.remove("intro"), 2600);
  }
  // The bar's monogram waits for the hero name to sink before it shows.
  const sinkName = !reduce && heroPaths.length > 0;
  if (sinkName) root.classList.add("has-hero-name");

  // ---------- Scenes: pinned only on wide screens with motion allowed ----------
  const setPinned = () => {
    const on = !reduce && wide.matches;
    scenesList?.classList.toggle("scenes-pinned", on);
    if (!on) document.querySelectorAll(".scene-title, .shot, .shot img").forEach((el) => el.removeAttribute("style"));
  };
  setPinned();
  wide.addEventListener("change", () => { setPinned(); request(); });

  let lastY = scrollY;
  const frame = () => {
    ticking = false;
    const s = scrollY;
    const vh = innerHeight;

    // Bar: out of the way while going down, back when going up.
    if (bar) {
      bar.classList.toggle("is-scrolled", s > 8);
      if (s < 140 || s < lastY - 3) bar.classList.remove("is-hidden");
      else if (s > lastY + 3 && !bar.contains(document.activeElement)) bar.classList.add("is-hidden");
    }
    lastY = s;

    // Hero name: letters sink below the baseline one after another.
    if (sinkName) {
      const p = clamp(s / (hero.offsetHeight * 0.55));
      const n = heroPaths.length;
      const spread = 0.035;
      heroPaths.forEach((path, i) => {
        const lp = clamp((p - i * spread) / (1 - (n - 1) * spread));
        path.style.setProperty("--s", smooth(lp).toFixed(3));
      });
      root.classList.toggle("name-passed", p > 0.97);
    }

    // Scenes: the title stands alone, then shrinks down to its label place while
    // the screenshot opens above it from a centre line; the next screenshots wipe in.
    if (scenesList?.classList.contains("scenes-pinned")) {
      const vw = document.documentElement.clientWidth;
      const g = parseFloat(getComputedStyle(document.querySelector(".wrap")).paddingLeft) || vw * 0.04;
      // Taller frame, capped at the screenshot's own height so a portrait screen never stretches it.
      const fw = vw - 2 * g, fh = Math.min(vh * 0.7, fw / 1.6);
      // On a tall screen the capped frame and its label sit centred instead of hugging the top.
      const fx = g, fy = Math.max(vh * 0.12, (vh - fh - 200) / 2);
      for (const scene of scenes) {
        const r = scene.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 1.5) continue;
        const t = clamp(-r.top / (r.height - vh));
        const move = smooth(clamp(t / 0.16));
        const open = smooth(clamp((t - 0.1) / 0.18));
        const shots = [...scene.querySelectorAll(".shot")];
        const m = shots.length;

        shots.forEach((shot, k) => {
          const img = shot.querySelector("img");
          const ratio = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1.6;
          const w0 = fw;
          const base = 1;
          const settle = k === 0 ? 1 + 0.12 * (1 - open) : 1;
          const start = k === 0 ? 0.3 : 0.34 + (k - 1) * 0.33 + 0.1;
          const drift = clamp((t - start) / 0.3) * Math.max(0, fw / ratio - fh) * 0.5;
          // Keep the frame centre on the same picture point while the picture settles.
          const px = w0 / 2, py = fh / 2 + drift;
          const x = fx + fw / 2 - px * settle * base;
          const y = fy + fh / 2 - py * settle * base;
          img.style.width = `${w0}px`;
          img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${settle})`;
          const wipe = k === 0 ? open : easeOut(clamp((t - (0.34 + (k - 1) * 0.33)) / 0.14));
          const half = (1 - open) * fh / 2;
          const top = k === 0 ? fy + half : fy + (1 - wipe) * fh;
          const bottom = vh - fy - fh + (k === 0 ? half : 0);
          shot.style.clipPath = `inset(${top}px ${vw - fx - fw}px ${bottom}px ${fx}px round 16px)`;
          shot.style.visibility = wipe > 0.001 ? "visible" : "hidden";
          shot.dataset.wipe = wipe;
        });

        const title = scene.querySelector(".scene-title");
        const tw = title.offsetWidth, th = title.offsetHeight;
        const fs = parseFloat(getComputedStyle(title).fontSize);
        const ke = Math.min(68, vw * 0.047) / fs;
        const kt = 1 + (ke - 1) * move;
        const x0 = (vw - tw) / 2, y0 = vh * 0.44 - th / 2;
        const x1 = g, y1 = fy + fh + vh * 0.032 - th * ke * 0.08;
        scene.style.setProperty("--fb", `${fy + fh}px`);
        title.style.transform = `translate3d(${x0 + (x1 - x0) * move}px, ${y0 + (y1 - y0) * move}px, 0) scale(${kt})`;
        scene.style.setProperty("--sub", (1 - clamp(move / 0.35)).toFixed(3));
        scene.querySelectorAll(".scene-details > *").forEach((el, i) => {
          el.style.setProperty("--dt", easeOut(clamp((t - 0.2 - i * 0.03) / 0.1)).toFixed(3));
        });
        scene.style.setProperty("--cap", clamp((open - 0.7) / 0.3).toFixed(3));
        const current = shots.reduce((c, s, k) => (Number(s.dataset.wipe) > 0.5 ? k : c), 0);
        const cap = scene.querySelector(".cap-text");
        const text = shots[current].dataset.caption;
        if (cap && cap.textContent !== text) { cap.textContent = text; scene.querySelector(".cap-count").textContent = `${current + 1} / ${m}`; }
      }
    }

    // Experience: the index follows the entry being read; years drift behind the text.
    if (expEntries.length) {
      let active = 0;
      expEntries.forEach((entry, i) => {
        const r = entry.getBoundingClientRect();
        if (r.top < vh * 0.45) active = i;
        if (!reduce) entry.querySelector(".exp-year")?.style.setProperty("--py", clamp(((r.top + r.height / 2) - vh / 2) * -0.2, -40, 60).toFixed(1));
      });
      expLinks.forEach((a, i) => (i === active ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
      if (expProgress && expList) {
        const l = expList.getBoundingClientRect();
        expProgress.style.setProperty("--p", clamp((vh * 0.45 - l.top) / l.height).toFixed(3));
      }
    }
  };
  let ticking = false;
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  frame();
  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", request);
  bar?.addEventListener("focusin", () => bar.classList.remove("is-hidden"));

  // Local time in Bilbao, next to the availability.
  const clock = document.querySelector(".clock");
  if (clock) {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit" });
    const tick = () => { clock.textContent = ` · ${fmt.format(new Date())} local time`; };
    tick();
    setInterval(tick, 20000);
  }

  if (reduce) return;

  // The statement's last words cycle through what Pierre builds.
  const rotator = document.querySelector(".rotator");
  if (rotator) {
    const words = rotator.children.length;
    let k = 0;
    setInterval(() => {
      if (document.hidden) return;
      rotator.children[k].classList.remove("is-on");
      k = (k + 1) % words;
      rotator.children[k].classList.add("is-on");
      rotator.style.setProperty("--k", k);
    }, 2800);
  }

  // Gallery images settle into place as they arrive.
  if ("IntersectionObserver" in window) {
    const frames = [...document.querySelectorAll(".gallery .frame")].filter((f) => f.getBoundingClientRect().top > innerHeight);
    frames.forEach((f) => f.classList.add("is-settling"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.remove("is-settling");
        io.unobserve(e.target);
      }
    }, { rootMargin: "0px 0px -12% 0px" });
    frames.forEach((f) => io.observe(f));
  }

  // Rolling letters: the visible label becomes two stacked copies per letter.
  // Screen readers keep the original text through a visually hidden span.
  for (const el of document.querySelectorAll(".topnav ul a, .button, .text-link, .elsewhere a, .next-project .label, .to-top")) {
    const textNode = [...el.childNodes].find((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (!textNode) continue;
    const text = textNode.textContent.trim();
    const sr = Object.assign(document.createElement("span"), { className: "sr-only", textContent: text });
    const roll = Object.assign(document.createElement("span"), { className: "roll" });
    roll.setAttribute("aria-hidden", "true");
    [...text].forEach((char, i) => {
      const c = char === " " ? " " : char;
      const ch = document.createElement("span");
      ch.className = "ch";
      ch.style.setProperty("--i", i);
      ch.innerHTML = "<span></span><span></span>";
      ch.firstChild.textContent = c;
      ch.lastChild.textContent = c;
      roll.append(ch);
    });
    textNode.replaceWith(sr, roll);
  }

  // Arrow icons get a twin that takes over when the first one leaves.
  for (const svg of document.querySelectorAll("a svg.icon")) {
    const wrap = document.createElement("span");
    wrap.className = "arrow-swap";
    wrap.setAttribute("aria-hidden", "true");
    if (svg.querySelector('use[href="#i-right"]')) wrap.classList.add("is-flat");
    if (svg.querySelector('use[href="#i-up"]')) wrap.classList.add("is-up");
    svg.replaceWith(wrap);
    wrap.append(svg, svg.cloneNode(true));
  }

  // Night water seen from above, drawn on a fine grid of short strokes: above the hero's
  // statement, and in a frame beside the contact call. The moon catches on the water's
  // slopes as broad reflections that drift and change shape, lighting the strokes they
  // cover. The pointer's gesture stirs the strokes along its path: they catch more light,
  // stretch the way it went and are pushed ahead of it, each keeping its own light, then
  // settle. Faster gestures stir wider and push further. A touch screen gets the water
  // without the stirring.
  const STEP_X = 9, STEP_Y = 7; // CSS pixels between strokes
  // The surface: slow waves crossing in different directions (length in px, heading, speed in px/s).
  const WAVES = [[360, 0.3, 34], [270, 1.9, 30], [200, 3.6, 26], [150, 5.0, 22], [110, 2.6, 18]].map(([len, dir, speed], i) => {
    const k = 6.283 / len;
    return { k, dx: Math.cos(dir), dy: Math.sin(dir), w: k * speed, ph: i * 1.7 };
  });
  // The slope that sends moonlight up to the eye, and the tolerance around it.
  const SX = 0.9, SY = -0.6, SPREAD = 0.6;

  // size() gives the canvas size and how strong the water is along it, top to bottom;
  // edge() how far down it shows, fading out over the 200 px above (none by default);
  // still() whether the pointer leaves it alone for now. It redraws when `watch` resizes.
  const water = (canvas, watch, { size, edge = () => Infinity, still = () => false }) => {
    const ctx = canvas.getContext("2d");
    let strokes = [], w = 0, h = 0, seed = 0;
    // Seeded, so the strokes twinkle the same way on every visit.
    const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
    // Strokes the pointer has stirred and that have not settled yet.
    const stirred = new Set();
    const fit = () => {
      const s = size();
      w = s.w;
      h = s.h;
      const dpr = Math.min(devicePixelRatio, 2);
      Object.assign(canvas.style, { width: `${w}px`, height: `${h}px` });
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      strokes = [];
      stirred.clear();
      seed = 7;
      for (let y = 4; y < h; y += STEP_Y) {
        const fade = s.fade(y);
        for (let x = STEP_X / 2; x < w; x += STEP_X) {
          const f = 2 + 3 * rand(), ph = rand() * 6.283;
          if (fade <= 0.02) continue;
          // Each wave's phase at this stroke, as a cosine and a sine: a frame then moves it on
          // with two products, without a cosine per stroke.
          const at = WAVES.flatMap((v) => { const a = v.k * (v.dx * x + v.dy * y) + v.ph; return [Math.cos(a), Math.sin(a)]; });
          strokes.push({ x, y, fade, f, ph, at, dx: 0, dy: 0, ox: 0, oy: 0, e: 0 });
        }
      }
    };
    fit();
    new ResizeObserver(fit).observe(watch);
    addEventListener("resize", fit);

    // Drawn only while on screen, and when the page last scrolled.
    let shown = true, scrolled = 0;
    const born = performance.now();
    let raf = 0, drawn = 0, last = born;
    const loop = (now) => {
      raf = 0;
      const limit = edge();
      if (limit < 0 || !shown || document.hidden) { ctx.clearRect(0, 0, w, h); return; }
      raf = requestAnimationFrame(loop);
      // A calm surface needs no more than 30 frames a second, unless the page is scrolling.
      if (!stirred.size && now - scrolled > 100 && now - drawn < 32) return;
      const dt = Math.min((now - last) / 16.7, 3);
      drawn = last = now;
      const t = now / 1000, intro = smooth(clamp((now - born) / 1800));
      const relax = 0.93 ** dt, calm = 0.95 ** dt, back = 0.92 ** dt;
      const turn = WAVES.flatMap((v) => [Math.cos(v.w * t), Math.sin(v.w * t)]);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = ctx.strokeStyle = "#EDEBE6";
      for (const s of strokes) {
        const pull = Math.hypot(s.dx, s.dy);
        if (stirred.has(s)) {
          s.dx *= relax;
          s.dy *= relax;
          s.e *= calm;
          s.ox *= back;
          s.oy *= back;
          if (pull < 0.3 && s.e < 0.01 && Math.abs(s.ox) + Math.abs(s.oy) < 0.3) {
            s.dx = s.dy = s.ox = s.oy = s.e = 0;
            stirred.delete(s);
          }
        }
        if (s.y > limit) continue;
        let sx = 0, sy = 0;
        for (let i = 0; i < WAVES.length; i++) {
          const g = s.at[2 * i] * turn[2 * i] + s.at[2 * i + 1] * turn[2 * i + 1];
          sx += g * WAVES[i].dx;
          sy += g * WAVES[i].dy;
        }
        // A stirred stroke catches the light more easily and shines brighter than the calm
        // surface, until it settles. Out of reach of the light, it stays dark: skip it early.
        const spread = SPREAD * (1 + s.e);
        const off = ((sx - SX) ** 2 + (sy - SY) ** 2) / (spread * spread);
        if (off > 3.51 + Math.log1p(s.e)) continue;
        const lit = Math.exp(-off) * (1 + s.e);
        const fade = limit === Infinity ? s.fade : s.fade * smooth(clamp((limit - s.y) / 200));
        const b = fade * intro * lit * (0.75 + 0.25 * Math.sin(s.f * t + s.ph));
        if (b < 0.03) continue;
        // Brighter strokes are also longer, in steps of 2 px.
        const len = 2 + 2 * Math.round(Math.min(b, 1.5) * 2);
        // A stretched stroke spreads its light over more length.
        const gain = 0.45 + 0.55 * s.e;
        ctx.globalAlpha = Math.min(b * gain, gain) / (1 + pull / 80);
        const x = s.x + s.ox, y = s.y + s.oy;
        if (pull < 1) { ctx.fillRect(x - len / 2, y, len, 1); continue; }
        ctx.beginPath();
        ctx.moveTo(x - len / 2, y + 0.5);
        ctx.lineTo(x + len / 2 + s.dx, y + 0.5 + s.dy);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(loop); };
    wake();
    addEventListener("scroll", () => { scrolled = performance.now(); wake(); }, { passive: true });
    document.addEventListener("visibilitychange", wake);
    new IntersectionObserver(([entry]) => { shown = entry.isIntersecting; wake(); }).observe(canvas);

    // The gesture stirs the strokes along its path, wider and brighter as it goes faster,
    // and pushes them ahead; the closest ones are also pulled along it.
    let prev = null;
    addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      const r = canvas.getBoundingClientRect();
      if (still() || e.clientX < r.left || e.clientX >= r.right || e.clientY < r.top || e.clientY >= r.bottom) { prev = null; return; }
      const p = [e.clientX - r.left, e.clientY - r.top];
      if (prev) {
        const ux = p[0] - prev[0], uy = p[1] - prev[1], len = Math.hypot(ux, uy);
        if (len > 0.5) {
          const pace = clamp(len / 40);
          const reach = 40 + 110 * pace, grip = 30 + 30 * pace;
          for (const s of strokes) {
            const at = clamp(((s.x - prev[0]) * ux + (s.y - prev[1]) * uy) / (len * len));
            const d = Math.hypot(s.x - prev[0] - ux * at, s.y - prev[1] - uy * at);
            if (d > reach) continue;
            const near = (1 - d / reach) ** 2;
            // Light answers even an unhurried gesture; reach and push need speed.
            s.e = Math.max(s.e, Math.sqrt(pace) * near);
            const push = 6 * pace ** 1.5 * near;
            s.ox += (ux / len) * push;
            s.oy += (uy / len) * push;
            const o = Math.hypot(s.ox, s.oy);
            if (o > 24) { s.ox *= 24 / o; s.oy *= 24 / o; }
            if (d < grip) {
              const f = (1 - d / grip) ** 2;
              s.dx += ux * 0.5 * f;
              s.dy += uy * 0.5 * f;
              const m = Math.hypot(s.dx, s.dy);
              if (m > 34) { s.dx *= 34 / m; s.dy *= 34 / m; }
            }
            stirred.add(s);
          }
        }
      }
      prev = p;
      wake();
    }, { passive: true });
  };

  // Hero: edge to edge of the window, from just under the bar's links down behind the
  // statement's first line. The canvas is fixed, so the statement scrolls up over still
  // water and covers it; the pointer stirs it at the top of the page only. On every screen.
  const heroTop = hero?.querySelector(".hero-top");
  if (heroTop) {
    const canvas = document.createElement("canvas");
    canvas.className = "hero-glints";
    canvas.setAttribute("aria-hidden", "true");
    hero.prepend(canvas);
    let edgeTop = 0;
    water(canvas, hero, {
      size: () => {
        const bar = hero.getBoundingClientRect().top + scrollY;
        // Where the water has faded out: well into the statement, and never higher than a share
        // of the hero, so a statement set large or on more lines leaves the water its room.
        edgeTop = bar + Math.max(heroTop.offsetTop + 100, hero.offsetHeight * 0.42 + 60);
        const h = Math.round(Math.max(bar + heroTop.offsetTop + heroTop.offsetHeight * 0.6, edgeTop + 20));
        return { w: document.documentElement.clientWidth, h, fade: (y) => smooth(clamp((y - bar + 10) / 70)) };
      },
      edge: () => edgeTop - scrollY,
      // Three wheel notches of 100 px, about three quarters of the way to where the water has gone at 1280×720.
      still: () => scrollY > 300,
    });
  }

  // Contact: the same water in a frame beside the call, cut clean at its edges. Wide
  // screens with a mouse only.
  const contact = document.querySelector(".contact");
  if (contact && finePointer && wide.matches) {
    const frame = document.createElement("div");
    frame.className = "frame contact-water";
    frame.setAttribute("aria-hidden", "true");
    const canvas = document.createElement("canvas");
    frame.append(canvas);
    contact.append(frame);
    contact.classList.add("has-water");
    water(canvas, frame, { size: () => ({ w: frame.clientWidth, h: frame.clientHeight, fade: () => 1 }) });
  }

  if (!finePointer) return;

  // The contact button leans toward the pointer, and settles back when it leaves.
  for (const button of document.querySelectorAll(".button")) {
    button.addEventListener("pointermove", (e) => {
      const r = button.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      button.style.transitionDuration = "0.2s, 0.3s";
      button.style.transform = `translate(${dx * 0.12}px, ${dy * 0.2}px)`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.transitionDuration = "";
      button.style.transform = "";
    });
  }

  // Signature interaction: a lens replaces the cursor over project screenshots.
  const lensFrames = document.querySelectorAll(".project-link .frame, .project-link .shot");
  if (!lensFrames.length) return;
  root.classList.add("has-lens");

  const lens = document.createElement("div");
  lens.className = "lens";
  lens.setAttribute("aria-hidden", "true");
  lens.innerHTML = `
    <div class="lens-body">
      <div class="lens-view"><img alt=""></div>
      <svg class="lens-ring" viewBox="0 0 208 208">
        <defs><path id="lens-path" d="M104,104 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0"/></defs>
        <text><textPath href="#lens-path" textLength="590" lengthAdjust="spacing"></textPath></text>
      </svg>
    </div>`;
  document.body.append(lens);
  const view = lens.querySelector(".lens-view");
  const zoomed = view.querySelector("img");
  const label = lens.querySelector("textPath");
  const ZOOM = 1.9;

  // Where the picture actually sits inside its box, since frames crop with object-fit: cover.
  const pictureBox = (img) => {
    const r = img.getBoundingClientRect();
    if (getComputedStyle(img).objectFit !== "cover" || !img.naturalWidth) return r;
    const scale = Math.max(r.width / img.naturalWidth, r.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    return { left: r.left + (r.width - w) / 2, top: r.top, width: w, height: h };
  };

  let active = null;
  let x = -999, y = -999, cx = x, cy = y, raf = 0;
  const loop = () => {
    cx += (x - cx) * 0.24;
    cy += (y - cy) * 0.24;
    lens.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    if (active) {
      const b = pictureBox(active.querySelector("img"));
      const half = view.clientWidth / 2;
      zoomed.style.width = `${b.width * ZOOM}px`;
      zoomed.style.height = `${b.height * ZOOM}px`;
      zoomed.style.transform = `translate3d(${half - (cx - b.left) * ZOOM}px, ${half - (cy - b.top) * ZOOM}px, 0)`;
    }
    const moving = Math.abs(x - cx) > 0.1 || Math.abs(y - cy) > 0.1;
    raf = active || moving ? requestAnimationFrame(loop) : 0;
  };

  const setActive = (target) => {
    if (!target) {
      if (active) { active.classList.remove("is-lensed"); active = null; lens.classList.remove("is-on"); }
      return;
    }
    if (target !== active) {
      active?.classList.remove("is-lensed");
      const entering = !active;
      active = target;
      const name = target.dataset.name ?? target.closest(".project-link")?.querySelector(".project-title")?.textContent.trim() ?? "";
      label.textContent = `Open project · ${name} · Open project · ${name} · `;
      target.classList.add("is-lensed");
      lens.classList.add("is-on");
      if (entering) { cx = x; cy = y; }
    }
    // The visible screenshot can change under a still pointer as a scene advances.
    const img = target.querySelector("img");
    const src = img.currentSrc || img.src;
    if (zoomed.src !== src) zoomed.src = src;
    if (!raf) raf = requestAnimationFrame(loop);
  };

  // Hit-test from the pointer position, so scrolling under a still pointer also counts.
  const hitTest = () => setActive(document.elementFromPoint(x, y)?.closest(".project-link .frame, .project-link .shot") ?? null);
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    x = e.clientX; y = e.clientY;
    hitTest();
  }, { passive: true });
  addEventListener("scroll", () => { if (x > -999) hitTest(); }, { passive: true });
  root.addEventListener("pointerleave", () => setActive(null));
  addEventListener("blur", () => setActive(null));
})();
