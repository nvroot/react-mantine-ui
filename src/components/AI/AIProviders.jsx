import { Grid, Card, Text, Badge, Button, Group, Stack, Progress, Select, TextInput, Modal, Textarea } from '@mantine/core'
import { useState } from 'react'
import { IconBrain, IconSettings, IconPlayerPlay, IconTrash, IconEdit, IconPlus } from '@tabler/icons-react'

export function AIProviders() {
  const [opened, setOpened] = useState(false)
  const [editingProvider, setEditingProvider] = useState(null)

  const providers = [
    { 
      id: 1,
      name: 'OpenAI GPT-4',
      type: 'OpenAI',
      model: 'gpt-4-turbo',
      status: 'Active',
      usage: 85,
      apiKey: '****-****-****-1234',
      endpoint: 'https://api.openai.com/v1',
      maxTokens: 4000,
      temperature: 0.7
    },
    { 
      id: 2,
      name: 'Claude 3 Sonnet',
      type: 'Anthropic',
      model: 'claude-3-sonnet-20240229',
      status: 'Active',
      usage: 65,
      apiKey: '****-****-****-5678',
      endpoint: 'https://api.anthropic.com/v1',
      maxTokens: 4000,
      temperature: 0.5
    },
    { 
      id: 3,
      name: 'Gemini Pro',
      type: 'Google',
      model: 'gemini-pro',
      status: 'Inactive',
      usage: 0,
      apiKey: '****-****-****-9012',
      endpoint: 'https://generativelanguage.googleapis.com/v1',
      maxTokens: 2048,
      temperature: 0.8
    },
    { 
      id: 4,
      name: 'Llama 2 70B',
      type: 'HuggingFace',
      model: 'meta-llama/Llama-2-70b-chat-hf',
      status: 'Active',
      usage: 45,
      apiKey: '****-****-****-3456',
      endpoint: 'https://api-inference.huggingface.co',
      maxTokens: 2000,
      temperature: 0.6
    },
    { 
      id: 5,
      name: 'Mistral Large',
      type: 'OpenRouter',
      model: 'mistralai/mistral-large',
      status: 'Active',
      usage: 30,
      apiKey: '****-****-****-7890',
      endpoint: 'https://openrouter.ai/api/v1',
      maxTokens: 3000,
      temperature: 0.4
    },
    { 
      id: 6,
      name: 'Local Ollama',
      type: 'Ollama',
      model: 'llama2:7b',
      status: 'Active',
      usage: 20,
      apiKey: 'Not Required',
      endpoint: 'http://localhost:11434/v1',
      maxTokens: 2048,
      temperature: 0.7
    }
  ]

  const providerTypes = [
    'OpenAI', 'Anthropic', 'Google', 'OpenRouter', 'HuggingFace', 
    'Novita', 'Chutes', 'OpenAI Compatible', 'LiteLLM', 'Ollama'
  ]

  const handleAddProvider = () => {
    setEditingProvider(null)
    setOpened(true)
  }

  const handleEditProvider = (provider) => {
    setEditingProvider(provider)
    setOpened(true)
  }

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>AI Provider Configuration</Text>
        <Button leftSection={<IconPlus size={16} />} onClick={handleAddProvider}>
          Add Provider
        </Button>
      </Group>

      <Grid gutter="md">
        {providers.map((provider) => (
          <Grid.Col key={provider.id} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconBrain size={20} />
                  <Text fw={500} size="sm">{provider.name}</Text>
                </Group>
                <Badge 
                  color={provider.status === 'Active' ? 'green' : 'gray'} 
                  size="sm"
                >
                  {provider.status}
                </Badge>
              </Group>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Type</Text>
                  <Text size="sm">{provider.type}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Model</Text>
                  <Text size="sm" truncate style={{ maxWidth: '120px' }}>
                    {provider.model}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">API Key</Text>
                  <Text size="sm" ff="monospace">{provider.apiKey}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Usage</Text>
                  <Text size="sm">{provider.usage}%</Text>
                </Group>
                <Progress value={provider.usage} size="sm" />
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Max Tokens</Text>
                  <Text size="sm">{provider.maxTokens}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Temperature</Text>
                  <Text size="sm">{provider.temperature}</Text>
                </Group>
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconPlayerPlay size={14} />}
                  disabled={provider.status === 'Inactive'}
                >
                  Test
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconEdit size={14} />}
                  onClick={() => handleEditProvider(provider)}
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

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingProvider ? 'Edit AI Provider' : 'Add AI Provider'}
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Provider Name"
            placeholder="Enter provider name"
            defaultValue={editingProvider?.name || ''}
          />
          <Select
            label="Provider Type"
            placeholder="Select provider type"
            data={providerTypes}
            defaultValue={editingProvider?.type || ''}
          />
          <TextInput
            label="Model"
            placeholder="Enter model name"
            defaultValue={editingProvider?.model || ''}
          />
          <TextInput
            label="API Key"
            placeholder="Enter API key"
            type="password"
            defaultValue={editingProvider?.apiKey || ''}
          />
          <TextInput
            label="Endpoint URL"
            placeholder="Enter endpoint URL"
            defaultValue={editingProvider?.endpoint || ''}
          />
          <Group grow>
            <TextInput
              label="Max Tokens"
              placeholder="4000"
              type="number"
              defaultValue={editingProvider?.maxTokens || ''}
            />
            <TextInput
              label="Temperature"
              placeholder="0.7"
              type="number"
              step="0.1"
              min="0"
              max="2"
              defaultValue={editingProvider?.temperature || ''}
            />
          </Group>
          <Textarea
            label="Description"
            placeholder="Optional description"
            minRows={3}
          />
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              {editingProvider ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}