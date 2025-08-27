import { Container, Title, Stack, Card, Group, Text, Badge, ActionIcon, Button } from '@mantine/core'
import { IconBell, IconTrash, IconEye, IconAlertTriangle, IconShield, IconBug } from '@tabler/icons-react'

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'Security Alert',
      title: 'Critical vulnerability detected in Web Scanner',
      message: 'SQL injection vulnerability found in login endpoint',
      severity: 'Critical',
      timestamp: '2 minutes ago',
      read: false,
      icon: IconAlertTriangle
    },
    {
      id: 2,
      type: 'System Update',
      title: 'AI Engine optimization completed',
      message: 'Performance improvements deployed successfully',
      severity: 'Info',
      timestamp: '15 minutes ago',
      read: false,
      icon: IconShield
    },
    {
      id: 3,
      type: 'Bug Bounty',
      title: 'New vulnerability submission',
      message: 'XSS vulnerability reported for example.com',
      severity: 'Medium',
      timestamp: '1 hour ago',
      read: true,
      icon: IconBug
    },
    {
      id: 4,
      type: 'Security Alert',
      title: 'Honeypot interaction detected',
      message: 'Malicious activity detected on SMTP honeypot',
      severity: 'High',
      timestamp: '2 hours ago',
      read: true,
      icon: IconAlertTriangle
    },
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'red'
      case 'High': return 'orange'
      case 'Medium': return 'yellow'
      case 'Info': return 'blue'
      default: return 'gray'
    }
  }

  return (
    <Container size="md" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Notifications</Title>
        <Button variant="light" size="sm">
          Mark All as Read
        </Button>
      </Group>

      <Stack gap="sm">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            withBorder 
            p="md" 
            style={{ 
              borderLeft: `4px solid var(--mantine-color-${getSeverityColor(notification.severity)}-6)`,
              opacity: notification.read ? 0.7 : 1
            }}
          >
            <Group justify="space-between" align="start">
              <Group align="start" gap="md">
                <notification.icon 
                  size={20} 
                  style={{ 
                    color: `var(--mantine-color-${getSeverityColor(notification.severity)}-6)`,
                    marginTop: 2 
                  }} 
                />
                
                <Stack gap="xs" style={{ flex: 1 }}>
                  <Group gap="xs">
                    <Text fw={500} size="sm">{notification.title}</Text>
                    {!notification.read && (
                      <Badge size="xs" color="blue">New</Badge>
                    )}
                  </Group>
                  
                  <Text size="sm" c="dimmed">{notification.message}</Text>
                  
                  <Group gap="lg">
                    <Badge 
                      variant="light" 
                      color={getSeverityColor(notification.severity)} 
                      size="sm"
                    >
                      {notification.severity}
                    </Badge>
                    <Text size="xs" c="dimmed">{notification.timestamp}</Text>
                  </Group>
                </Stack>
              </Group>

              <Group gap="xs">
                <ActionIcon variant="subtle" size="sm">
                  <IconEye size={14} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="red" size="sm">
                  <IconTrash size={14} />
                </ActionIcon>
              </Group>
            </Group>
          </Card>
        ))}
      </Stack>

      {notifications.length === 0 && (
        <Card withBorder p="xl" style={{ textAlign: 'center' }}>
          <IconBell size={48} style={{ margin: '0 auto', opacity: 0.3 }} />
          <Title order={4} mt="md" c="dimmed">No notifications</Title>
          <Text size="sm" c="dimmed">You're all caught up!</Text>
        </Card>
      )}
    </Container>
  )
}