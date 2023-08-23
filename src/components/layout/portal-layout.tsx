import { useNavigate } from 'react-router-dom';
import { useBoolean } from 'usehooks-ts';
import { Box, Container, Drawer, Stack, StackProps } from '@mui/material';
import { Authorization } from 'api/types';
import { AppBarMenu } from 'components/core';

type PortalLayoutProps = StackProps & {
  auth?: Authorization;
};

export const PortalLayout = ({ auth, children, ...props }: PortalLayoutProps) => {
  const navigate = useNavigate();
  const openDrawer = useBoolean();

  const handleMenuClick = () => {
    localStorage.removeItem('authorization');
    navigate('/login', { replace: true });
  };

  return (
    <Stack data-testid="page[portal]" sx={{ width: '100%', height: '100vh', overflowX: 'hidden' }} {...props}>
      {/* App Header */}
      <AppBarMenu
        auth={auth}
        title={process.env.REACT_APP_TITLE}
        onMenuItemClick={handleMenuClick}
        onOpenDrawer={openDrawer.setTrue}
      />

      {/* Side Menu Bar */}
      <Drawer
        open={openDrawer.value}
        onClose={openDrawer.toggle}
        PaperProps={{
          sx: {
            position: 'relative',
            width: 280,
            bgcolor: 'background.100'
          }
        }}>
        <Box role="presentation" pt={3} width="100%">
          {/* Do nothing */}
        </Box>
      </Drawer>

      {/* Page Content */}
      <Stack flex={1} position="relative" direction="row">
        <Box width="100%" height="100%">
          <Container component="main" maxWidth={false} disableGutters>
            {children}
          </Container>
        </Box>
      </Stack>
    </Stack>
  );
};
