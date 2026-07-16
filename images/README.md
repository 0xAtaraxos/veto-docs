# Docs screenshots — capture list

Manual captures from the real app (dark theme, 1440px+ viewport, no browser chrome).
Drop the file, then uncomment the matching `<Frame>` block in the page.

| File | Page (slot already in place) | What to capture |
| --- | --- | --- |
| `app-preview.png` | `index.mdx` | Token page with a live chart. The hero shot. |
| `create-token.png` | `guides/launch-a-token.mdx` | The Create form, filled in with a real-looking token |
| `trading.png` | `guides/trading.mdx` | Token page: chart + trade widget + graduation progress |

Optional later: wallet-connect modal (`guides/connect-wallet.mdx`), creator dashboard
(`guides/creator-rewards.mdx`). Add a Frame block next to the intro of those pages
following the same pattern.

PNG, ~2400×1350 (16:9-ish). Mintlify serves this folder at `/images/...`.
