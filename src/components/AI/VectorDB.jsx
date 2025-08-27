import { Grid, Card, Text, Badge, Button, Group, Stack, Progress, Modal, TextInput, Textarea, Select } from '@mantine/core'
import { useState } from 'react'
import { IconDatabase, IconRefresh, IconUpload, IconDownload, IconSearch, IconPlus, IconTrash } from '@tabler/icons-react'

export function VectorDB() {
  const [opened, setOpened] = useState(false)
  const [searchOpened, setSearchOpened] = useState(false)

  const collections = [
    {
      id: 1,
      name: 'Vulnerability Signatures',
      description: 'Vector embeddings of known vulnerability patterns and signatures',
      documents: 45230,
      dimensions: 1536,
      size: '234 MB',
      lastUpdated: '2 hours ago',
      status: 'Active',
      model: 'text-embedding-ada-002'
    },
    {
      id: 2,
      name: 'Exploit Techniques',
      description: 'Embeddings of exploit methodologies and attack patterns',
      documents: 12840,
      dimensions: 1024,
      size: '89 MB',
      lastUpdated: '4 hours ago',
      status: 'Active',
      model: 'sentence-transformers/all-MiniLM-L6-v2'
    },
    {
      id: 3,
      name: 'Security Documentation',
      description: 'Vector representations of security standards and documentation',
      documents: 78901,
      dimensions: 768,
      size: '412 MB',
      lastUpdated: '1 day ago',
      status: 'Active',
      model: 'all-mpnet-base-v2'
    },
    {
      id: 4,
      name: 'Code Vulnerability Patterns',
      description: 'Embeddings of vulnerable code snippets and security patterns',
      documents: 23456,
      dimensions: 1536,
      size: '156 MB',
      lastUpdated: '6 hours ago',
      status: 'Indexing',
      model: 'text-embedding-ada-002'
    },
    {
      id: 5,
      name: 'Threat Intelligence',
      description: 'Vector database of threat indicators and intelligence reports',
      documents: 67432,
      dimensions: 1024,
      size: '298 MB',
      lastUpdated: '30 minutes ago',
      status: 'Active',
      model: 'e5-large-v2'
    }
  ]

  const embeddingModels = [
    'text-embedding-ada-002',
    'sentence-transformers/all-MiniLM-L6-v2',
    'all-mpnet-base-v2',
    'e5-large-v2',
    'text-embedding-3-small',
    'text-embedding-3-large'
  ]

  return (
    <>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>Vector Database Management</Text>
        <Group>
          <Button variant="light" leftSection={<IconSearch size={16} />} onClick={() => setSearchOpened(true)}>
            Search Vectors
          </Button>
          <Button leftSection={<IconPlus size={16} />} onClick={() => setOpened(true)}>
            Create Collection
          </Button>
        </Group>
      </Group>

      <Grid gutter="md">
        {collections.map((collection) => (
          <Grid.Col key={collection.id} span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Group>
                  <IconDatabase size={20} />
                  <Text fw={500} size="sm">{collection.name}</Text>
                </Group>
                <Badge 
                  color={collection.status === 'Active' ? 'green' : collection.status === 'Indexing' ? 'blue' : 'gray'} 
                  size="sm"
                >
                  {collection.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {collection.description}
              </Text>

              <Stack gap="xs" mb="md">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Documents</Text>
                  <Text size="sm" fw={500}>{collection.documents.toLocaleString()}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Dimensions</Text>
                  <Text size="sm">{collection.dimensions}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Size</Text>
                  <Text size="sm">{collection.size}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Model</Text>
                  <Text size="xs" truncate style={{ maxWidth: '140px' }}>
                    {collection.model}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">Last Updated</Text>
                  <Text size="sm">{collection.lastUpdated}</Text>
                </Group>
                
                {collection.status === 'Indexing' && (
                  <Progress value={75} size="sm" color="blue" />
                )}
              </Stack>

              <Group gap="xs">
                <Button 
                  variant="light" 
                  size="xs" 
                  leftSection={<IconSearch size={14} />}
                  disabled={collection.status === 'Indexing'}
                >
                  Query
                </Button>
                <Button 
                  variant="subtle" 
                  size="xs" 
                  leftSection={<IconRefresh size={14} />}
                >
                  Reindex
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

      {/* Create Collection Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Vector Collection"
        size="lg"
      >
        <Stack gap="md">
          <TextInput
            label="Collection Name"
            placeholder="Enter collection name"
          />
          <Textarea
            label="Description"
            placeholder="Describe the purpose and content of this collection"
            minRows={3}
          />
          <Select
            label="Embedding Model"
            placeholder="Select embedding model"
            data={embeddingModels}
          />
          <Group grow>
            <TextInput
              label="Dimensions"
              placeholder="1536"
              type="number"
            />
            <Select
              label="Distance Metric"
              placeholder="Select metric"
              data={['cosine', 'euclidean', 'dot_product']}
            />
          </Group>
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpened(false)}>
              Create Collection
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* Search Vectors Modal */}
      <Modal
        opened={searchOpened}
        onClose={() => setSearchOpened(false)}
        title="Search Vector Database"
        size="lg"
      >
        <Stack gap="md">
          <Select
            label="Collection"
            placeholder="Select collection to search"
            data={collections.filter(c => c.status === 'Active').map(c => c.name)}
          />
          <Textarea
            label="Query Text"
            placeholder="Enter your search query"
            minRows={4}
          />
          <Group grow>
            <TextInput
              label="Top K Results"
              placeholder="10"
              type="number"
              defaultValue="10"
            />
            <TextInput
              label="Similarity Threshold"
              placeholder="0.7"
              type="number"
              step="0.1"
              min="0"
              max="1"
            />
          </Group>
          
          <Group justify="flex-end" gap="sm">
            <Button variant="outline" onClick={() => setSearchOpened(false)}>
              Cancel
            </Button>
            <Button onClick={() => setSearchOpened(false)}>
              Search
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  )
}