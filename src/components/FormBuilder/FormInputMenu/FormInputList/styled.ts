import styled from '@emotion/styled';
import {
  List,
  ListItem as MuiListItem,
  ListItemText as MuiListItemText,
} from '@mui/material';

export const FormInputList = styled(List)`
  padding: 8px 10px;
`;

export const ListItem = styled(MuiListItem)`
  background-color: #e5f0f6;
  margin: 5px 0;
  cursor: pointer;
`;

export const ListItemText = styled(MuiListItemText)`
  user-select: none;
`;
