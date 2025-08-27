import { Container, Title, Card, Stack, Group, Text, Switch, Button, TextInput, Select } from '@mantine/core'
import { IconSettings, IconBell, IconShield, IconDatabase } from '@tabler/icons-react'

export function SettingsPage() {
  return (
    <Container size="md" px={0}>
      <Title order={2} mb="lg">Settings</Title>
      
      <Stack gap="lg">
        <Card withBorder p="lg">
          <Group mb="md">
            <IconBell size={20} />
            <Text fw={500}>Notifications</Text>
          </Group>
          
          <Stack gap="sm">
            <Group justify="space-between">
              <Text size="sm">Email Notifications</Text>
              <Switch defaultChecked />
            </Group>
            <Group justify="space-between">
              <Text size="sm">Security Alerts</Text>
              <Switch defaultChecked />
            </Group>
            <Group justify="space-between">
              <Text size="sm">System Updates</Text>
              <Switch />
            </Group>
          </Stack>
        </Card>

        <Card withBorder p="lg">
          <Group mb="md">
            <IconShield size={20} />
            <Text fw={500}>Security</Text>
          </Group>
          
          <Stack gap="sm">
            <TextInput
              label="API Key"
              placeholder="Enter your API key"
              type="password"
            />
            <Select
              label="Session Timeout"
              placeholder="Select timeout"
              data={['15 minutes', '30 minutes', '1 hour', '4 hours']}
              defaultValue="30 minutes"
            />
            <Group justify="space-between">
              <Text size="sm">Two-Factor Authentication</Text>
              <Switch />
            </Group>
          </Stack>
        </Card>

        <Card withBorder p="lg">
          <Group mb="md">
            <IconDatabase size={20} />
            <Text fw={500}>Data Management</Text>
          </Group>
          
          <Stack gap="sm">
            <Group justify="space-between">
              <Text size="sm">Auto Backup</Text>
              <Switch defaultChecked />
            </Group>
            <Select
              label="Backup Frequency"
              placeholder="Select frequency"
              data={['Daily', 'Weekly', 'Monthly']}
              defaultValue="Daily"
            />
            <Button variant="light" color="red">
              Clear All Data
            </Button>
          </Stack>
        </Card>

        <Group justify="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </Group>
      </Stack>
    </Container>
  )
}