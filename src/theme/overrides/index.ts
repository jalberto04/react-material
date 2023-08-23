import { Theme } from '@mui/material';
import { merge } from 'lodash';

import Button from './Button';
import Card from './Card';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Divider from './Divider';
import FormHelperText from './FormHelperText';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import Link from './Link';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import OutlinedInput from './OutlinedInput';
import Tab from './Tab';
import TableCell from './TableCell';
import Tabs from './Tabs';
import Typography from './Typography';
import InputBase from './InputBase';
import Modal from './Modal';
import Skeleton from './Skeleton';

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Button(theme),
    Card(),
    CardContent(),
    Checkbox(),
    Divider(),
    FormHelperText(theme),
    IconButton(theme),
    InputBase(theme),
    InputLabel(),
    LinearProgress(),
    Link(theme),
    ListItemButton(),
    ListItemIcon(),
    Modal(),
    OutlinedInput(theme),
    Skeleton(),
    Tab(theme),
    TableCell(theme),
    Tabs(),
    Typography()
  );
}
