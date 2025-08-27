import { Grid, Card, Text, Badge, Button, Group, Stack, Modal, TextInput, Textarea, Select } from '@mantine/core'
import { useState } from 'react'
import { IconGitBranch, IconEdit, IconTrash, IconPlus, IconPlayerPlay, IconDownload, IconEye } from '@tabler/icons-react'

export function WorkflowDesigner() {
  const [opened, setOpened] = useState(false)
  const [viewOpened, setViewOpened] = useState(false)
  const [editingWorkflow, setEditingWorkflow] = useState(null)
  const [viewingWorkflow, setViewingWorkflow] = useState(null)

  const workflows = [
    {
      id: 1,
      name: 'Comprehensive Web Application Assessment',
      category: 'Web Security',
      steps: 6,
      estimated_time: '45-60 minutes',
      complexity: 'Medium',
      status: 'Active',
      usage: 34,
      success_rate: 89,
      description: 'Complete web application security assessment workflow',
      steps_detail: [
        'Initial Reconnaissance',
        'Technology Stack Detection',
        'Vulnerability Scanning',
        'Manual Testing',
        'Exploitation Attempts',
        'Report Generation'
      ]
    },
    {
      id: 2,
      name: 'Network Penetration Testing',
      category: 'Network Security',
      steps: 8,
      estimated_time: '2-3 hours',
      complexity: 'High',
      status: 'Active',
      usage: 23,
      success_rate: 76,
      description: 'Full network penetration testing methodology',
      steps_detail: [
        'Network Discovery',
        'Port Scanning',
        'Service Enumeration',
        'Vulnerability Assessment',
        'Exploitation',
        'Post-Exploitation',
        'Privilege Escalation',
        'Documentation'
      ]
    },
    {
      id: 3,
      name: 'API Security Testing',
      category: 'API Security',
      steps: 5,
      estimated_time: '30-45 minutes',
      complexity: 'Medium',
      status: 'Draft',
      usage: 0,
      success_rate: 0,
      description: 'Specialized API security assessment workflow',
      steps_detail: [
        'API Discovery',
        'Authentication Testing',
        'Authorization Bypass',
        'Input Validation',
        'Business Logic Testing'
      ]
    },
    {
      id: 4,
      name: 'Social Engineering Campaign',
      category: 'Social Engineering',
      steps: 7,
      estimated_time: '1-2 days',
      complexity: 'High',
      status: 'Active',
      usage: 12,
      success_rate: 67,
      description: 'Multi-phase social engineering attack simulation',
      steps_detail: [
        'Target Research',
        'Information Gathering',
        'Pretext Development',
        'Initial Contact',
        'Trust Building',
        'Exploitation',
        'Assessment Report'
      ]
    }
  ]

  const categories = ['Web Security', 'Network Security', 'API Security', 'Social Engineering', 'Mobile Security', 'Cloud Security']
  const complexityLevels = ['Low', 'Medium', 'High']

  const handleAddWorkflow = () => {
    setEditingWorkflow(null)
    setOpened(true)
  }

  const handleEditWorkflow = (workflow) => {
    setEditingWorkflow(workflow)
    setOpened(true)
  }

  const handleViewWorkflow = (workflow) => {
    setViewingWorkflow(workflow)
    setViewOpened(true)
  }

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Low': return 'green'
      case 'Medium': return 'yellow'
      case 'High': return 'red'
      default: return 'gray'
    }
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>Attack Workflow Designer</Text>
        <Button leftSection={<IconPlus size={16} />} onClick={handleAddWorkflow}>
          Create Workflow
        </Button>
      </Group>

      <Grid gutter="md">
        {workflows.map((workflow) => (
          <Grid.Col key={workflow.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconGitBranch size={20} />
                  <Text fw={500} size="sm">{workflow.name}</Text>
                </Group>
                <Badge 
                  color={workflow.status === 'Active' ? 'green' : 'gray'} 
                  size="sm"
                >
                  {workflow.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {workflow.description}
              </Text>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Category</Text>
                  <Badge size="sm" variant="light">{workflow.category}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Steps</Text>
                  <Text size="sm" fw={500}>{workflow.steps}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Estimated Time</Text>
                  <Text size="sm">{workflow.estimated_time}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Complexity</Text>
                  <Badge size="sm" color={getComplexityColor(workflow.complexity)}>
                    {workflow.complexity}
                  </Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Usage</Text>
                  <Text size="sm">{workflow.usage} executions</Text>
                </Group>
                {workflow.status === 'Active' && (
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">Success Rate</Text>
                    <Text size="sm" fw={500}>{workflow.success_rate}%</Text>
                  </Group>
                )}
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconPlayerPlay size={14} />}
                  disabled={workflow.status === 'Draft'}
                >
                  Execute
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEye size={14} />}
                  onClick={() => handleViewWorkflow(workflow)}
                >
                  View
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditWorkflow(workflow)}
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

      {/* Create/Edit Workflow Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingWorkflow ? 'Edit Workflow' : 'Create Workflow'}
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Workflow Name"
            placeholder="Enter workflow name"
            defaultValue={editingWorkflow?.name || ''}
          />
          
          <Group grow>
            <Select
              label="Category"
              placeholder="Select category"
              data={categories}
              defaultValue={editingWorkflow?.category || ''}
            />
            <Select
              label="Complexity"
              placeholder="Select complexity"
              data={complexityLevels}
              defaultValue={editingWorkflow?.complexity || ''}
            />
          </Group>
          
          <TextInput
            label="Estimated Time"
            placeholder="e.g., 30-45 minutes"
            defaultValue={editingWorkflow?.estimated_time || ''}
          />
          
          <Textarea
            label="Description"
            placeholder="Describe the workflow's purpose and methodology"
            minRows={3}
            defaultValue={editingWorkflow?.description || ''}
          />
          
          <Textarea
            label="Workflow Steps (one per line)"
            placeholder={`Step 1: Initial Reconnaissance\nStep 2: Vulnerability Scanning\nStep 3: Exploitation`}
            minRows={6}
            defaultValue={editingWorkflow?.steps_detail?.join('\n') || ''}
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              {editingWorkflow ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* View Workflow Modal */}
      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title={viewingWorkflow?.name}
        size="lg"
      >
        {viewingWorkflow && (
          <Stack gap="md">
            <Group>
              <Badge>{viewingWorkflow.category}</Badge>
              <Badge color={getComplexityColor(viewingWorkflow.complexity)}>
                {viewingWorkflow.complexity}
              </Badge>
              <Badge variant="outline">
                {viewingWorkflow.steps} steps
              </Badge>
            </Group>
            
            <Text size="sm">{viewingWorkflow.description}</Text>
            
            <Stack gap="xs">
              <Text size="sm" fw={500}>Workflow Steps:</Text>
              <Stack gap="xs">
                {viewingWorkflow.steps_detail.map((step, index) => (
                  <Group key={index} gap="sm">
                    <Badge variant="filled" size="sm" radius="xl">
                      {index + 1}
                    </Badge>
                    <Text size="sm">{step}</Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
            
            <Group>
              <Text size="sm" c="dimmed">Estimated Time: {viewingWorkflow.estimated_time}</Text>
              {viewingWorkflow.status === 'Active' && (
                <Text size="sm" c="dimmed">Success Rate: {viewingWorkflow.success_rate}%</Text>
              )}
            </Group>
            
            <Group justify="flex-end" gap="sm">
              <Button variant="outline" leftSection={<IconDownload size={16} />}>
                Export
              </Button>
              <Button 
                leftSection={<IconPlayerPlay size={16} />}
                disabled={viewingWorkflow.status === 'Draft'}
              >
                Execute Workflow
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  )
}