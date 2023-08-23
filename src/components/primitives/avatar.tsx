import { AvatarProps, Avatar as BaseAvatar } from '@mui/material';

export const Avatar = ({ username, ...props }: AvatarProps & { username?: string }) => {
  return (
    <BaseAvatar
      src={username ? `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=sad` : undefined}
      {...props}
    />
  );
};
