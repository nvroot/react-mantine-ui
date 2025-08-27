import { Card, Group, Text, ThemeIcon, Stack } from '@mantine/core'
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-react'

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeText, 
  icon, 
  color = 'blue',
  isPositive = true 
}) {
  const TrendIcon = isPositive ? IconTrendingUp : IconTrendingDown
  const trendColor = isPositive ? 'green' : 'red'

  return (
    <Card withBorder p="lg" radius="md">
      <Group justify="space-between">
        <Stack gap="xs">
          <Text size="sm" c="dimmed" fw={500}>
            {title}
          </Text>
          <Text size="xl" fw={700}>
            {value}
          </Text>
          {change && (
            <Group gap="xs">
              <TrendIcon size={16} color={trendColor} />
              <Text size="sm" c={trendColor}>
                {change} {changeText}
              </Text>
            </Group>
          )}
        </Stack>
        
        <ThemeIcon
          color={color}
          variant="light"
          size={60}
          radius="md"
        >
          {icon}
        </ThemeIcon>
      </Group>
    </Card>
  )
}