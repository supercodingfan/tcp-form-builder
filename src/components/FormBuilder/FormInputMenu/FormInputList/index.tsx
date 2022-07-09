import { FC } from 'react';
import { ListItemIcon } from '@mui/material';
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
import { useDrag } from 'react-dnd';

import { FormInputItem } from 'types';
import { FormInputIcons } from 'types/constants';

import * as S from './styled';

interface FormInputListProps {
  menu: FormInputItem[];
}

interface FormInputItemProps {
  item: FormInputItem;
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

const ListItem: FC<FormInputItemProps> = ({ item }: FormInputItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FormInput',
    item: {
      name: item.name,
      type: item.type,
      label: item.label,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <S.ListItem key={item.label} ref={drag}>
      <ListItemIcon>{getIcon(item.format)}</ListItemIcon>
      <S.ListItemText primary={item.label} />
    </S.ListItem>
  );
};

const FormInputList: FC<FormInputListProps> = ({
  menu,
}: FormInputListProps) => {
  return (
    <S.FormInputList>
      {menu.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </S.FormInputList>
  );
};

export default FormInputList;
