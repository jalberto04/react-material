import { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import { AccountCircle as AccountCircleIcon, Logout as LogoutIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Authorization } from 'api/types';
import { Avatar } from 'components/primitives';

type AppNavigationProps = {
  auth?: Authorization;
  title?: string;
  onMenuItemClick?: () => void;
  onOpenDrawer: () => void;
};

export const AppBarMenu = ({ auth, title, onMenuItemClick, onOpenDrawer }: AppNavigationProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMenuDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" columnGap={1}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={onOpenDrawer}>
            <MenuIcon />
          </IconButton>
          {!!title && <Typography variant="h4">{title}</Typography>}
        </Stack>

        {auth && (
          <Box>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="menu"
              onClick={handleMenuDown}
              color="inherit">
              <Avatar username={auth.username} sx={{ bgcolor: 'white', width: 40, height: 40 }} />
            </IconButton>
            <Popover
              id="app-header-popover"
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}>
              <MenuList sx={{ minWidth: 200 }}>
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText>My Account</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={onMenuItemClick}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Popover>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
