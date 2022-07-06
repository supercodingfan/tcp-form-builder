import { FC, useState } from 'react';
import { IconButton } from '@mui/material';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';

import Tabs from 'components/common/Tabs';

import FormInputList from './FormInputList';
import { tabs } from './utils';
import * as S from './styled';

const FormInputMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [tab, setTab] = useState<number>(tabs[0].value);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onChangeTab = (val: number) => {
    setTab(val);
  };

  return (
    <S.FormInputMenu variant="permanent" open={open}>
      <S.DrawerBody>
        <S.TitleContainer>
          {open && <S.TitleContainer>Available Fields</S.TitleContainer>}
          <IconButton onClick={() => toggleDrawer()}>
            {open ? (
              <ChevronLeftOutlined style={{ color: 'white' }} />
            ) : (
              <ChevronRightOutlined style={{ color: 'white' }} />
            )}
          </IconButton>
        </S.TitleContainer>
        <Tabs
          selected={tab}
          tabs={tabs}
          onChangeTab={onChangeTab}
          indicatorColor="secondary"
        />
        <FormInputList />
      </S.DrawerBody>
    </S.FormInputMenu>
  );
};

export default FormInputMenu;
