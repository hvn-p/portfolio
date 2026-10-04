/**
 * Declarative description of the site's deployment. This file is the source of
 * truth: `provision.ts` reconciles Dokploy against it, never the other way
 * around.
 *
 * The image tag is NOT written here: continuous deployment passes it as
 * IMAGE_TAG (always an immutable `sha-…` tag, never `latest`), and the
 * provisioner compares it with what Dokploy currently runs. Rolling back is
 * re-running the provisioner with an earlier tag.
 *
 * The public address is not here either: the pages are prerendered, so it is
 * baked into the image at build time (SITE_URL in the CI workflow). The domain
 * below must name the same host.
 */
export const SPEC = {
  project: 'portfolio',
  projectDescription: "Pierre Hervelin's portfolio site.",
  service: 'portfolio',
  serviceDescription: 'Portfolio site (Next.js standalone). Image from GHCR, deployed on every main commit.',
  /** Compose file, relative to the repository root. */
  composeFile: 'deploy/docker-compose.yml',
  domains: [{ host: 'pierrehervelin.com', serviceName: 'web', port: 3000 }],
}
