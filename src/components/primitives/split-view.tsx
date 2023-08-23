import React from 'react';
import { Stack, StackProps } from '@mui/material';

const Item = ({ children, ...props }: StackProps) => {
  return (
    <Stack flex={1} {...props}>
      {children}
    </Stack>
  );
};

interface SplitViewComponent {
  Item: typeof Item;
}

const SplitView: React.FC<StackProps> & SplitViewComponent = ({ children, ...props }: StackProps) => {
  return (
    <Stack direction="row" {...props}>
      {children}
    </Stack>
  );
};

SplitView.Item = Item;

export { SplitView as SplitView };
