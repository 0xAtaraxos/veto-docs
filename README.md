# veto-docs

Official documentation for [veto.fun](https://veto.fun), the memecoin launchpad on Robinhood Chain. Built with [Mintlify](https://mintlify.com).

## Structure

- `docs.json`: site config (branding, colors, navigation)
- `index.mdx`: landing page
- `introduction/`: why, how it works, official links, FAQ (`veto-token.mdx.hold` is parked until the token launches)
- `guides/`: connect wallet, launch a token, trading, creator rewards
- `protocol/`: direct listing, venues, fees, security model
- `developers/`: chain and contract overview, `@maki-studio/sdk` guide, contract reference
- `legal/`: terms, privacy, risk disclosure
- `logo/`: brand marks (`veto-mark-black.png` for light mode, `veto-mark-white.png` for dark), accent `#4A90FF`

## Local preview

```bash
npm i -g mint
mint dev
```

## Things to update at launch

- $VETO contract address in `introduction/veto-token.mdx.hold`, then rename it to `.mdx` and add it to the navigation
- Audit report link in `protocol/security.mdx`
