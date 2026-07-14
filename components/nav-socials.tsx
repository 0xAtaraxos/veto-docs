import * as React from 'react'

type Social = {
  href: string
  label: string
  path: string
  viewBox?: string
}

const SOCIALS: Social[] = [
  {
    href: 'https://x.com/liportdotfun',
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    href: 'https://t.me/liportdotfun',
    label: 'Telegram',
    path: 'm21.86 3.36-3.18 15.02c-.24 1.06-.87 1.32-1.76.82l-4.86-3.59-2.35 2.27c-.26.26-.48.48-.97.48l.35-4.9 8.95-8.09c.39-.34-.08-.53-.6-.19L6.4 11.86l-4.78-1.5c-1.04-.33-1.06-1.04.21-1.54L20.45 1.94c.86-.32 1.62.21 1.41 1.42Z',
  },
  {
    href: 'https://discord.gg/3aA9wYDzTG',
    label: 'Discord',
    path: 'M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42z',
  },
  {
    href: 'https://liport.fun',
    label: 'Website',
    path: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.93 9h-3.05a15.65 15.65 0 0 0-1.38-5.55A8.03 8.03 0 0 1 19.93 11ZM12 4c.83 1.04 2.1 3.46 2.4 7H9.6c.3-3.54 1.57-5.96 2.4-7Zm-3.5 1.45A15.65 15.65 0 0 0 7.12 11H4.07a8.03 8.03 0 0 1 4.43-5.55ZM4.07 13h3.05a15.65 15.65 0 0 0 1.38 5.55A8.03 8.03 0 0 1 4.07 13ZM12 20c-.83-1.04-2.1-3.46-2.4-7h4.8c-.3 3.54-1.57 5.96-2.4 7Zm3.5-1.45A15.65 15.65 0 0 0 16.88 13h3.05a8.03 8.03 0 0 1-4.43 5.55Z',
  },
]

export function NavSocials() {
  return (
    <div
      className="liport-nav-socials"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
      }}
    >
      {SOCIALS.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: 8,
            color: 'currentColor',
            opacity: 0.75,
            transition: 'opacity 120ms ease, background 120ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.background = 'rgba(124,58,237,0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.75'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox={s.viewBox ?? '0 0 24 24'}
            fill="currentColor"
            aria-hidden
          >
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
