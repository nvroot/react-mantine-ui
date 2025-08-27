import { Grid, Card, Text, Badge, Button, Group, Stack, Progress, Modal, Select, TextInput, Textarea, Code } from '@mantine/core'
import { useState } from 'react'
import { IconTerminal, IconPlayerPlay, IconPlayerStop, IconRefresh, IconEye, IconDownload } from '@tabler/icons-react'

export function AgentExecution() {
  const [executeOpened, setExecuteOpened] = useState(false)
  const [logsOpened, setLogsOpened] = useState(false)
  const [viewingLogs, setViewingLogs] = useState(null)

  const executions = [
    {
      id: 'exec-001',
      agent: 'Web Vulnerability Hunter',
      status: 'Running',
      progress: 65,
      startTime: '14:23:15',
      duration: '00:12:34',
      target: 'https://demo.testfire.net',
      findings: 3,
      currentStep: 'SQL Injection Testing',
      totalSteps: 6,
      logs: [
        '[14:23:15] Starting vulnerability assessment...',
        '[14:23:20] Reconnaissance phase completed',
        '[14:25:45] Technology stack detected: Apache/PHP/MySQL',
        '[14:28:12] SQL injection vulnerability found in login form',
        '[14:30:05] XSS vulnerability detected in search parameter',
        '[14:32:18] Testing authentication bypass methods...'
      ]
    },
    {
      id: 'exec-002',
      agent: 'Network Reconnaissance Agent',
      status: 'Completed',
      progress: 100,
      startTime: '13:45:22',
      duration: '00:45:18',
      target: '192.168.1.0/24',
      findings: 12,
      currentStep: 'Report Generation',
      totalSteps: 8,
      logs: [
        '[13:45:22] Network discovery initiated',
        '[13:47:10] 15 hosts discovered',
        '[13:52:33] Port scanning completed',
        '[14:15:22] Service enumeration finished',
        '[14:28:17] Vulnerability assessment completed',
        '[14:30:40] Report generation completed'
      ]
    },
    {
      id: 'exec-003',
      agent: 'Exploit Development Assistant',
      status: 'Failed',
      progress: 35,
      startTime: '12:15:08',
      duration: '00:08:22',
      target: 'Buffer Overflow - CVE-2024-1234',
      findings: 0,
      currentStep: 'Payload Generation',
      totalSteps: 5,
      logs: [
        '[12:15:08] Exploit development started',
        '[12:16:45] Target analysis completed',
        '[12:18:33] Memory layout analysis in progress',
        '[12:23:30] ERROR: Unable to determine exact offset',
        '[12:23:30] Execution terminated due to analysis failure'
      ]
    },
    {
      id: 'exec-004',
      agent: 'Social Engineering Analyst',
      status: 'Queued',
      progress: 0,
      startTime: 'Pending',
      duration: 'N/A',
      target: 'john.doe@company.com',
      findings: 0,
      currentStep: 'Waiting to start',
      totalSteps: 7,
      logs: []
    }
  ]

  const availableAgents = [
    'Web Vulnerability Hunter',
    'Network Reconnaissance Agent', 
    'Exploit Development Assistant',
    'Social Engineering Analyst'
  ]

  const handleViewLogs = (execution) => {
    setViewingLogs(execution)
    setLogsOpened(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Running': return 'blue'
      case 'Completed': return 'green'
      case 'Failed': return 'red'
      case 'Queued': return 'gray'
      default: return 'gray'
    }
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>Agent Execution Monitor</Text>
        <Group>
          <Button variant="light" leftSection={<IconRefresh size={16} />}>
            Refresh
          </Button>
          <Button leftSection={<IconPlayerPlay size={16} />} onClick={() => setExecuteOpened(true)}>
            Execute Agent
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {executions.map((execution) => (
          <Grid.Col key={execution.id} span={{ base: 12, lg: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconTerminal size={20} />
                  <Text fw={500} size="sm">{execution.agent}</Text>
                </Group>
                <Badge color={getStatusColor(execution.status)} size="sm">
                  {execution.status}
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Execution ID</Text>
                  <Code size="xs">{execution.id}</Code>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Target</Text>
                  <Text size="sm" truncate style={{ maxWidth: '150px' }}>
                    {execution.target}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Start Time</Text>
                  <Text size="sm">{execution.startTime}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Duration</Text>
                  <Text size="sm">{execution.duration}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Progress</Text>
                  <Text size="sm">{execution.progress}%</Text>
                </Group>
                
                {execution.status === 'Running' && (
                  <Progress 
                    value={execution.progress} 
                    size="sm" 
                    color="blue"
                    animated
                  />
                )}
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Current Step</Text>
                  <Text size="sm">{execution.currentStep}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Steps</Text>
                  <Text size="sm">{execution.totalSteps} total</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Findings</Text>
                  <Badge 
                    size="sm" 
                    color={execution.findings > 0 ? 'red' : 'green'}
                    variant="light"
                  >
                    {execution.findings}
                  </Badge>
                </Group>
              </Stack>

              <Group gap="xs">
                {execution.status === 'Running' && (
                  <Button 
                    variant="light" 
                    color="red"
                    size="xs" 
                    leftSection={<IconPlayerStop size={14} />}
                  >
                    Stop
                  </Button>
                )}
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEye size={14} />}
                  onClick={() => handleViewLogs(execution)}
                >
                  Logs
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconDownload size={14} />}
                  disabled={execution.status !== 'Completed'}
                >
                  Report
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Execute Agent Modal */}
      <Modal
        opened={executeOpened}
        onClose={() => setExecuteOpened(false)}
        title="Execute AI Agent"
        size="lg"
      >
        <Stack gap="md">
          <Select
            label="Select Agent"
            placeholder="Choose agent to execute"
            data={availableAgents}
          />
          
          <TextInput
            label="Target"
            placeholder="Enter target (URL, IP, domain, etc.)"
          />
          
          <Textarea
            label="Execution Parameters"
            placeholder="Additional parameters or configuration for the agent"
            minRows={3}
          />
          
          <Select
            label="Execution Mode"
            placeholder="Select mode"
            data={['Standard', 'Aggressive', 'Stealth', 'Custom']}
            defaultValue="Standard"
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setExecuteOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setExecuteOpened(false)}>
              Start Execution
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* View Logs Modal */}
      <Modal
        opened={logsOpened}
        onClose={() => setLogsOpened(false)}
        title={`Execution Logs - ${viewingLogs?.agent}`}
        size="xl"
      >
        {viewingLogs && (
          <Stack gap="md">
            <Group>
              <Badge color={getStatusColor(viewingLogs.status)}>
                {viewingLogs.status}
              </Badge>
              <Code size="sm">{viewingLogs.id}</Code>
              <Text size="sm" c="dimmed">Target: {viewingLogs.target}</Text>
            </Group>
            
            <Stack gap={4}>
              <Text size="sm" fw={500}>Execution Log:</Text>
              <Card withBorder p="md" style={{ backgroundColor: 'var(--mantine-color-gray-0)' }}>
                <Stack gap={2}>
                  {viewingLogs.logs.length > 0 ? (
                    viewingLogs.logs.map((log, index) => (
                      <Text key={index} size="sm" ff="monospace">
                        {log}
                      </Text>
                    ))
                  ) : (
                    <Text size="sm" c="dimmed" style={{ fontStyle: 'italic' }}>
                      No logs available - execution not started
                    </Text>
                  )}
                </Stack>
              </Card>
            </Stack>
            
            <Group justify="space-between">
              <Group gap="sm">
                <Text size="sm" c="dimmed">Progress: {viewingLogs.progress}%</Text>
                <Text size="sm" c="dimmed">Duration: {viewingLogs.duration}</Text>
                <Text size="sm" c="dimmed">Findings: {viewingLogs.findings}</Text>
              </Group>
              
              <Group gap="sm">
                <Button variant="outline" leftSection={<IconDownload size={16} />}>
                  Export Logs
                </Button>
                <Button variant="outline" leftSection={<IconRefresh size={16} />}>
                  Refresh
                </Button>
              </Group>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  )
}