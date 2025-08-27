import { Card, Text, Group, Badge } from '@mantine/core'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Jan 1', cpu: 45, memory: 52, network: 38 },
  { name: 'Jan 2', cpu: 42, memory: 51, network: 43 },
  { name: 'Jan 3', cpu: 47, memory: 48, network: 45 },
  { name: 'Jan 4', cpu: 58, memory: 61, network: 55 },
  { name: 'Jan 5', cpu: 55, memory: 58, network: 52 },
  { name: 'Jan 6', cpu: 67, memory: 65, network: 61 },
  { name: 'Jan 7', cpu: 62, memory: 63, network: 58 },
]

export function SystemChart() {
  return (
    <Card withBorder p="lg" radius="md">
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={600}>
          System Performance
        </Text>
        <Group gap="lg">
          <Group gap="xs">
            <div style={{ width: 12, height: 12, backgroundColor: '#228BE6', borderRadius: '50%' }} />
            <Text size="sm" c="dimmed">CPU Usage</Text>
          </Group>
          <Group gap="xs">
            <div style={{ width: 12, height: 12, backgroundColor: '#40C057', borderRadius: '50%' }} />
            <Text size="sm" c="dimmed">Memory Usage</Text>
          </Group>
          <Group gap="xs">
            <div style={{ width: 12, height: 12, backgroundColor: '#FA5252', borderRadius: '50%' }} />
            <Text size="sm" c="dimmed">Network Usage</Text>
          </Group>
        </Group>
      </Group>

      <div style={{ height: 300, width: '100%' }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#373A40" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C1C2C5', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C1C2C5', fontSize: 12 }}
            />
            <Line 
              type="monotone" 
              dataKey="cpu" 
              stroke="#228BE6" 
              strokeWidth={3}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="memory" 
              stroke="#40C057" 
              strokeWidth={3}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="network" 
              stroke="#FA5252" 
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}