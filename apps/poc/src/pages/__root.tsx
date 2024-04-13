import { AppShell, Button, Flex, Group } from '@mantine/core';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout />
      <TanStackRouterDevtools />
    </>
  ),
});

export const Layout = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="xl" justify="space-between">
          <Flex>
            <Button component={Link} to="/" variant="subtle">
              Hub
            </Button>
            <Button
              component={Link}
              to="/workspaces/$workspaceId"
              params={{ workspaceId: 'random' }}
              variant="subtle"
            >
              Workspace
            </Button>
            <Button component={Link} to="/digital" variant="subtle">
              Digital
            </Button>
          </Flex>
          <Flex>
            <Button component={Link} to="/profiles" variant="subtle">
              Profiles
            </Button>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
