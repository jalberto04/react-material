import { useBoolean } from 'usehooks-ts';
import { Card, CardActions, CardContent, Divider, IconButton, Link, List, Stack } from '@mui/material';
import {
  Delete as DeleteIcon,
  Favorite as FavoriteIcon,
  Language as LanguageIcon,
  MailOutline as MailOutlineIcon,
  ModeEdit as ModeEditIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

import { User } from 'api/types';
import { Avatar, DescriptionItemText } from 'components/primitives';

type CardUserProfileProps = { user: User };

export const CardUserProfile = ({ user }: CardUserProfileProps) => {
  const isFavorite = useBoolean();
  const fullName = `${user.firstName} ${user.lastName}`;
  const websiteUrl = user.domain ?? '';

  return (
    <Card>
      <CardContent sx={{ py: 1.5 }}>
        <Stack direction="row" columnGap={2}>
          <Avatar
            alt={fullName}
            username={user.username}
            sx={{ mt: 0.5, bgcolor: 'grey.200', width: 110, height: 110 }}
          />

          <List
            sx={{
              '& .MuiListItem-root': { p: 0 },
              '& .MuiListItemIcon-root': { minWidth: 30 },
              '& .MuiListItemText-root': {
                display: 'flex',
                alignItems: 'center',
                m: 0,
                minHeight: 24
              }
            }}>
            <DescriptionItemText sx={{ pb: 0.5 }} variant="h5" primary={fullName} />
            <DescriptionItemText icon={<MailOutlineIcon fontSize="small" />} primary={user.email ?? ''} />
            <DescriptionItemText icon={<PhoneIcon fontSize="small" />} primary={user.phone ?? ''} />
            <DescriptionItemText
              icon={<LanguageIcon fontSize="small" />}
              primary={
                <Link href={websiteUrl} target="_blank">
                  {websiteUrl}
                </Link>
              }
            />
          </List>
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 0, bgcolor: 'background.50' }}>
        <Stack
          direction="row"
          sx={{
            width: '100%',
            borderTopStyle: 'solid',
            borderTopWidth: 1,
            borderTopColor: 'divider',
            '& .MuiButtonBase-root': { flex: 1, minHeight: 54 }
          }}>
          <IconButton onClick={isFavorite.toggle}>
            <FavoriteIcon color={isFavorite.value ? 'error' : 'secondary'} />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <ModeEditIcon color="secondary" />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};
