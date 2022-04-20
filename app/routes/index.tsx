import { AppShell, Header, Card, Text, Title, Group, Button, Badge, Grid, Center } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks'

export default function Index() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s - 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <>
      <AppShell
        padding="md"

        header={
          <Header p="xs">
            <h1>TomatoTimer</h1>
          </Header>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Group position="center">
          <Button color="blue">
            Pomodoro
          </Button>
          <Button color="blue" onClick={() => console.log('Short Break')}>
            Short Break
          </Button>
          <Button color="blue" onClick={() => console.log('Long Break')}>
            Long Break
          </Button>
        </Group>
        <Group position="center">
          <Title order={1}>{seconds}</Title>
        </Group>
        <Group position="center">
          <Button color="green" onClick={interval.toggle} variant="light">
            Start
          </Button>
          <Button color="red">
            Stop
          </Button>
          <Button variant="outline" onClick={() => console.log('hello world')}>
            Reset
          </Button>
        </Group>
        <Grid>
          <Grid.Col span={4}>
            <Card>
              <Group position="apart" style={{ marginBottom: 5 }}>
                <Text weight={500}>Keyboard Shortcuts</Text>
              </Group>

              <Text size="sm" style={{ lineHeight: 1.5 }}>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>
              <Group position="apart" style={{ marginBottom: 5 }}>
                <Text weight={500}>Notifications</Text>
              </Group>

              <Text size="sm" style={{ lineHeight: 1.5 }}>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>
              <Group position="apart" style={{ marginBottom: 5 }}>
                <Text weight={500}>Settings</Text>
              </Group>

              <Text size="sm" style={{ lineHeight: 1.5 }}>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </AppShell>
    </>
  );
}
