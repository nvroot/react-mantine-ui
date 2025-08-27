import { Grid, Card, Text, Badge, Button, Group, Stack, Code, JsonInput, Modal, Select, TextInput } from '@mantine/core'
import { useState } from 'react'
import { IconPlug, IconSettings, IconPlayerPlay, IconTrash, IconEdit, IconPlus, IconRefresh } from '@tabler/icons-react'

export function MCPConnector() {
  const [opened, setOpened] = useState(false)
  const [editingConnection, setEditingConnection] = useState(null)

  const connections = [
    {
      id: 1,
      name: 'Vulnerability Scanner MCP',
      protocol: 'stdio',
      command: 'python',
      args: ['-m', 'vuln_scanner.mcp'],
      status: 'Connected',
      lastPing: '2 seconds ago',
      capabilities: ['scan', 'report', 'export'],
      version: '1.2.0'
    },
    {
      id: 2,
      name: 'Exploit Framework MCP',
      protocol: 'sse',
      endpoint: 'http://localhost:8080/sse',
      status: 'Connected',
      lastPing: '5 seconds ago',
      capabilities: ['exploit', 'payload', 'verify'],
      version: '2.1.3'
    },
    {
      id: 3,
      name: 'OSINT Collector MCP',
      protocol: 'websocket',
      endpoint: 'ws://localhost:9090/mcp',
      status: 'Disconnected',
      lastPing: '2 minutes ago',
      capabilities: ['gather', 'analyze', 'correlate'],
      version: '1.5.2'
    },
    {
      id: 4,
      name: 'Penetration Testing MCP',
      protocol: 'stdio',
      command: 'node',
      args: ['./pentest-mcp/index.js'],
      status: 'Connected',
      lastPing: '1 second ago',
      capabilities: ['scan', 'attack', 'report', 'cleanup'],
      version: '3.0.1'
    }
  ]

  const handleAddConnection = () => {
    setEditingConnection(null)
    setOpened(true)
  }

  const handleEditConnection = (connection) => {
    setEditingConnection(connection)
    setOpened(true)
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>MCP (Model Context Protocol) Connections</Text>
        <Group>
          <Button variant="light" leftSection={<IconRefresh size={16} />}>
            Refresh All
          </Button>
          <Button leftSection={<IconPlus size={16} />} onClick={handleAddConnection}>
            Add Connection
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {connections.map((connection) => (
          <Grid.Col key={connection.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconPlug size={20} />
                  <Text fw={500} size="sm">{connection.name}</Text>
                </Group>
                <Badge 
                  color={connection.status === 'Connected' ? 'green' : 'red'} 
                  size="sm"
                >
                  {connection.status}
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Protocol</Text>
                  <Code size="sm">{connection.protocol}</Code>
                </Group>
                
                {connection.command && (
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">Command</Text>
                    <Code size="sm">{connection.command}</Code>
                  </Group>
                )}
                
                {connection.endpoint && (
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">Endpoint</Text>
                    <Text size="xs" truncate style={{ maxWidth: '200px' }}>
                      {connection.endpoint}
                    </Text>
                  </Group>
                )}
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Version</Text>
                  <Text size="sm">{connection.version}</Text>
                </Group>
                
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Ping</Text>
                  <Text size="sm">{connection.lastPing}</Text>
                </Group>
                
                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Capabilities</Text>
                  <Group gap="xs">
                    {connection.capabilities.map((cap, index) => (
                      <Badge key={index} size="xs" variant="light">
                        {cap}
                      </Badge>
                    ))}
                  </Group>
                </Stack>

                {connection.args && (
                  <Stack gap={4}>
                    <Text size="sm" c="dimmed">Arguments</Text>
                    <Code block size="xs">
                      {JSON.stringify(connection.args, null, 2)}
                    </Code>
                  </Stack>
                )}
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconPlayerPlay size={14} />}
                  disabled={connection.status === 'Connected'}
                >
                  Connect
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditConnection(connection)}
                >
                  Edit
                </Button>
                <Button 
                  variant="subtle" 
                  color="red" 
                  size="xs" 
                  leftSection={<IconTrash size={14} />}
                >
                  Remove
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingConnection ? 'Edit MCP Connection' : 'Add MCP Connection'}
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Connection Name"
            placeholder="Enter connection name"
            defaultValue={editingConnection?.name || ''}
          />
          <Select
            label="Protocol"
            placeholder="Select protocol"
            data={['stdio', 'sse', 'websocket']}
            defaultValue={editingConnection?.protocol || 'stdio'}
          />
          <TextInput
            label="Command (for stdio)"
            placeholder="python, node, etc."
            defaultValue={editingConnection?.command || ''}
          />
          <TextInput
            label="Endpoint (for sse/websocket)"
            placeholder="http://localhost:8080/sse"
            defaultValue={editingConnection?.endpoint || ''}
          />
          <JsonInput
            label="Arguments (JSON array)"
            placeholder='["-m", "module.name"]'
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={3}
          />
          <TextInput
            label="Version"
            placeholder="1.0.0"
            defaultValue={editingConnection?.version || ''}
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              {editingConnection ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}