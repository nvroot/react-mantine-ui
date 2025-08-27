import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconBug, IconTarget, IconClock, IconTrophy } from '@tabler/icons-react'

export function BugBountyPage() {
  const campaigns = [
    { 
      name: 'E-commerce Platform', 
      status: 'Running', 
      progress: 75, 
      severity: 'High',
      findings: 12,
      timeLeft: '5 days'
    },
    { 
      name: 'Banking API', 
      status: 'Completed', 
      progress: 100, 
      severity: 'Critical',
      findings: 8,
      timeLeft: 'Completed'
    },
    { 
      name: 'Social Media App', 
      status: 'Planning', 
      progress: 25, 
      severity: 'Medium',
      findings: 0,
      timeLeft: '10 days'
    },
  ]

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Bug Bounty</Title>
        <Button leftSection={<IconTarget size={16} />}>
          New Campaign
        </Button>
      </Group>

      <Grid gutter="md">
        {campaigns.map((campaign, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconBug size={20} />
                  <Text fw={500}>{campaign.name}</Text>
                </Group>
                <Badge 
                  color={campaign.status === 'Running' ? 'blue' : campaign.status === 'Completed' ? 'green' : 'gray'} 
                  size="sm"
                >
                  {campaign.status}
                </Badge>
              </Group>

              <Stack gap="sm" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Progress</Text>
                  <Text size="sm">{campaign.progress}%</Text>
                </Group>
                <Progress value={campaign.progress} size="sm" />
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Findings</Text>
                  <Badge variant="light" color="red" size="sm">
                    {campaign.findings}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Time Left</Text>
                  <Text size="sm">{campaign.timeLeft}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconTrophy size={14} />}>
                  View Results
                </Button>
                <Button variant="subtle" size="xs" leftSection={<IconClock size={14} />}>
                  Schedule
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}