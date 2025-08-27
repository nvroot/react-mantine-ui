import { Grid, Card, Text, Badge, Button, Group, Stack, Progress, Modal, Textarea, Select } from '@mantine/core'
import { useState } from 'react'
import { IconBrain, IconTrash, IconEdit, IconPlus, IconRefresh, IconEye } from '@tabler/icons-react'

export function MemoryManagement() {
  const [opened, setOpened] = useState(false)
  const [viewOpened, setViewOpened] = useState(false)
  const [viewingMemory, setViewingMemory] = useState(null)

  const memoryStores = [
    {
      id: 1,
      name: 'Short-term Session Memory',
      type: 'Short-term',
      size: '2.4 MB',
      entries: 1247,
      retention: '1 hour',
      usage: 78,
      lastAccess: '2 minutes ago',
      status: 'Active',
      description: 'Stores conversation context and recent interactions for active AI agents'
    },
    {
      id: 2,
      name: 'Long-term Knowledge Base',
      type: 'Long-term',
      size: '156 MB',
      entries: 45230,
      retention: 'Permanent',
      usage: 45,
      lastAccess: '5 minutes ago',
      status: 'Active',
      description: 'Persistent storage for learned patterns, successful attack vectors, and domain knowledge'
    },
    {
      id: 3,
      name: 'Vulnerability Context Memory',
      type: 'Specialized',
      size: '12.8 MB',
      entries: 5672,
      retention: '30 days',
      usage: 62,
      lastAccess: '1 minute ago',
      status: 'Active',
      description: 'Context-aware memory for vulnerability analysis and exploit development'
    },
    {
      id: 4,
      name: 'Agent Interaction History',
      type: 'Historical',
      size: '89.2 MB',
      entries: 23456,
      retention: '90 days',
      usage: 33,
      lastAccess: '10 minutes ago',
      status: 'Active',
      description: 'Historical record of all agent interactions and decision patterns'
    },
    {
      id: 5,
      name: 'Episodic Memory Store',
      type: 'Episodic',
      size: '67.5 MB',
      entries: 8943,
      retention: '7 days',
      usage: 89,
      lastAccess: '30 seconds ago',
      status: 'Active',
      description: 'Stores specific episodes and scenarios for experience-based learning'
    },
    {
      id: 6,
      name: 'Archived Session Data',
      type: 'Archive',
      size: '234 MB',
      entries: 67890,
      retention: '1 year',
      usage: 12,
      lastAccess: '2 hours ago',
      status: 'Idle',
      description: 'Archived data from completed sessions and historical attack campaigns'
    }
  ]

  const memoryTypes = ['Short-term', 'Long-term', 'Specialized', 'Historical', 'Episodic', 'Archive']

  const handleViewMemory = (memory) => {
    setViewingMemory(memory)
    setViewOpened(true)
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'Short-term': return 'blue'
      case 'Long-term': return 'green'
      case 'Specialized': return 'purple'
      case 'Historical': return 'orange'
      case 'Episodic': return 'red'
      case 'Archive': return 'gray'
      default: return 'blue'
    }
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>Memory Management System</Text>
        <Group>
          <Button variant="light" leftSection={<IconRefresh size={16} />}>
            Refresh Stats
          </Button>
          <Button leftSection={<IconPlus size={16} />} onClick={() => setOpened(true)}>
            Create Memory Store
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {memoryStores.map((memory) => (
          <Grid.Col key={memory.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconBrain size={20} />
                  <Text fw={500} size="sm">{memory.name}</Text>
                </Group>
                <Badge 
                  color={memory.status === 'Active' ? 'green' : 'gray'} 
                  size="sm"
                >
                  {memory.status}
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Badge color={getTypeColor(memory.type)} size="sm">
                    {memory.type}
                  </Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Size</Text>
                  <Text size="sm" fw={500}>{memory.size}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Entries</Text>
                  <Text size="sm">{memory.entries.toLocaleString()}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Retention</Text>
                  <Text size="sm">{memory.retention}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Usage</Text>
                  <Text size="sm">{memory.usage}%</Text>
                </Group>
                <Progress 
                  value={memory.usage} 
                  size="sm" 
                  color={memory.usage > 80 ? 'red' : memory.usage > 60 ? 'orange' : 'blue'}
                />
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Access</Text>
                  <Text size="sm">{memory.lastAccess}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconEye size={14} />}
                  onClick={() => handleViewMemory(memory)}
                >
                  View
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                >
                  Configure
                </Button>
                <Button 
                  variant="subtle" 
                  color="red" 
                  size="xs" 
                  leftSection={<IconTrash size={14} />}
                >
                  Clear
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Create Memory Store Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Memory Store"
        size="lg"
      >
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            Configure a new memory store for AI agents. Different types serve different purposes in the AI workflow.
          </Text>
          
          <Select
            label="Memory Type"
            placeholder="Select memory type"
            data={memoryTypes}
          />
          
          <Textarea
            label="Description"
            placeholder="Describe the purpose and use case for this memory store"
            minRows={3}
          />
          
          <Group grow>
            <Select
              label="Retention Period"
              placeholder="Select retention"
              data={['1 hour', '24 hours', '7 days', '30 days', '90 days', '1 year', 'Permanent']}
            />
            <Select
              label="Max Size"
              placeholder="Select max size"
              data={['10 MB', '50 MB', '100 MB', '500 MB', '1 GB', '5 GB', 'Unlimited']}
            />
          </Group>
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              Create Store
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* View Memory Details Modal */}
      <Modal
        opened={viewOpened}
        onClose={() => setViewOpened(false)}
        title={viewingMemory?.name}
        size="lg"
      >
        {viewingMemory && (
          <Stack gap="md">
            <Group>
              <Badge color={getTypeColor(viewingMemory.type)}>
                {viewingMemory.type}
              </Badge>
              <Badge color={viewingMemory.status === 'Active' ? 'green' : 'gray'}>
                {viewingMemory.status}
              </Badge>
            </Group>
            
            <Text size="sm">{viewingMemory.description}</Text>
            
            <Grid>
              <Grid.Col span={6}>
                <Stack gap="xs">
                  <Text size="sm" fw={500}>Storage Statistics</Text>
                  <Text size="xs" c="dimmed">Size: {viewingMemory.size}</Text>
                  <Text size="xs" c="dimmed">Entries: {viewingMemory.entries.toLocaleString()}</Text>
                  <Text size="xs" c="dimmed">Usage: {viewingMemory.usage}%</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap="xs">
                  <Text size="sm" fw={500}>Access Information</Text>
                  <Text size="xs" c="dimmed">Retention: {viewingMemory.retention}</Text>
                  <Text size="xs" c="dimmed">Last Access: {viewingMemory.lastAccess}</Text>
                </Stack>
              </Grid.Col>
            </Grid>
            
            <Progress 
              value={viewingMemory.usage} 
              size="lg" 
              color={viewingMemory.usage > 80 ? 'red' : viewingMemory.usage > 60 ? 'orange' : 'blue'}
              label={`${viewingMemory.usage}%`}
            />
            
            <Group justify="flex-end" gap="sm">
              <Button variant="outline" color="red">
                Clear Memory
              </Button>
              <Button variant="outline">
                Export Data
              </Button>
              <Button>
                Optimize
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  )
}