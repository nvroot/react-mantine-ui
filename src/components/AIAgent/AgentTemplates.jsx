import { Grid, Card, Text, Badge, Button, Group, Stack, Modal, TextInput, Textarea, Select, JsonInput } from '@mantine/core'
import { useState } from 'react'
import { IconTemplate, IconEdit, IconTrash, IconPlus, IconCopy, IconDownload, IconEye } from '@tabler/icons-react'

export function AgentTemplates() {
  const [opened, setOpened] = useState(false)
  const [viewOpened, setViewOpened] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState(null)
  const [viewingTemplate, setViewingTemplate] = useState(null)

  const templates = [
    {
      id: 1,
      name: 'Web Security Scanner Template',
      version: '2.1.0',
      category: 'Web Security',
      description: 'Comprehensive web application security testing template',
      author: 'Security Team',
      usage: 89,
      lastUpdated: '2 days ago',
      capabilities: ['SQL Injection', 'XSS Detection', 'CSRF Testing'],
      systemPrompt: 'You are a web security expert. Analyze the target for vulnerabilities...',
      attackPrompts: ['Test for SQL injection vulnerabilities', 'Check for XSS vectors'],
      workflow: ['Reconnaissance', 'Vulnerability Scanning', 'Exploitation', 'Reporting']
    },
    {
      id: 2,
      name: 'Network Reconnaissance Template',
      version: '1.5.2',
      category: 'Network Security',
      description: 'Network discovery and reconnaissance template',
      author: 'Red Team',
      usage: 67,
      lastUpdated: '1 week ago',
      capabilities: ['Port Scanning', 'Service Detection', 'OS Fingerprinting'],
      systemPrompt: 'You are a network reconnaissance specialist...',
      attackPrompts: ['Perform comprehensive port scanning', 'Identify running services'],
      workflow: ['Host Discovery', 'Port Scanning', 'Service Enumeration', 'Vulnerability Assessment']
    },
    {
      id: 3,
      name: 'Social Engineering Template',
      version: '3.0.1',
      category: 'Social Engineering',
      description: 'Advanced social engineering attack template',
      author: 'OSINT Team',
      usage: 45,
      lastUpdated: '5 days ago',
      capabilities: ['Information Gathering', 'Profile Analysis', 'Phishing'],
      systemPrompt: 'You are a social engineering expert...',
      attackPrompts: ['Gather target information', 'Analyze social media profiles'],
      workflow: ['Target Research', 'Profile Building', 'Attack Vector Design', 'Campaign Execution']
    },
    {
      id: 4,
      name: 'Code Security Analysis Template',
      version: '1.8.0',
      category: 'Code Security',
      description: 'Static and dynamic code analysis template',
      author: 'DevSec Team',
      usage: 72,
      lastUpdated: '3 days ago',
      capabilities: ['Static Analysis', 'Dynamic Testing', 'Dependency Scanning'],
      systemPrompt: 'You are a code security analyst...',
      attackPrompts: ['Analyze code for vulnerabilities', 'Check for insecure dependencies'],
      workflow: ['Code Review', 'Static Analysis', 'Dynamic Testing', 'Report Generation']
    }
  ]

  const categories = ['Web Security', 'Network Security', 'Social Engineering', 'Code Security', 'Mobile Security', 'Cloud Security']

  const handleAddTemplate = () => {
    setEditingTemplate(null)
    setOpened(true)
  }

  const handleEditTemplate = (template) => {
    setEditingTemplate(template)
    setOpened(true)
  }

  const handleViewTemplate = (template) => {
    setViewingTemplate(template)
    setViewOpened(true)
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>Agent Template Library</Text>
        <Button leftSection={<IconPlus size={16} />} onClick={handleAddTemplate}>
          Create Template
        </Button>
      </Group>

      <Grid gutter="md">
        {templates.map((template) => (
          <Grid.Col key={template.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconTemplate size={20} />
                  <Text fw={500} size="sm">{template.name}</Text>
                </Group>
                <Text size="xs" c="dimmed">v{template.version}</Text>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {template.description}
              </Text>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Category</Text>
                  <Badge size="sm" variant="light">{template.category}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Author</Text>
                  <Text size="sm">{template.author}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Usage</Text>
                  <Text size="sm">{template.usage} agents</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Updated</Text>
                  <Text size="sm">{template.lastUpdated}</Text>
                </Group>
                
                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Capabilities</Text>
                  <Group gap="xs">
                    {template.capabilities.slice(0, 2).map((cap, index) => (
                      <Badge key={index} size="xs" variant="outline">
                        {cap}
                      </Badge>
                    ))}
                    {template.capabilities.length > 2 && (
                      <Badge size="xs" variant="outline">
                        +{template.capabilities.length - 2}
                      </Badge>
                    )}
                  </Group>
                </Stack>
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconCopy size={14} />}
                >
                  Use
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEye size={14} />}
                  onClick={() => handleViewTemplate(template)}
                >
                  View
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditTemplate(template)}
                >
                  Edit
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconDownload size={14} />}
                >
                  Export
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Create/Edit Template Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingTemplate ? 'Edit Agent Template' : 'Create Agent Template'}
        size="xl"
      >
        <Stack gap="md">
          <Group grow>
            <TextInput
              label="Template Name"
              placeholder="Enter template name"
              defaultValue={editingTemplate?.name || ''}
            />
            <TextInput
              label="Version"
              placeholder="1.0.0"
              defaultValue={editingTemplate?.version || '1.0.0'}
            />
          </Group>
          
          <Group grow>
            <Select
              label="Category"
              placeholder="Select category"
              data={categories}
              defaultValue={editingTemplate?.category || ''}
            />
            <TextInput
              label="Author"
              placeholder="Enter author name"
              defaultValue={editingTemplate?.author || ''}
            />
          </Group>
          
          <Textarea
            label="Description"
            placeholder="Describe the template's purpose and functionality"
            minRows={3}
            defaultValue={editingTemplate?.description || ''}
          />
          
          <Textarea
            label="System Prompt"
            placeholder="Enter the system prompt for this template"
            minRows={4}
            defaultValue={editingTemplate?.systemPrompt || ''}
          />
          
          <JsonInput
            label="Attack Prompts (JSON Array)"
            placeholder='["Prompt 1", "Prompt 2"]'
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={3}
          />
          
          <JsonInput
            label="Workflow Steps (JSON Array)"
            placeholder='["Step 1", "Step 2", "Step 3"]'
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={3}
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              {editingTemplate ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* View Template Modal */}
      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title={viewingTemplate?.name}
        size="xl"
      >
        {viewingTemplate && (
          <Stack gap="md">
            <Group>
              <Badge>{viewingTemplate.category}</Badge>
              <Badge variant="outline">v{viewingTemplate.version}</Badge>
              <Text size="sm" c="dimmed">by {viewingTemplate.author}</Text>
            </Group>
            
            <Text size="sm">{viewingTemplate.description}</Text>
            
            <Stack gap="xs">
              <Text size="sm" fw={500}>System Prompt:</Text>
              <Textarea
                value={viewingTemplate.systemPrompt}
                readOnly
                minRows={4}
                styles={{
                  input: { backgroundColor: 'var(--mantine-color-gray-0)' }
                }}
              />
            </Stack>
            
            <Stack gap="xs">
              <Text size="sm" fw={500}>Workflow Steps:</Text>
              <Group gap="xs">
                {viewingTemplate.workflow.map((step, index) => (
                  <Badge key={index} variant="light" size="sm">
                    {index + 1}. {step}
                  </Badge>
                ))}
              </Group>
            </Stack>
            
            <Group justify="flex-end" gap="sm">
              <Button variant="outline" leftSection={<IconDownload size={16} />}>
                Export
              </Button>
              <Button leftSection={<IconCopy size={16} />}>
                Create Agent from Template
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  )
}