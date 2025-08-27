import { AppShell } from '@mantine/core'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from './components/Layout/Navbar'
import { Header } from './components/Layout/Header'
import { Dashboard } from './pages/Dashboard'
import { AIPage } from './pages/AI'
import { BugBountyPage } from './pages/BugBounty'
import { ExploitDevPage } from './pages/ExploitDev'
import { PentestPage } from './pages/Pentest'
import { VulnManagementPage } from './pages/VulnManagement'
import { ScanWebPage } from './pages/ScanWeb'
import { ScanAPIPage } from './pages/ScanAPI'
import { ScanCloudPage } from './pages/ScanCloud'
import { OSINTPage } from './pages/OSINT'
import { HoneypotPage } from './pages/Honeypot'
import { NotificationsPage } from './pages/Notifications'
import { SettingsPage } from './pages/Settings'

function App() {
  const [mobileOpened, setMobileOpened] = useState(false)
  const [desktopOpened, setDesktopOpened] = useState(true)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header 
          mobileOpened={mobileOpened}
          desktopOpened={desktopOpened}
          setMobileOpened={setMobileOpened}
          setDesktopOpened={setDesktopOpened}
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/bug-bounty" element={<BugBountyPage />} />
          <Route path="/exploit-dev" element={<ExploitDevPage />} />
          <Route path="/pentest" element={<PentestPage />} />
          <Route path="/vuln-management" element={<VulnManagementPage />} />
          <Route path="/scan-web" element={<ScanWebPage />} />
          <Route path="/scan-api" element={<ScanAPIPage />} />
          <Route path="/scan-cloud" element={<ScanCloudPage />} />
          <Route path="/osint" element={<OSINTPage />} />
          <Route path="/honeypot" element={<HoneypotPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}

export default App