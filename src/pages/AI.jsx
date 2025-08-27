import { Container, Title, Tabs, Group, Button } from '@mantine/core'
import { IconRobot, IconSettings, IconDatabase, IconBrain, IconTemplate, IconMessage } from '@tabler/icons-react'
import { AIProviders } from '../components/AI/AIProviders'
import { MCPConnector } from '../components/AI/MCPConnector'
import { PromptTemplates } from '../components/AI/PromptTemplates'
import { MemoryManagement } from '../components/AI/MemoryManagement'
import { VectorDB } from '../components/AI/VectorDB'
import { RAGCapabilities } from '../components/AI/RAGCapabilities'

export function AIPage() {
  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>AI Engine</Title>
        <Button leftSection={<IconRobot size={16} />}>
          Create AI Provider
        </Button>
      </Group>

      <Tabs defaultValue="providers" keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab value="providers" leftSection={<IconSettings size={16} />}>
            AI Providers
          </Tabs.Tab>
          <Tabs.Tab value="mcp" leftSection={<IconDatabase size={16} />}>
            MCP Connector
          </Tabs.Tab>
          <Tabs.Tab value="templates" leftSection={<IconTemplate size={16} />}>
            Prompt Templates
          </Tabs.Tab>
          <Tabs.Tab value="memory" leftSection={<IconBrain size={16} />}>
            Memory Management
          </Tabs.Tab>
          <Tabs.Tab value="vectordb" leftSection={<IconDatabase size={16} />}>
            Vector Database
          </Tabs.Tab>
          <Tabs.Tab value="rag" leftSection={<IconMessage size={16} />}>
            RAG Capabilities
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="providers" pt="md">
          <AIProviders />
        </Tabs.Panel>

        <Tabs.Panel value="mcp" pt="md">
          <MCPConnector />
        </Tabs.Panel>

        <Tabs.Panel value="templates" pt="md">
          <PromptTemplates />
        </Tabs.Panel>

        <Tabs.Panel value="memory" pt="md">
          <MemoryManagement />
        </Tabs.Panel>

        <Tabs.Panel value="vectordb" pt="md">
          <VectorDB />
        </Tabs.Panel>

        <Tabs.Panel value="rag" pt="md">
          <RAGCapabilities />
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}