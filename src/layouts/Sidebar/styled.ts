import styled from '@emotion/styled';
import { Drawer as MuiDrawer, Box } from '@mui/material';

const drawerWidth = 240;

export const Drawer = styled(MuiDrawer, {
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
      color: 'white',
      width: drawerWidth,
      transitionProperty: 'width',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'ease',
      overflowX: 'hidden',
      backgroundColor: 'transparent',
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
      width: '60px',
      backgroundColor: 'transparent',
      border: 0,
    },
  }),
}));

export const DrawerBody = styled(Box)`
  padding-top: 40px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: between;
  height: 100%;
`;
