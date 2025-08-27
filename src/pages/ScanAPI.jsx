import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconApi, IconCode, IconTarget, IconReport } from '@tabler/icons-react'

export function ScanAPIPage() {
  const apiScans = [
    { 
      name: 'REST API v1',
      endpoint: 'https://api.example.com/v1',
      status: 'Scanning',
      progress: 67,
      endpoints: 24,
      vulnerabilities: 2,
      method: 'Automated'
    },
    { 
      name: 'GraphQL API',
      endpoint: 'https://graph.example.com/graphql',
      status: 'Completed',
      progress: 100,
      endpoints: 15,
      vulnerabilities: 5,
      method: 'Manual + AI'
    },
    { 
      name: 'Internal API',
      endpoint: 'https://internal-api.company.com',
      status: 'Failed',
      progress: 25,
      endpoints: 0,
      vulnerabilities: 0,
      method: 'Automated'
    },
  ]

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>API Security Scanning</Title>
        <Button leftSection={<IconTarget size={16} />}>
          New API Scan
        </Button>
      </Group>

      <Grid gutter="md">
        {apiScans.map((scan, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconApi size={20} />
                  <Text fw={500} size="sm">{scan.name}</Text>
                </Group>
                <Badge 
                  color={
                    scan.status === 'Scanning' ? 'blue' : 
                    scan.status === 'Completed' ? 'green' : 'red'
                  } 
                  size="sm"
                >
                  {scan.status}
                </Badge>
              </Group>

              <Stack gap="sm" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Endpoint</Text>
                  <Text size="xs" truncate style={{ maxWidth: '150px' }}>{scan.endpoint}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Progress</Text>
                  <Text size="sm">{scan.progress}%</Text>
                </Group>
                <Progress value={scan.progress} size="sm" />
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Endpoints</Text>
                  <Text size="sm">{scan.endpoints}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Issues Found</Text>
                  <Badge variant="light" color={scan.vulnerabilities > 0 ? 'red' : 'green'} size="sm">
                    {scan.vulnerabilities}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Method</Text>
                  <Text size="sm">{scan.method}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconCode size={14} />}>
                  {scan.status === 'Failed' ? 'Retry' : 'Details'}
                </Button>
                <Button variant="subtle" size="xs" leftSection={<IconReport size={14} />}>
                  Report
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}