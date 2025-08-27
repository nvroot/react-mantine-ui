import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconWorld, IconSpider, IconTarget, IconReport } from '@tabler/icons-react'

export function ScanWebPage() {
  const scans = [
    { 
      target: 'https://example.com',
      status: 'Scanning',
      progress: 45,
      vulnerabilities: 3,
      pages: 127,
      duration: '15m 32s'
    },
    { 
      target: 'https://test-app.com',
      status: 'Completed',
      progress: 100,
      vulnerabilities: 8,
      pages: 89,
      duration: '23m 45s'
    },
    { 
      target: 'https://secure-site.com',
      status: 'Queued',
      progress: 0,
      vulnerabilities: 0,
      pages: 0,
      duration: 'Pending'
    },
  ]

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Web Application Scanning</Title>
        <Button leftSection={<IconTarget size={16} />}>
          New Scan
        </Button>
      </Group>

      <Grid gutter="md">
        {scans.map((scan, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconWorld size={20} />
                  <Text fw={500} size="sm">{scan.target}</Text>
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
                  <Text size="sm" c="dimmed">Progress</Text>
                  <Text size="sm">{scan.progress}%</Text>
                </Group>
                <Progress value={scan.progress} size="sm" />
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Vulnerabilities</Text>
                  <Badge variant="light" color={scan.vulnerabilities > 0 ? 'red' : 'green'} size="sm">
                    {scan.vulnerabilities}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Pages Scanned</Text>
                  <Text size="sm">{scan.pages}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Duration</Text>
                  <Text size="sm">{scan.duration}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconSpider size={14} />}>
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