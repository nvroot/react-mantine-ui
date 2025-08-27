import { Container, Grid, Title, Space } from '@mantine/core'
import { MetricCard } from '../components/Dashboard/MetricCard'
import { SystemChart } from '../components/Dashboard/SystemChart'
import { ServiceStatus } from '../components/Dashboard/ServiceStatus'
import { 
  IconRobot, 
  IconAlertTriangle, 
  IconClock, 
  IconActivity 
} from '@tabler/icons-react'

export function Dashboard() {
  return (
    <Container size="xl" px={0}>
      <Title order={2} mb="lg">System Health</Title>
      
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Active Agents"
            value="24"
            change="+3"
            changeText="THIS WEEK"
            icon={<IconRobot size={24} />}
            color="blue"
            isPositive={true}
          />
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Critical Alerts"
            value="7"
            change="-2"
            changeText="THIS WEEK"
            icon={<IconAlertTriangle size={24} />}
            color="red"
            isPositive={true}
          />
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Avg Response Time"
            value="1.2s"
            change="-0.3s"
            changeText="THIS WEEK"
            icon={<IconClock size={24} />}
            color="green"
            isPositive={true}
          />
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="System Uptime"
            value="99.8%"
            change="+0.1%"
            changeText="THIS WEEK"
            icon={<IconActivity size={24} />}
            color="teal"
            isPositive={true}
          />
        </Grid.Col>
      </Grid>

      <Space h="xl" />

      <Grid gutter="md">
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <SystemChart />
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <ServiceStatus />
        </Grid.Col>
      </Grid>
    </Container>
  )
}