# veto-docs

Official documentation for [veto.fun](https://veto.fun) — the meme coin launchpad on Robinhood Chain. Built with [Mintlify](https://mintlify.com).

## Structure

- `docs.json` — site config (branding, colors, navigation)
- `index.mdx` — landing page
- `introduction/` — how it works, $VETO token, links, FAQ
- `guides/` — connect wallet, launch a token, trading, creator rewards
- `protocol/` — bonding curve math, graduation, fees, security model
- `developers/` — chain/contract overview, `@vetostudio/veto-sdk` guide, contract reference
- `legal/` — terms, privacy, risk disclosure
- `logo/` — brand assets (gold star, `#F0B90B`)

## Local preview

```bash
npm i -g mint
mint dev
```

## Things to update at launch

- Contract addresses in `developers/overview.mdx` and `developers/contracts.mdx`
- $VETO contract address in `introduction/veto-token.mdx`
- Audit report link in `protocol/security.mdx`
