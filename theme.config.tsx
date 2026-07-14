import type { DocsThemeConfig } from 'nextra-theme-docs'
import { NavSocials } from './components/nav-socials'
import { ThemeToggle } from './components/theme-toggle'

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1,
      }}
    >
      <img
        src="/logo/dark.svg"
        alt="Liport Docs"
        className="liport-logo-dark"
        style={{ height: 30, display: 'block' }}
      />
      <img
        src="/logo/light.svg"
        alt="Liport Docs"
        className="liport-logo-light"
        style={{ height: 30, display: 'block' }}
      />
    </span>
  ),
  logoLink: '/',
  docsRepositoryBase: 'https://github.com/liport/liport',
  navbar: {
    extraContent: <NavSocials />,
  },
  themeSwitch: {
    component: ThemeToggle,
  },
  footer: {
    content: (
      <span style={{ fontSize: 13, opacity: 0.7 }}>
        © {new Date().getFullYear()} Liport · built on Solana
      </span>
    ),
  },
  color: {
    hue: { dark: 262, light: 262 },
    saturation: 80,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 99,
    toggleButton: false,
  },
  navigation: {
    prev: true,
    next: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Liport Docs" />
      <meta
        property="og:description"
        content="A Solana launchpad. Connect a wallet, launch a token on a bonding curve, and trade."
      />
      <link rel="icon" href="/favicon.png" />
      <title>Liport Docs</title>
    </>
  ),
}

export default config
