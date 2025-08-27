import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconSearch, IconEye, IconTarget, IconDatabase } from '@tabler/icons-react'

export function OSINTPage() {
  const investigations = [
    { 
      target: 'example-corp.com',
      type: 'Domain Investigation',
      status: 'Active',
      progress: 85,
      sources: 12,
      findings: 24,
      credibility: 'High'
    },
    { 
      target: 'john.doe@company.com',
      type: 'Email Investigation',
      status: 'Completed',
      progress: 100,
      sources: 8,
      findings: 16,
      credibility: 'Medium'
    },
    { 
      target: '192.168.1.100',
      type: 'IP Investigation',
      status: 'Pending',
      progress: 0,
      sources: 0,
      findings: 0,
      credibility: 'Unknown'
    },
  ]

  const getCredibilityColor = (credibility) => {
    switch (credibility) {
      case 'High': return 'green'
      case 'Medium': return 'yellow'
      case 'Low': return 'orange'
      case 'Unknown': return 'gray'
      default: return 'gray'
    }
  }

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>OSINT Intelligence</Title>
        <Button leftSection={<IconTarget size={16} />}>
          New Investigation
        </Button>
      </Group>

      <Grid gutter="md">
        {investigations.map((investigation, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconSearch size={20} />
                  <Text fw={500} size="sm">{investigation.type}</Text>
                </Group>
                <Badge 
                  color={
                    investigation.status === 'Active' ? 'blue' : 
                    investigation.status === 'Completed' ? 'green' : 'gray'
                  } 
                  size="sm"
                >
                  {investigation.status}
                </Badge>
              </Group>

              <Stack gap="sm" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Target</Text>
                  <Text size="sm" fw={500} truncate style={{ maxWidth: '120px' }}>
                    {investigation.target}
                  </Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Progress</Text>
                  <Text size="sm">{investigation.progress}%</Text>
                </Group>
                <Progress value={investigation.progress} size="sm" />
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Sources</Text>
                  <Text size="sm">{investigation.sources}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Findings</Text>
                  <Badge variant="light" color="blue" size="sm">
                    {investigation.findings}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Credibility</Text>
                  <Badge color={getCredibilityColor(investigation.credibility)} size="sm">
                    {investigation.credibility}
                  </Badge>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconEye size={14} />}>
                  View Intel
                </Button>
                <Button variant="subtle" size="xs" leftSection={<IconDatabase size={14} />}>
                  Export
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}