import { Card, Group, Text, Badge, Stack, Progress } from '@mantine/core'
import { IconActivity, IconDatabase, IconShield, IconAlertTriangle } from '@tabler/icons-react'

const services = [
  {
    name: 'AI Engine',
    status: 'ACTIVE',
    health: 98,
    icon: IconActivity,
    color: 'green'
  },
  {
    name: 'Scanner Core',
    status: 'ACTIVE', 
    health: 95,
    icon: IconDatabase,
    color: 'green'
  },
  {
    name: 'Vulnerability DB',
    status: 'ACTIVE',
    health: 99,
    icon: IconShield,
    color: 'green'
  },
  {
    name: 'Network Module',
    status: 'WARNING',
    health: 76,
    icon: IconAlertTriangle,
    color: 'yellow'
  }
]

export function ServiceStatus() {
  return (
    <Stack gap="md">
      {services.map((service, index) => (
        <Card key={index} withBorder p="md" radius="md">
          <Group justify="space-between" mb="xs">
            <Group gap="xs">
              <service.icon size={20} />
              <Text fw={500}>{service.name}</Text>
            </Group>
            <Badge 
              variant="light" 
              color={service.color}
              size="sm"
            >
              {service.status}
            </Badge>
          </Group>
          
          <Stack gap="xs">
            <Group justify="space-between">
              <Text size="sm" c="dimmed">Health Score</Text>
              <Text size="sm" fw={500}>{service.health}%</Text>
            </Group>
            <Progress 
              value={service.health} 
              color={service.color}
              size="sm"
              radius="xl"
            />
          </Stack>
        </Card>
      ))}
    </Stack>
  )
}