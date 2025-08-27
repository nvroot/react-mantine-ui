import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconCloud, IconServer, IconTarget, IconReport } from '@tabler/icons-react'

export function ScanCloudPage() {
  const cloudScans = [
    { 
      name: 'AWS Production Environment',
      provider: 'AWS',
      region: 'us-east-1',
      status: 'Scanning',
      progress: 78,
      resources: 156,
      misconfigurations: 12,
      compliance: 'SOC2'
    },
    { 
      name: 'Azure Development',
      provider: 'Azure',
      region: 'East US',
      status: 'Completed',
      progress: 100,
      resources: 89,
      misconfigurations: 7,
      compliance: 'CIS'
    },
    { 
      name: 'GCP Staging',
      provider: 'GCP',
      region: 'us-central1',
      status: 'Queued',
      progress: 0,
      resources: 0,
      misconfigurations: 0,
      compliance: 'NIST'
    },
  ]

  const getProviderColor = (provider) => {
    switch (provider) {
      case 'AWS': return 'orange'
      case 'Azure': return 'blue'
      case 'GCP': return 'green'
      default: return 'gray'
    }
  }

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Cloud Security Scanning</Title>
        <Button leftSection={<IconTarget size={16} />}>
          New Cloud Scan
        </Button>
      </Group>

      <Grid gutter="md">
        {cloudScans.map((scan, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconCloud size={20} />
                  <Text fw={500} size="sm">{scan.name}</Text>
                </Group>
                <Badge 
                  color={scan.status === 'Scanning' ? 'blue' : scan.status === 'Completed' ? 'green' : 'gray'} 
                  size="sm"
                >
                  {scan.status}
                </Badge>
              </Group>

              <Stack gap="sm" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Provider</Text>
                  <Badge color={getProviderColor(scan.provider)} size="sm">
                    {scan.provider}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Region</Text>
                  <Text size="sm">{scan.region}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Progress</Text>
                  <Text size="sm">{scan.progress}%</Text>
                </Group>
                <Progress value={scan.progress} size="sm" />
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Resources</Text>
                  <Text size="sm">{scan.resources}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Issues</Text>
                  <Badge variant="light" color={scan.misconfigurations > 0 ? 'red' : 'green'} size="sm">
                    {scan.misconfigurations}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Compliance</Text>
                  <Text size="sm">{scan.compliance}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconServer size={14} />}>
                  {scan.status === 'Queued' ? 'Start' : 'Monitor'}
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