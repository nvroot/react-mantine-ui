import { Grid, Card, Text, Badge, Button, Group, Stack, Progress, Modal, TextInput, Textarea, Select, Switch } from '@mantine/core'
import { useState } from 'react'
import { IconSearch, IconBrain, IconFileText, IconSettings, IconPlus, IconPlayerPlay } from '@tabler/icons-react'

export function RAGCapabilities() {
  const [opened, setOpened] = useState(false)
  const [testOpened, setTestOpened] = useState(false)

  const ragSystems = [
    {
      id: 1,
      name: 'Vulnerability Knowledge RAG',
      description: 'Retrieval-augmented generation for vulnerability analysis and exploitation',
      vectorDb: 'Vulnerability Signatures',
      model: 'gpt-4-turbo',
      status: 'Active',
      accuracy: 94,
      responseTime: '1.2s',
      lastUsed: '5 minutes ago',
      queries: 2847,
      chunkSize: 512,
      overlap: 50
    },
    {
      id: 2,
      name: 'Exploit Development RAG',
      description: 'Context-aware exploit generation using historical attack patterns',
      vectorDb: 'Exploit Techniques',
      model: 'claude-3-sonnet',
      status: 'Active',
      accuracy: 87,
      responseTime: '2.1s',
      lastUsed: '2 minutes ago',
      queries: 1523,
      chunkSize: 1024,
      overlap: 100
    },
    {
      id: 3,
      name: 'Security Documentation RAG',
      description: 'Intelligent retrieval of security standards and best practices',
      vectorDb: 'Security Documentation',
      model: 'gemini-pro',
      status: 'Active',
      accuracy: 91,
      responseTime: '1.8s',
      lastUsed: '1 hour ago',
      queries: 456,
      chunkSize: 256,
      overlap: 25
    },
    {
      id: 4,
      name: 'Code Security RAG',
      description: 'Code vulnerability detection with contextual understanding',
      vectorDb: 'Code Vulnerability Patterns',
      model: 'gpt-4-turbo',
      status: 'Training',
      accuracy: 0,
      responseTime: 'N/A',
      lastUsed: 'Never',
      queries: 0,
      chunkSize: 768,
      overlap: 75
    }
  ]

  const availableModels = ['gpt-4-turbo', 'claude-3-sonnet', 'gemini-pro', 'llama2-70b']
  const availableVectorDbs = ['Vulnerability Signatures', 'Exploit Techniques', 'Security Documentation', 'Code Vulnerability Patterns']

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>RAG (Retrieval-Augmented Generation) Systems</Text>
        <Group>
          <Button variant="light" leftSection={<IconPlayerPlay size={16} />} onClick={() => setTestOpened(true)}>
            Test RAG
          </Button>
          <Button leftSection={<IconPlus size={16} />} onClick={() => setOpened(true)}>
            Create RAG System
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {ragSystems.map((rag) => (
          <Grid.Col key={rag.id} span={{ base: 12, lg: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconBrain size={20} />
                  <Text fw={500} size="sm">{rag.name}</Text>
                </Group>
                <Badge 
                  color={rag.status === 'Active' ? 'green' : rag.status === 'Training' ? 'blue' : 'gray'} 
                  size="sm"
                >
                  {rag.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {rag.description}
              </Text>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Vector DB</Text>
                  <Text size="sm" fw={500}>{rag.vectorDb}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">LLM Model</Text>
                  <Text size="sm">{rag.model}</Text>
                </Group>
                {rag.status === 'Active' && (
                  <>
                    <Group justify="space-between">
                      <Text size="sm" c="dimmed">Accuracy</Text>
                      <Text size="sm" fw={500}>{rag.accuracy}%</Text>
                    </Group>
                    <Progress value={rag.accuracy} size="sm" color={rag.accuracy > 90 ? 'green' : rag.accuracy > 80 ? 'yellow' : 'red'} />
                    <Group justify="space-between">
                      <Text size="sm" c="dimmed">Response Time</Text>
                      <Text size="sm">{rag.responseTime}</Text>
                    </Group>
                    <Group justify="space-between">
                      <Text size="sm" c="dimmed">Total Queries</Text>
                      <Text size="sm">{rag.queries.toLocaleString()}</Text>
                    </Group>
                  </>
                )}
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Chunk Size</Text>
                  <Text size="sm">{rag.chunkSize} tokens</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Overlap</Text>
                  <Text size="sm">{rag.overlap} tokens</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Used</Text>
                  <Text size="sm">{rag.lastUsed}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconSearch size={14} />}
                  disabled={rag.status !== 'Active'}
                >
                  Query
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconSettings size={14} />}
                >
                  Configure
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconFileText size={14} />}
                >
                  Logs
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Create RAG System Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create RAG System"
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="System Name"
            placeholder="Enter RAG system name"
          />
          <Textarea
            label="Description"
            placeholder="Describe the purpose and use case"
            minRows={3}
          />
          <Group grow>
            <Select
              label="Vector Database"
              placeholder="Select vector database"
              data={availableVectorDbs}
            />
            <Select
              label="LLM Model"
              placeholder="Select language model"
              data={availableModels}
            />
          </Group>
          <Group grow>
            <TextInput
              label="Chunk Size (tokens)"
              placeholder="512"
              type="number"
            />
            <TextInput
              label="Chunk Overlap (tokens)"
              placeholder="50"
              type="number"
            />
          </Group>
          <Group grow>
            <TextInput
              label="Top K Retrieval"
              placeholder="5"
              type="number"
            />
            <TextInput
              label="Similarity Threshold"
              placeholder="0.7"
              type="number"
              step="0.1"
            />
          </Group>
          <Switch
            label="Enable Context Reranking"
            description="Use a reranking model to improve retrieval quality"
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              Create System
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* Test RAG Modal */}
      <Modal
        opened={testOpened}
        onClose={() => setTestOpened(false)}
        title="Test RAG System"
        size="lg"
      >
        <Stack gap="md">
          <Select
            label="RAG System"
            placeholder="Select system to test"
            data={ragSystems.filter(r => r.status === 'Active').map(r => r.name)}
          />
          <Textarea
            label="Test Query"
            placeholder="Enter your test query here..."
            minRows={4}
          />
          <Switch
            label="Show Retrieved Context"
            description="Display the retrieved chunks along with the response"
            defaultChecked
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