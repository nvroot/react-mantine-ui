import { Grid, Card, Text, Badge, Button, Group, Stack, Progress, Modal, TextInput, Textarea, Select, MultiSelect } from '@mantine/core'
import { useState } from 'react'
import { IconRobot, IconEdit, IconTrash, IconPlus, IconPlayerPlay, IconSettings, IconCopy } from '@tabler/icons-react'

export function AgentBuilder() {
  const [opened, setOpened] = useState(false)
  const [editingAgent, setEditingAgent] = useState(null)

  const agents = [
    {
      id: 1,
      name: 'Web Vulnerability Hunter',
      type: 'Attack Agent',
      status: 'Active',
      aiProvider: 'OpenAI GPT-4',
      capabilities: ['Web Scanning', 'SQL Injection', 'XSS Detection'],
      lastRun: '2 hours ago',
      success_rate: 94,
      total_runs: 127,
      template: 'Web Security Template',
      description: 'Specialized agent for detecting web application vulnerabilities'
    },
    {
      id: 2,
      name: 'Network Reconnaissance Agent',
      type: 'Recon Agent',
      status: 'Idle',
      aiProvider: 'Claude 3 Sonnet',
      capabilities: ['Port Scanning', 'Service Detection', 'OS Fingerprinting'],
      lastRun: '1 day ago',
      success_rate: 87,
      total_runs: 89,
      template: 'Network Recon Template',
      description: 'Comprehensive network reconnaissance and information gathering'
    },
    {
      id: 3,
      name: 'Exploit Development Assistant',
      type: 'Exploit Agent',
      status: 'Active',
      aiProvider: 'Gemini Pro',
      capabilities: ['Buffer Overflow', 'RCE', 'Privilege Escalation'],
      lastRun: '30 minutes ago',
      success_rate: 76,
      total_runs: 45,
      template: 'Exploit Dev Template',
      description: 'AI-powered exploit development and payload generation'
    },
    {
      id: 4,
      name: 'Social Engineering Analyst',
      type: 'OSINT Agent',
      status: 'Training',
      aiProvider: 'OpenAI GPT-4',
      capabilities: ['Information Gathering', 'Profile Analysis', 'Phishing'],
      lastRun: 'Never',
      success_rate: 0,
      total_runs: 0,
      template: 'Social Engineering Template',
      description: 'Advanced social engineering attack vector analysis'
    }
  ]

  const agentTypes = ['Attack Agent', 'Recon Agent', 'Exploit Agent', 'OSINT Agent', 'Defense Agent', 'Analysis Agent']
  const aiProviders = ['OpenAI GPT-4', 'Claude 3 Sonnet', 'Gemini Pro', 'Llama 2 70B']
  const availableCapabilities = [
    'Web Scanning', 'SQL Injection', 'XSS Detection', 'Port Scanning', 'Service Detection',
    'OS Fingerprinting', 'Buffer Overflow', 'RCE', 'Privilege Escalation', 'Information Gathering',
    'Profile Analysis', 'Phishing', 'Code Analysis', 'Vulnerability Assessment'
  ]

  const handleAddAgent = () => {
    setEditingAgent(null)
    setOpened(true)
  }

  const handleEditAgent = (agent) => {
    setEditingAgent(agent)
    setOpened(true)
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>AI Attack Agent Management</Text>
        <Button leftSection={<IconPlus size={16} />} onClick={handleAddAgent}>
          Create Agent
        </Button>
      </Group>

      <Grid gutter="md">
        {agents.map((agent) => (
          <Grid.Col key={agent.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconRobot size={20} />
                  <Text fw={500} size="sm">{agent.name}</Text>
                </Group>
                <Badge 
                  color={agent.status === 'Active' ? 'green' : agent.status === 'Idle' ? 'yellow' : 'blue'} 
                  size="sm"
                >
                  {agent.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {agent.description}
              </Text>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Badge size="sm" variant="light">{agent.type}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">AI Provider</Text>
                  <Text size="sm">{agent.aiProvider}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Template</Text>
                  <Text size="sm">{agent.template}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Success Rate</Text>
                  <Text size="sm" fw={500}>{agent.success_rate}%</Text>
                </Group>
                <Progress 
                  value={agent.success_rate} 
                  size="sm" 
                  color={agent.success_rate > 80 ? 'green' : agent.success_rate > 60 ? 'yellow' : 'red'}
                />
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Total Runs</Text>
                  <Text size="sm">{agent.total_runs}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Run</Text>
                  <Text size="sm">{agent.lastRun}</Text>
                </Group>
                
                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Capabilities</Text>
                  <Group gap="xs">
                    {agent.capabilities.slice(0, 2).map((cap, index) => (
                      <Badge key={index} size="xs" variant="outline">
                        {cap}
                      </Badge>
                    ))}
                    {agent.capabilities.length > 2 && (
                      <Badge size="xs" variant="outline">
                        +{agent.capabilities.length - 2}
                      </Badge>
                    )}
                  </Group>
                </Stack>
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconPlayerPlay size={14} />}
                  disabled={agent.status === 'Training'}
                >
                  Run
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditAgent(agent)}
                >
                  Edit
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconCopy size={14} />}
                >
                  Clone
                </Button>
                <Button 
                  variant="subtle" 
                  color="red" 
                  size="xs" 
                  leftSection={<IconTrash size={14} />}
                >
                  Delete
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingAgent ? 'Edit AI Agent' : 'Create AI Agent'}
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Agent Name"
            placeholder="Enter agent name"
            defaultValue={editingAgent?.name || ''}
          />
          <Textarea
            label="Description"
            placeholder="Describe the agent's purpose and functionality"
            minRows={3}
            defaultValue={editingAgent?.description || ''}
          />
          <Group grow>
            <Select
              label="Agent Type"
              placeholder="Select agent type"
              data={agentTypes}
              defaultValue={editingAgent?.type || ''}
            />
            <Select
              label="AI Provider"
              placeholder="Select AI provider"
              data={aiProviders}
              defaultValue={editingAgent?.aiProvider || ''}
            />
          </Group>
          <MultiSelect
            label="Capabilities"
            placeholder="Select agent capabilities"
            data={availableCapabilities}
            defaultValue={editingAgent?.capabilities || []}
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              {editingAgent ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}