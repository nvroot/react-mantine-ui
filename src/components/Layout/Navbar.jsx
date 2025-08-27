import { Stack, NavLink } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import {
  IconDashboard,
  IconRobot,
  IconBug,
  IconCode,
  IconShield,
  IconDatabase,
  IconWorld,
  IconApi,
  IconCloud,
  IconSearch,
  IconHexagons,
  IconBell,
  IconSettings,
  IconReportAnalytics,
  IconLock,
  IconCpu,
  IconInfoCircle,
  IconCurrency,
  IconTarget
} from '@tabler/icons-react'

const navItems = [
  { icon: IconDashboard, label: 'Dashboard', path: '/' },
  { icon: IconRobot, label: 'AI Engine', path: '/ai' },
  { icon: IconBug, label: 'Bug Bounty', path: '/bug-bounty' },
  { icon: IconCode, label: 'Exploit Dev', path: '/exploit-dev' },
  { icon: IconShield, label: 'Pentest Automation', path: '/pentest' },
  { icon: IconDatabase, label: 'Vuln Management', path: '/vuln-management' },
  { icon: IconWorld, label: 'Web Scanning', path: '/scan-web' },
  { icon: IconApi, label: 'API Scanning', path: '/scan-api' },
  { icon: IconCloud, label: 'Cloud Scanning', path: '/scan-cloud' },
  { icon: IconCpu, label: 'Hardware Scanning', path: '/scan-hardware' },
  { icon: IconInfoCircle, label: 'Info Scanning', path: '/scan-info' },
  { icon: IconSearch, label: 'OSINT', path: '/osint' },
  { icon: IconHexagons, label: 'Honeypot', path: '/honeypot' },
  { icon: IconLock, label: 'Reverse Engineering', path: '/reverse-eng' },
  { icon: IconCurrency, label: 'Web3 Security', path: '/web3' },
  { icon: IconTarget, label: 'Plugin Architecture', path: '/plugins' },
  { icon: IconBell, label: 'Notifications', path: '/notifications' },
  { icon: IconReportAnalytics, label: 'Management', path: '/management' },
  { icon: IconSettings, label: 'Settings', path: '/settings' }
]

export function Navbar() {
  const location = useLocation()

  return (
    <Stack gap={2}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          href={item.path}
          label={item.label}
          leftSection={<item.icon size="1rem" />}
          active={location.pathname === item.path}
          variant="subtle"
          component="a"
          onClick={(e) => {
            e.preventDefault()
            window.history.pushState({}, '', item.path)
            window.dispatchEvent(new PopStateEvent('popstate'))
          }}
        />
      ))}
    </Stack>
  )
}