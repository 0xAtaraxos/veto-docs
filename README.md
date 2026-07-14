# hoodstar-docs

Official documentation for [hoodstar.fun](https://hoodstar.fun) — the meme coin launchpad on Robinhood Chain. Built with [Mintlify](https://mintlify.com).

## Structure

- `docs.json` — site config (branding, colors, navigation)
- `index.mdx` — landing page
- `introduction/` — how it works, $STAR token, links, FAQ
- `guides/` — connect wallet, launch a token, trading, creator rewards
- `protocol/` — bonding curve math, graduation, fees, security model
- `developers/` — chain/contract overview, `@hoodstudio/hoodstar-sdk` guide, contract reference
- `legal/` — terms, privacy, risk disclosure
- `logo/` — brand assets (gold star, `#F0B90B`)

## Local preview

```bash
npm i -g mint
mint dev
```

## Things to update at launch

- Contract addresses in `developers/overview.mdx` and `developers/contracts.mdx`
- $STAR contract address in `introduction/star-token.mdx`
- Audit report link in `protocol/security.mdx`
