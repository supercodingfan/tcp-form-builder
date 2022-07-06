import styled from '@emotion/styled';
import { Drawer as MuiDrawer, Box, Typography } from '@mui/material';

const drawerWidth = 240;

export const FormInputMenu = styled(MuiDrawer, {
  shouldForwardProp: (props) => props !== 'open',
})((props) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(props.open && {
    width: drawerWidth,
    transitionProperty: 'width',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease',
    overflowX: 'hidden',
    '& .MuiDrawer-paper': {
      position: 'relative',
      width: drawerWidth,
      transitionProperty: 'width',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'ease',
      overflowX: 'hidden',
      height: '100%',
      backgroundColor: '#f5fafb',
      border: 0,
    },
  }),
  ...(!props.open && {
    transitionProperty: 'width',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease',
    overflowX: 'hidden',
    width: '60px',
    '& .MuiDrawer-paper': {
      position: 'relative',
      transitionProperty: 'width',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'ease',
      overflowX: 'hidden',
      width: '50px',
      height: '100%',
      backgroundColor: '#fffafb',
      border: 0,
    },
  }),
}));

export const DrawerBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: between;
  height: 100%;
`;

export const TitleContainer = styled(Box)`
  background-color: #313e4f;
  padding: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)``;
