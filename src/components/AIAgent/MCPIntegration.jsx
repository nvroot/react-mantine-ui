import { Grid, Card, Text, Badge, Button, Group, Stack, Modal, TextInput, Select, Code, Textarea } from '@mantine/core'
import { useState } from 'react'
import { IconPlugConnected, IconPlug, IconSettings, IconPlayerPlay, IconPlus, IconRefresh, IconTrash } from '@tabler/icons-react'

export function MCPIntegration() {
  const [opened, setOpened] = useState(false)
  const [configOpened, setConfigOpened] = useState(false)
  const [editingServer, setEditingServer] = useState(null)

  const mcpServers = [
    {
      id: 1,
      name: 'Vulnerability Scanner MCP',
      url: 'mcp://vuln-scanner:9001',
      status: 'Connected',
      version: '2.1.0',
      capabilities: [
        'vulnerability_scan',
        'port_scan',
        'service_detection',
        'exploit_suggestion'
      ],
      agents_connected: 3,
      last_heartbeat: '5 seconds ago',
      description: 'Advanced vulnerability scanning and detection MCP server',
      authentication: 'API Key',
      protocol: 'WebSocket'
    },
    {
      id: 2,
      name: 'Exploit Framework MCP',
      url: 'mcp://exploit-fw:9002',
      status: 'Connected',
      version: '1.8.5',
      capabilities: [
        'exploit_generation',
        'payload_crafting',
        'shellcode_generation',
        'post_exploitation'
      ],
      agents_connected: 2,
      last_heartbeat: '3 seconds ago',
      description: 'Comprehensive exploit development and execution framework',
      authentication: 'Certificate',
      protocol: 'gRPC'
    },
    {
      id: 3,
      name: 'OSINT Collector MCP',
      url: 'mcp://osint:9003',
      status: 'Disconnected',
      version: '3.2.1',
      capabilities: [
        'social_media_scan',
        'domain_intelligence',
        'email_harvesting',
        'threat_correlation'
      ],
      agents_connected: 0,
      last_heartbeat: '2 minutes ago',
      description: 'Open source intelligence gathering and analysis platform',
      authentication: 'OAuth2',
      protocol: 'REST'
    },
    {
      id: 4,
      name: 'Network Analysis MCP',
      url: 'mcp://netanalysis:9004',
      status: 'Connected',
      version: '2.0.3',
      capabilities: [
        'traffic_analysis',
        'protocol_inspection',
        'anomaly_detection',
        'network_mapping'
      ],
      agents_connected: 1,
      last_heartbeat: '1 second ago',
      description: 'Real-time network traffic analysis and monitoring',
      authentication: 'Token',
      protocol: 'WebSocket'
    }
  ]

  const protocolTypes = ['WebSocket', 'gRPC', 'REST', 'TCP', 'UDP']
  const authTypes = ['API Key', 'Certificate', 'OAuth2', 'Token', 'Basic Auth']

  const handleAddServer = () => {
    setEditingServer(null)
    setOpened(true)
  }

  const handleConfigServer = (server) => {
    setEditingServer(server)
    setConfigOpened(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Connected': return 'green'
      case 'Disconnected': return 'red'
      case 'Connecting': return 'yellow'
      default: return 'gray'
    }
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>MCP Server Integration</Text>
        <Group>
          <Button variant="light" leftSection={<IconRefresh size={16} />}>
            Refresh All
          </Button>
          <Button leftSection={<IconPlus size={16} />} onClick={handleAddServer}>
            Add MCP Server
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {mcpServers.map((server) => (
          <Grid.Col key={server.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconPlugConnected size={20} />
                  <Text fw={500} size="sm">{server.name}</Text>
                </Group>
                <Badge color={getStatusColor(server.status)} size="sm">
                  {server.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {server.description}
              </Text>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">URL</Text>
                  <Code size="xs">{server.url}</Code>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Version</Text>
                  <Text size="sm">{server.version}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Protocol</Text>
                  <Badge size="xs" variant="light">{server.protocol}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Authentication</Text>
                  <Text size="sm">{server.authentication}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Connected Agents</Text>
                  <Badge size="sm" color={server.agents_connected > 0 ? 'blue' : 'gray'}>
                    {server.agents_connected}
                  </Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Heartbeat</Text>
                  <Text size="sm">{server.last_heartbeat}</Text>
                </Group>
                
                <Stack gap={4}>
                  <Text size="sm" c="dimmed">Capabilities</Text>
                  <Group gap="xs">
                    {server.capabilities.slice(0, 3).map((capability, index) => (
                      <Badge key={index} size="xs" variant="outline">
                        {capability.replace('_', ' ')}
                      </Badge>
                    ))}
                    {server.capabilities.length > 3 && (
                      <Badge size="xs" variant="outline">
                        +{server.capabilities.length - 3}
                      </Badge>
                    )}
                  </Group>
                </Stack>
              </Stack>

              <Group gap="xs">
                {server.status === 'Disconnected' && (
                  <Button 
                    variant="light" 
                    size="xs" 
                    leftSection={<IconPlug size={14} />}
                  >
                    Connect
                  </Button>
                )}
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconPlayerPlay size={14} />}
                  disabled={server.status !== 'Connected'}
                >
                  Test
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconSettings size={14} />}
                  onClick={() => handleConfigServer(server)}
                >
                  Configure
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

      {/* Add MCP Server Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add MCP Server"
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Server Name"
            placeholder="Enter descriptive server name"
          />
          
          <TextInput
            label="MCP Server URL"
            placeholder="mcp://hostname:port"
          />
          
          <Textarea
            label="Description"
            placeholder="Describe the server's functionality"
            minRows={3}
          />
          
          <Group grow>
            <Select
              label="Protocol"
              placeholder="Select protocol"
              data={protocolTypes}
            />
            <Select
              label="Authentication"
              placeholder="Select auth method"
              data={authTypes}
            />
          </Group>
          
          <TextInput
            label="API Key / Token"
            placeholder="Enter authentication credentials"
            type="password"
          />
          
          <Textarea
            label="Capabilities (one per line)"
            placeholder={`vulnerability_scan\nport_scan\nservice_detection`}
            minRows={4}
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              Add Server
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* Configure Server Modal */}
      <Modal
        opened={configOpened}
        onClose={() => setConfigOpened(false)}
        title={`Configure ${editingServer?.name}`}
        size="lg"
      >
        {editingServer && (
          <Stack gap="md">
            <Group>
              <Badge color={getStatusColor(editingServer.status)}>
                {editingServer.status}
              </Badge>
              <Text size="sm" c="dimmed">Version {editingServer.version}</Text>
            </Group>
            
            <TextInput
              label="Server URL"
              defaultValue={editingServer.url}
            />
            
            <Group grow>
              <Select
                label="Protocol"
                data={protocolTypes}
                defaultValue={editingServer.protocol}
              />
              <Select
                label="Authentication"
                data={authTypes}
                defaultValue={editingServer.authentication}
              />
            </Group>
            
            <TextInput
              label="Authentication Credentials"
              placeholder="Update credentials if needed"
              type="password"
            />
            
            <Stack gap="xs">
              <Text size="sm" fw={500}>Server Capabilities:</Text>
              <Group gap="xs">
                {editingServer.capabilities.map((capability, index) => (
                  <Badge key={index} size="sm" variant="light">
                    {capability.replace('_', ' ')}
                  </Badge>
                ))}
              </Group>
            </Stack>
            
            <Stack gap="xs">
              <Text size="sm" fw={500}>Connection Status:</Text>
              <Group gap="sm">
                <Text size="sm" c="dimmed">Last Heartbeat: {editingServer.last_heartbeat}</Text>
                <Text size="sm" c="dimmed">Connected Agents: {editingServer.agents_connected}</Text>
              </Group>
            </Stack>
            
            <Group justify="flex-end" gap="sm">
              <Button variant="outline" color="red">
                Disconnect
              </Button>
              <Button variant="outline">
                Test Connection
              </Button>
              <Button onClick={() => setConfigOpened(false)}>
                Save Changes
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  )
}