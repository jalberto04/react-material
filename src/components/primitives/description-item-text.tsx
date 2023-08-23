import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemTextProps,
  Tooltip,
  TypographyVariant
} from '@mui/material';
import { InfoCircleIcon } from 'components/icons';

type DescriptionItemTextProps = ListItemTextProps & {
  icon?: React.ReactNode;
  tooltip?: string;
  variant?: TypographyVariant;
};

export const DescriptionItemText = ({
  children,
  icon,
  primary,
  tooltip,
  variant = 'body1',
  ...props
}: DescriptionItemTextProps) => {
  return (
    <ListItem sx={{ p: 0 }}>
      {!!icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText
        {...props}
        primaryTypographyProps={{ variant: variant, ...props.primaryTypographyProps }}
        secondaryTypographyProps={{ variant: variant, ...props.secondaryTypographyProps }}
        primary={
          tooltip ? (
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {primary}
              <Tooltip title={tooltip} arrow>
                <IconButton
                  disableFocusRipple
                  disableTouchRipple
                  size="small"
                  sx={{ m: 0, p: 0, width: 18, height: 16, borderRadius: '50%' }}>
                  <InfoCircleIcon sx={{ fontSize: 12 }} color="primary" />
                </IconButton>
              </Tooltip>
            </span>
          ) : (
            primary
          )
        }
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ...props.sx }}
      />
      {children}
    </ListItem>
  );
};
