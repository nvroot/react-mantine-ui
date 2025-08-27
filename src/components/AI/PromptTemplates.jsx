import { Grid, Card, Text, Badge, Button, Group, Stack, Textarea, Modal, Select, TextInput, ActionIcon } from '@mantine/core'
import { useState } from 'react'
import { IconTemplate, IconEdit, IconTrash, IconPlus, IconCopy, IconEye, IconDownload } from '@tabler/icons-react'

export function PromptTemplates() {
  const [opened, setOpened] = useState(false)
  const [viewOpened, setViewOpened] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState(null)
  const [viewingTemplate, setViewingTemplate] = useState(null)

  const templates = [
    {
      id: 1,
      name: 'SQL Injection Detection',
      category: 'Web Security',
      type: 'Attack Prompt',
      variables: ['target_url', 'injection_type'],
      template: 'Analyze the following URL for potential SQL injection vulnerabilities: {target_url}. Focus on {injection_type} attack vectors.',
      usage: 45,
      lastUsed: '2 hours ago',
      tags: ['sqli', 'web', 'attack']
    },
    {
      id: 2,
      name: 'Vulnerability Report Generator',
      category: 'Reporting',
      type: 'System Prompt',
      variables: ['vuln_data', 'severity'],
      template: 'Generate a comprehensive vulnerability report based on: {vuln_data}. Severity level: {severity}. Include remediation steps.',
      usage: 32,
      lastUsed: '1 day ago',
      tags: ['report', 'vulnerability', 'documentation']
    },
    {
      id: 3,
      name: 'Network Reconnaissance',
      category: 'Network Security',
      type: 'Attack Prompt',
      variables: ['target_network', 'scan_type'],
      template: 'Perform reconnaissance on network {target_network} using {scan_type} methodology. Identify open ports and services.',
      usage: 28,
      lastUsed: '3 hours ago',
      tags: ['network', 'recon', 'scanning']
    },
    {
      id: 4,
      name: 'Code Review Assistant',
      category: 'Code Security',
      type: 'System Prompt',
      variables: ['code_snippet', 'language'],
      template: 'Review the following {language} code for security vulnerabilities: {code_snippet}. Focus on common security patterns.',
      usage: 67,
      lastUsed: '30 minutes ago',
      tags: ['code-review', 'security', 'static-analysis']
    },
    {
      id: 5,
      name: 'Social Engineering Awareness',
      category: 'Social Engineering',
      type: 'Attack Prompt',
      variables: ['target_info', 'scenario'],
      template: 'Analyze social engineering attack vectors for scenario: {scenario}. Target information: {target_info}.',
      usage: 19,
      lastUsed: '2 days ago',
      tags: ['social-eng', 'phishing', 'awareness']
    }
  ]

  const categories = ['Web Security', 'Network Security', 'Code Security', 'Social Engineering', 'Reporting', 'General']
  const types = ['System Prompt', 'Attack Prompt', 'Analysis Prompt', 'Report Prompt']

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
        <Text size="lg" fw={600}>Prompt Template Management</Text>
        <Button leftSection={<IconPlus size={16} />} onClick={handleAddTemplate}>
          Create Template
        </Button>
      </Group>

      <Grid gutter="md">
        {templates.map((template) => (
          <Grid.Col key={template.id} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconTemplate size={20} />
                  <Text fw={500} size="sm">{template.name}</Text>
                </Group>
                <ActionIcon 
                  variant="subtle" 
                  onClick={() => handleViewTemplate(template)}
                >
                  <IconEye size={16} />
                </ActionIcon>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Category</Text>
                  <Badge size="sm" variant="light">{template.category}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Text size="sm">{template.type}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Variables</Text>
                  <Text size="sm">{template.variables.length}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Usage</Text>
                  <Text size="sm">{template.usage} times</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Used</Text>
                  <Text size="sm">{template.lastUsed}</Text>
                </Group>
                
                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Tags</Text>
                  <Group gap="xs">
                    {template.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} size="xs" variant="outline">
                        {tag}
                      </Badge>
                    ))}
                    {template.tags.length > 3 && (
                      <Badge size="xs" variant="outline">
                        +{template.tags.length - 3}
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
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditTemplate(template)}
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

      {/* Add/Edit Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingTemplate ? 'Edit Prompt Template' : 'Create Prompt Template'}
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Template Name"
            placeholder="Enter template name"
            defaultValue={editingTemplate?.name || ''}
          />
          <Group grow>
            <Select
              label="Category"
              placeholder="Select category"
              data={categories}
              defaultValue={editingTemplate?.category || ''}
            />
            <Select
              label="Type"
              placeholder="Select type"
              data={types}
              defaultValue={editingTemplate?.type || ''}
            />
          </Group>
          <Textarea
            label="Template Content"
            placeholder="Enter your prompt template with {variables}"
            minRows={6}
            defaultValue={editingTemplate?.template || ''}
          />
          <TextInput
            label="Variables (comma-separated)"
            placeholder="variable1, variable2, variable3"
            defaultValue={editingTemplate?.variables?.join(', ') || ''}
          />
          <TextInput
            label="Tags (comma-separated)"
            placeholder="tag1, tag2, tag3"
            defaultValue={editingTemplate?.tags?.join(', ') || ''}
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

      {/* View Modal */}
      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title={viewingTemplate?.name}
        size="lg"
      >
        {viewingTemplate && (
          <Stack gap="md">
            <Group>
              <Badge>{viewingTemplate.category}</Badge>
              <Badge variant="outline">{viewingTemplate.type}</Badge>
            </Group>
            
            <Stack gap="xs">
              <Text size="sm" fw={500}>Template Content:</Text>
              <Textarea
                value={viewingTemplate.template}
                readOnly
                minRows={6}
                styles={{
                  input: { backgroundColor: 'var(--mantine-color-gray-0)' }
                }}
              />
            </Stack>
            
            <Group>
              <Text size="sm" fw={500}>Variables:</Text>
              <Group gap="xs">
                {viewingTemplate.variables.map((variable, index) => (
                  <Badge key={index} variant="light" size="sm">
                    {variable}
                  </Badge>
                ))}
              </Group>
            </Group>
            
            <Group justify="flex-end" gap="sm">
              <Button variant="outline" leftSection={<IconDownload size={16} />}>
                Export
              </Button>
              <Button leftSection={<IconCopy size={16} />}>
                Use Template
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  )
}