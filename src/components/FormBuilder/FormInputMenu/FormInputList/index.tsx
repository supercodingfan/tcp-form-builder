import { FC } from 'react';
import { ListItemText, ListItemIcon } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

import * as S from './styled';

const FormInputList: FC = () => {
  return (
    <S.FormInputList>
      <S.ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Single-line item" />
      </S.ListItem>
      ,
    </S.FormInputList>
  );
};

export default FormInputList;
