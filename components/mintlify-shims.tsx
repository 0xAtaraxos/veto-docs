import * as React from 'react'
import {
  AlertTriangle,
  AppWindow,
  ArrowLeftRight,
  CandlestickChart,
  Code2,
  Coins,
  Compass,
  Database,
  DollarSign,
  Gauge,
  Globe,
  HelpCircle,
  Info as InfoIcon,
  Key,
  Link2,
  type LucideIcon,
  MessageCircle,
  Network,
  Rocket,
  Scale,
  Send,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  Twitter,
  User,
  Wallet,
  Workflow,
  Zap,
} from 'lucide-react'

type CardProps = {
  title: string
  href?: string
  icon?: string
  children?: React.ReactNode
}

const ICONS: Record<string, LucideIcon> = {
  'chart-line': TrendingUp,
  'chart-candlestick': CandlestickChart,
  rocket: Rocket,
  coins: Coins,
  coin: Coins,
  'shield-check': ShieldCheck,
  'shield-halved': Shield,
  bolt: Zap,
  'diagram-project': Workflow,
  code: Code2,
  gauge: Gauge,
  'gauge-high': Gauge,
  'money-bill-transfer': ArrowLeftRight,
  'money-bill': DollarSign,
  globe: Globe,
  'x-twitter': Twitter,
  telegram: Send,
  discord: MessageCircle,
  key: Key,
  'network-wired': Network,
  star: Star,
  'circle-info': InfoIcon,
  'circle-question': HelpCircle,
  link: Link2,
  'scale-balanced': Scale,
  'triangle-exclamation': AlertTriangle,
  wallet: Wallet,
  compass: Compass,
  browser: AppWindow,
  'arrow-right-arrow-left': ArrowLeftRight,
  database: Database,
  user: User,
}

function CardIcon({ name }: { name: string }) {
  const Icon = ICONS[name]
  if (!Icon) return null
  return (
    <span
      aria-hidden
      className="liport-card-icon"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 8,
        background:
          'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(167,139,250,0.10))',
        color: '#a78bfa',
        flexShrink: 0,
      }}
    >
      <Icon size={18} strokeWidth={1.75} />
    </span>
  )
}

export function CardGroup({
  cols = 2,
  children,
}: {
  cols?: number
  children: React.ReactNode
}) {
  return (
    <div
      className="liport-card-group"
      data-cols={cols}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: '0.75rem',
        margin: '1rem 0',
      }}
    >
      {children}
    </div>
  )
}

export function Card({ title, href, icon, children }: CardProps) {
  const inner = (
    <div
      className="liport-card"
      style={{
        display: 'flex',
        gap: '0.75rem',
        padding: '0.95rem 1rem',
        border: '1px solid var(--liport-border, rgba(255,255,255,0.08))',
        borderRadius: 10,
        background: 'var(--liport-card-bg, rgba(255,255,255,0.02))',
        height: '100%',
        transition:
          'border-color 120ms ease, transform 120ms ease, background 120ms ease',
      }}
    >
      {icon ? <CardIcon name={icon} /> : null}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: '0.92rem', opacity: 0.78, lineHeight: 1.5 }}>
          {children}
        </div>
      </div>
    </div>
  )

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {inner}
      </a>
    )
  }
  return inner
}

export function Steps({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children).filter(Boolean)
  return (
    <ol
      className="liport-steps"
      style={{
        listStyle: 'none',
        padding: 0,
        margin: '1rem 0',
      }}
    >
      {items.map((child, i) => (
        <li
          key={i}
          style={{
            position: 'relative',
            paddingLeft: '2.25rem',
            paddingBottom: '1rem',
            borderLeft: '2px solid rgba(124,58,237,0.35)',
            marginLeft: '0.75rem',
          }}
        >
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: '-0.85rem',
              top: 0,
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: '#7C3AED',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {i + 1}
          </span>
          {child}
        </li>
      ))}
    </ol>
  )
}

export function Step({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="liport-step">
      {title ? (
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>
      ) : null}
      <div>{children}</div>
    </div>
  )
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="liport-accordion-group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        margin: '1rem 0',
      }}
    >
      {children}
    </div>
  )
}

export function Accordion({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <details
      className="liport-accordion"
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: '0.6rem 0.9rem',
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      <summary
        style={{
          cursor: 'pointer',
          fontWeight: 600,
          listStyle: 'none',
          padding: '0.2rem 0',
        }}
      >
        {title}
      </summary>
      <div style={{ marginTop: '0.5rem', opacity: 0.85 }}>{children}</div>
    </details>
  )
}

type CalloutKind = 'note' | 'tip' | 'warning' | 'info' | 'check'

function CalloutBox({
  kind,
  children,
}: {
  kind: CalloutKind
  children: React.ReactNode
}) {
  const palette: Record<
    CalloutKind,
    { bg: string; border: string; label: string }
  > = {
    note: { bg: 'rgba(99,102,241,0.08)', border: '#6366f1', label: 'Note' },
    tip: { bg: 'rgba(16,185,129,0.08)', border: '#10b981', label: 'Tip' },
    warning: { bg: 'rgba(245,158,11,0.08)', border: '#f59e0b', label: 'Warning' },
    info: { bg: 'rgba(59,130,246,0.08)', border: '#3b82f6', label: 'Info' },
    check: { bg: 'rgba(34,197,94,0.08)', border: '#22c55e', label: 'Check' },
  }
  const { bg, border, label } = palette[kind]
  return (
    <div
      role="note"
      className={`liport-callout liport-callout-${kind}`}
      style={{
        margin: '1rem 0',
        padding: '0.75rem 1rem',
        borderLeft: `3px solid ${border}`,
        background: bg,
        borderRadius: 6,
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: border,
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  )
}

export const Note = ({ children }: { children: React.ReactNode }) => (
  <CalloutBox kind="note">{children}</CalloutBox>
)
export const Tip = ({ children }: { children: React.ReactNode }) => (
  <CalloutBox kind="tip">{children}</CalloutBox>
)
export const Warning = ({ children }: { children: React.ReactNode }) => (
  <CalloutBox kind="warning">{children}</CalloutBox>
)
export const Info = ({ children }: { children: React.ReactNode }) => (
  <CalloutBox kind="info">{children}</CalloutBox>
)
export const Check = ({ children }: { children: React.ReactNode }) => (
  <CalloutBox kind="check">{children}</CalloutBox>
)
