import { Container, Title, Tabs, Group, Button } from '@mantine/core'
import { IconRobot, IconTemplate, IconGitBranch, IconCode, IconTerminal, IconPlugConnected } from '@tabler/icons-react'
import { AgentBuilder } from '../components/AIAgent/AgentBuilder'
import { AgentTemplates } from '../components/AIAgent/AgentTemplates'
import { WorkflowDesigner } from '../components/AIAgent/WorkflowDesigner'
import { PromptEngineering } from '../components/AIAgent/PromptEngineering'
import { AgentExecution } from '../components/AIAgent/AgentExecution'
import { MCPIntegration } from '../components/AIAgent/MCPIntegration'

export function AIAgentPage() {
  return (
    <Container size="xl" px={0}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>AI Agent Builder</Title>
        <Button leftSection={<IconRobot size={16} />}>
          Create Agent
        </Button>
      </Group>

      <Tabs defaultValue="agents" keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab value="agents" leftSection={<IconRobot size={16} />}>
            Agent Management
          </Tabs.Tab>
          <Tabs.Tab value="templates" leftSection={<IconTemplate size={16} />}>
            Agent Templates
          </Tabs.Tab>
          <Tabs.Tab value="workflows" leftSection={<IconGitBranch size={16} />}>
            Workflow Designer
          </Tabs.Tab>
          <Tabs.Tab value="prompts" leftSection={<IconCode size={16} />}>
            Prompt Engineering
          </Tabs.Tab>
          <Tabs.Tab value="execution" leftSection={<IconTerminal size={16} />}>
            Agent Execution
          </Tabs.Tab>
          <Tabs.Tab value="mcp" leftSection={<IconPlugConnected size={16} />}>
            MCP Integration
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="agents" pt="md">
          <AgentBuilder />
        </Tabs.Panel>

        <Tabs.Panel value="templates" pt="md">
          <AgentTemplates />
        </Tabs.Panel>

        <Tabs.Panel value="workflows" pt="md">
          <WorkflowDesigner />
        </Tabs.Panel>

        <Tabs.Panel value="prompts" pt="md">
          <PromptEngineering />
        </Tabs.Panel>

        <Tabs.Panel value="execution" pt="md">
          <AgentExecution />
        </Tabs.Panel>

        <Tabs.Panel value="mcp" pt="md">
          <MCPIntegration />
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}