import { Group, Burger, TextInput, ActionIcon, Menu, Avatar, Text } from '@mantine/core'
import { IconSearch, IconSettings, IconLogout, IconUser } from '@tabler/icons-react'

export function Header({ mobileOpened, desktopOpened, setMobileOpened, setDesktopOpened }) {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger
          opened={mobileOpened}
          onClick={() => setMobileOpened(!mobileOpened)}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={() => setDesktopOpened(!desktopOpened)}
          visibleFrom="sm"
          size="sm"
        />
        <Group gap="xs">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#228BE6">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <Text size="lg" fw={600} c="blue">NvRoot</Text>
        </Group>
      </Group>

      <Group>
        <TextInput
          placeholder="Search..."
          leftSection={<IconSearch size={16} />}
          visibleFrom="sm"
          w={300}
        />
        
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <ActionIcon variant="subtle" size="lg">
              <Avatar size="sm" />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item leftSection={<IconUser size={14} />}>
              Admin Profile
            </Menu.Item>
            <Menu.Item leftSection={<IconSettings size={14} />}>
              Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item leftSection={<IconLogout size={14} />} color="red">
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  )
}