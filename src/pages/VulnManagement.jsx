import { Container, Title, Grid, Card, Text, Badge, Button, Group, Stack, Progress } from '@mantine/core'
import { IconDatabase, IconBug, IconShield, IconEye } from '@tabler/icons-react'

export function VulnManagementPage() {
  const vulnerabilities = [
    { 
      id: 'VULN-2024-001',
      title: 'SQL Injection in Login Form',
      severity: 'Critical',
      cvss: 9.8,
      status: 'Open',
      exploited: true,
      platform: 'Web Application'
    },
    { 
      id: 'VULN-2024-002',
      title: 'Buffer Overflow in Authentication',
      severity: 'High',
      cvss: 8.1,
      status: 'In Progress',
      exploited: false,
      platform: 'Native App'
    },
    { 
      id: 'VULN-2024-003',
      title: 'XSS in Comment Section',
      severity: 'Medium',
      cvss: 6.1,
      status: 'Resolved',
      exploited: true,
      platform: 'Web Application'
    },
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'red'
      case 'High': return 'orange'
      case 'Medium': return 'yellow'
      case 'Low': return 'blue'
      default: return 'gray'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'red'
      case 'In Progress': return 'blue'
      case 'Resolved': return 'green'
      default: return 'gray'
    }
  }

  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Vulnerability Management</Title>
        <Button leftSection={<IconBug size={16} />}>
          Add Vulnerability
        </Button>
      </Group>

      <Grid gutter="md">
        {vulnerabilities.map((vuln, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconDatabase size={20} />
                  <Text fw={500} size="sm">{vuln.title}</Text>
                </Group>
                <Badge color={getStatusColor(vuln.status)} size="sm">
                  {vuln.status}
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">ID</Text>
                  <Text size="sm" fw={500}>{vuln.id}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Severity</Text>
                  <Badge color={getSeverityColor(vuln.severity)} size="sm">
                    {vuln.severity}
                  </Badge>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">CVSS Score</Text>
                  <Text size="sm" fw={500}>{vuln.cvss}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Platform</Text>
                  <Text size="sm">{vuln.platform}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Exploited</Text>
                  <Badge color={vuln.exploited ? 'red' : 'green'} size="sm">
                    {vuln.exploited ? 'Yes' : 'No'}
                  </Badge>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button variant="light" size="xs" leftSection={<IconEye size={14} />}>
                  View Details
                </Button>
                <Button variant="subtle" size="xs" leftSection={<IconShield size={14} />}>
                  PoC
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}