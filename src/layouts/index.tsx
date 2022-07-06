import { FC } from 'react';
import { Box } from '@mui/material';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import * as S from './styled';

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <S.MainContainer>
          <S.ContextBox component="main">
            <Box>
              <Header />
            </Box>
            {children}
          </S.ContextBox>
          <Footer />
        </S.MainContainer>
      </Box>
    </Box>
  );
};

export default Layout;
