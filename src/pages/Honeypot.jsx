import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconHexagons, IconShield, IconTarget, IconActivity } from '@tabler/icons-react'

export function HoneypotPage() {
  const honeypots = [
    { 
      name: 'SMTP Honeypot',
      type: 'SMTP',
      status: 'Active',
      interactions: 1247,
      threats: 23,
      uptime: '99.8%',
      location: 'us-east-1'
    },
    { 
      name: 'HTTP Trap',
      type: 'HTTP',
      status: 'Active',
      interactions: 892,
      threats: 67,
      uptime: '99.5%',
      location: 'eu-west-1'
    },
    { 
      name: 'DNS Listener',
      type: 'DNS',
      status: 'Maintenance',
      interactions: 0,
      threats: 0,
      uptime: '0%',
      location: 'ap-south-1'
    },
    { 
      name: 'LDAP Honeypot',
      type: 'LDAP',
      status: 'Active',
      interactions: 345,
      threats: 12,
      uptime: '98.2%',
      location: 'us-west-2'
    },
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'SMTP': return 'blue'
      case 'HTTP': return 'green'
      case 'DNS': return 'orange'
      case 'LDAP': return 'purple'
      default: return 'gray'
    }
  }

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Honeypot Network</Title>
        <Button leftSection={<IconTarget size={16} />}>
          Deploy Honeypot
        </Button>
      </Group>

      <Grid gutter="md">
        {honeypots.map((honeypot, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconHexagons size={20} />
                  <Text fw={500} size="sm">{honeypot.name}</Text>
                </Group>
                <Badge 
                  color={honeypot.status === 'Active' ? 'green' : 'orange'} 
                  size="sm"
                >
                  {honeypot.status}
                </Badge>
              </Group>

              <Stack gap="sm" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Badge color={getTypeColor(honeypot.type)} size="sm">
                    {honeypot.type}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Location</Text>
                  <Text size="sm">{honeypot.location}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Interactions</Text>
                  <Text size="sm" fw={500}>{honeypot.interactions.toLocaleString()}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Threats</Text>
                  <Badge variant="light" color={honeypot.threats > 0 ? 'red' : 'green'} size="sm">
                    {honeypot.threats}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Uptime</Text>
                  <Text size="sm">{honeypot.uptime}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconActivity size={14} />}>
                  Monitor
                </Button>
                <Button variant="subtle" size="xs" leftSection={<IconShield size={14} />}>
                  Logs
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}