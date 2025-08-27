import { Grid, Card, Text, Badge, Button, Group, Stack, Modal, TextInput, Textarea, Select, Slider } from '@mantine/core'
import { useState } from 'react'
import { IconCode, IconEdit, IconTrash, IconPlus, IconPlayerPlay, IconCopy, IconTestPipe } from '@tabler/icons-react'

export function PromptEngineering() {
  const [opened, setOpened] = useState(false)
  const [testOpened, setTestOpened] = useState(false)
  const [editingPrompt, setEditingPrompt] = useState(null)

  const attackPrompts = [
    {
      id: 1,
      name: 'Advanced SQL Injection Tester',
      category: 'Web Security',
      type: 'Attack Prompt',
      effectiveness: 94,
      usage: 156,
      lastTested: '2 hours ago',
      variables: ['target_url', 'injection_type', 'payload_complexity'],
      prompt: 'As an expert penetration tester, analyze the following URL for SQL injection vulnerabilities: {target_url}. Focus on {injection_type} attacks with {payload_complexity} complexity. Provide detailed exploitation steps and proof of concept.',
      temperature: 0.7,
      maxTokens: 2000
    },
    {
      id: 2,
      name: 'Network Reconnaissance Specialist',
      category: 'Network Security',
      type: 'System Prompt',
      effectiveness: 87,
      usage: 89,
      lastTested: '1 day ago',
      variables: ['target_network', 'scan_intensity'],
      prompt: 'You are a network reconnaissance expert. Conduct a {scan_intensity} scan of the network {target_network}. Identify all active hosts, open ports, and running services. Provide a comprehensive report with potential attack vectors.',
      temperature: 0.5,
      maxTokens: 1500
    },
    {
      id: 3,
      name: 'XSS Payload Generator',
      category: 'Web Security',
      type: 'Attack Prompt',
      effectiveness: 91,
      usage: 203,
      lastTested: '4 hours ago',
      variables: ['target_parameter', 'context_type', 'browser_target'],
      prompt: 'Generate sophisticated XSS payloads for parameter {target_parameter} in {context_type} context, targeting {browser_target}. Include bypass techniques for common filters and WAFs.',
      temperature: 0.8,
      maxTokens: 1200
    },
    {
      id: 4,
      name: 'Social Engineering Profiler',
      category: 'Social Engineering',
      type: 'Analysis Prompt',
      effectiveness: 78,
      usage: 45,
      lastTested: '6 hours ago',
      variables: ['target_info', 'social_platforms'],
      prompt: 'Analyze the following target information: {target_info} from platforms: {social_platforms}. Create a detailed psychological profile and suggest effective social engineering attack vectors.',
      temperature: 0.6,
      maxTokens: 1800
    }
  ]

  const categories = ['Web Security', 'Network Security', 'Social Engineering', 'Code Security', 'Mobile Security']
  const promptTypes = ['System Prompt', 'Attack Prompt', 'Analysis Prompt', 'Report Prompt']

  const handleAddPrompt = () => {
    setEditingPrompt(null)
    setOpened(true)
  }

  const handleEditPrompt = (prompt) => {
    setEditingPrompt(prompt)
    setOpened(true)
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>Attack Prompt Engineering</Text>
        <Group>
          <Button variant="light" leftSection={<IconTestPipe size={16} />} onClick={() => setTestOpened(true)}>
            Test Prompt
          </Button>
          <Button leftSection={<IconPlus size={16} />} onClick={handleAddPrompt}>
            Create Prompt
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {attackPrompts.map((prompt) => (
          <Grid.Col key={prompt.id} span={{ base: 12, lg: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconCode size={20} />
                  <Text fw={500} size="sm">{prompt.name}</Text>
                </Group>
                <Badge 
                  color={prompt.effectiveness > 85 ? 'green' : prompt.effectiveness > 70 ? 'yellow' : 'red'} 
                  size="sm"
                >
                  {prompt.effectiveness}% effective
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Category</Text>
                  <Badge size="sm" variant="light">{prompt.category}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Text size="sm">{prompt.type}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Usage</Text>
                  <Text size="sm">{prompt.usage} times</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Variables</Text>
                  <Text size="sm">{prompt.variables.length}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Temperature</Text>
                  <Text size="sm">{prompt.temperature}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Max Tokens</Text>
                  <Text size="sm">{prompt.maxTokens}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Tested</Text>
                  <Text size="sm">{prompt.lastTested}</Text>
                </Group>

                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Variables</Text>
                  <Group gap="xs">
                    {prompt.variables.slice(0, 3).map((variable, index) => (
                      <Badge key={index} size="xs" variant="outline">
                        {variable}
                      </Badge>
                    ))}
                    {prompt.variables.length > 3 && (
                      <Badge size="xs" variant="outline">
                        +{prompt.variables.length - 3}
                      </Badge>
                    )}
                  </Group>
                </Stack>

                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Prompt Preview</Text>
                  <Text size="xs" c="dimmed" style={{ 
                    backgroundColor: 'var(--mantine-color-gray-1)', 
                    padding: '8px', 
                    borderRadius: '4px',
                    maxHeight: '60px',
                    overflow: 'hidden'
                  }}>
                    {prompt.prompt.substring(0, 120)}...
                  </Text>
                </Stack>
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconPlayerPlay size={14} />}
                >
                  Test
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconCopy size={14} />}
                >
                  Copy
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditPrompt(prompt)}
                >
                  Edit
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

      {/* Create/Edit Prompt Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingPrompt ? 'Edit Attack Prompt' : 'Create Attack Prompt'}
        size="xl"
      >
        <Stack gap="md">
          <TextInput
            label="Prompt Name"
            placeholder="Enter prompt name"
            defaultValue={editingPrompt?.name || ''}
          />
          
          <Group grow>
            <Select
              label="Category"
              placeholder="Select category"
              data={categories}
              defaultValue={editingPrompt?.category || ''}
            />
            <Select
              label="Type"
              placeholder="Select type"
              data={promptTypes}
              defaultValue={editingPrompt?.type || ''}
            />
          </Group>
          
          <Textarea
            label="Prompt Content"
            placeholder="Enter your attack prompt with {variables} in curly braces"
            minRows={8}
            defaultValue={editingPrompt?.prompt || ''}
          />
          
          <TextInput
            label="Variables (comma-separated)"
            placeholder="target_url, injection_type, payload_complexity"
            defaultValue={editingPrompt?.variables?.join(', ') || ''}
          />
          
          <Group grow>
            <Stack gap="xs">
              <Text size="sm">Temperature: {editingPrompt?.temperature || 0.7}</Text>
              <Slider
                min={0}
                max={2}
                step={0.1}
                defaultValue={editingPrompt?.temperature || 0.7}
                marks={[
                  { value: 0, label: '0' },
                  { value: 1, label: '1' },
                  { value: 2, label: '2' }
                ]}
              />
            </Stack>
            <TextInput
              label="Max Tokens"
              placeholder="2000"
              type="number"
              defaultValue={editingPrompt?.maxTokens || 2000}
            />
          </Group>
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              {editingPrompt ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* Test Prompt Modal */}
      <Modal
        opened={testOpened}
        onClose={() => setTestOpened(false)}
        title="Test Attack Prompt"
        size="lg"
      >
        <Stack gap="md">
          <Select
            label="Select Prompt"
            placeholder="Choose prompt to test"
            data={attackPrompts.map(p => p.name)}
          />
          
          <Text size="sm" fw={500}>Variable Values:</Text>
          <TextInput
            label="target_url"
            placeholder="https://example.com/login.php"
          />
          <TextInput
            label="injection_type"
            placeholder="Union-based"
          />
          <TextInput
            label="payload_complexity"
            placeholder="Advanced"
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setTestOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setTestOpened(false)}>
              Run Test
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}