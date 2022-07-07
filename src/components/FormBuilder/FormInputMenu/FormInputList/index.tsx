import { FC } from 'react';
import { ListItemText, ListItemIcon } from '@mui/material';
import {
  TextFormatOutlined,
  PhoneOutlined,
  EmailOutlined,
  HomeOutlined,
  KeyboardArrowDownOutlined,
  Grid3x3Outlined,
  PasswordOutlined,
  AttachFileOutlined,
} from '@mui/icons-material';

import { FormInputItem } from 'types';
import { FormInputIcons } from 'types/constants';

import * as S from './styled';

interface Props {
  menu: FormInputItem[];
}

const getIcon = (type: string) => {
  switch (type) {
    case FormInputIcons.Text:
      return <TextFormatOutlined />;
    case FormInputIcons.Phone:
      return <PhoneOutlined />;
    case FormInputIcons.Email:
      return <EmailOutlined />;
    case FormInputIcons.Address:
      return <HomeOutlined />;
    case FormInputIcons.Select:
      return <KeyboardArrowDownOutlined />;
    case FormInputIcons.PersonId:
      return <Grid3x3Outlined />;
    case FormInputIcons.Password:
      return <PasswordOutlined />;
    case FormInputIcons.File:
      return <AttachFileOutlined />;
    default:
      return <TextFormatOutlined />;
  }
};

const FormInputList: FC<Props> = ({ menu }: Props) => {
  return (
    <S.FormInputList>
      {menu.map((item) => (
        <S.ListItem key={item.label}>
          <ListItemIcon>{getIcon(item.format)}</ListItemIcon>
          <S.ListItemText primary={item.label} />
        </S.ListItem>
      ))}
    </S.FormInputList>
  );
};

export default FormInputList;
