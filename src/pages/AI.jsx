import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack } from '@mantine/core'
import { IconRobot, IconBrain, IconSettings, IconPlayerPlay } from '@tabler/icons-react'

export function AIPage() {
  const agents = [
    { name: 'Web Scanner Agent', status: 'Active', type: 'Scanner', model: 'GPT-4' },
    { name: 'Exploit Generator', status: 'Idle', type: 'Generator', model: 'Claude-3' },
    { name: 'Vulnerability Analyzer', status: 'Active', type: 'Analyzer', model: 'GPT-4' },
    { name: 'Report Writer', status: 'Active', type: 'Writer', model: 'Gemini-Pro' },
  ]

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>AI Engine</Title>
        <Button leftSection={<IconRobot size={16} />}>
          Create Agent
        </Button>
      </Group>

      <Grid gutter="md">
        {agents.map((agent, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconBrain size={20} />
                  <Text fw={500}>{agent.name}</Text>
                </Group>
                <Badge color={agent.status === 'Active' ? 'green' : 'gray'} size="sm">
                  {agent.status}
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Text size="sm">{agent.type}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Model</Text>
                  <Text size="sm">{agent.model}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconPlay size={14} />}>
                  Run
                </Button>
                <Button variant="subtle" size="xs" leftSection={<IconSettings size={14} />}>
                  Configure
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}