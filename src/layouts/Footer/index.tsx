import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import * as S from './styled';

const Footer: FC = () => {
  return (
    <Container>
      <S.Footer component="footer">
        <Grid container spacing={3}>
          <Grid
            item
            xxs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems={{ xxs: 'center', md: 'start' }}
          >
            <img src="/logo-footer.svg" />
            <S.Description
              variant="body1"
              textAlign={{ xxs: 'center', md: 'left' }}
            >
              The most advanced Trade Finance Platform built specifically for
              Emerging Markets that lets you access capital on your own terms.
            </S.Description>
          </Grid>
          <Grid
            item
            xxs={12}
            sm={6}
            md={4}
            textAlign={{ xxs: 'center', md: 'left' }}
          >
            <S.Title variant="h6">Contact Us</S.Title>
            <S.Description>
              Address: DD-15-134-004 - 007, Level 15, Wework Hub71, Al Khatem
              Tower, ADGM Square, Al Maryah Island, Abu Dhabi, United Arab
              Emirates;
            </S.Description>
            <S.Description>Email: hello@tcp.finance</S.Description>
            <S.Description>For Investors: invest@tcp.finance</S.Description>
          </Grid>
          <Grid
            item
            xxs={12}
            sm={6}
            md={4}
            textAlign={{ xxs: 'center', md: 'left' }}
          >
            <S.Title variant="h6">Links</S.Title>
            <S.Description>Privacy Policy</S.Description>
            <S.Description>Terms & Conditions</S.Description>
            <S.Description>Website</S.Description>
            <S.Description>Support</S.Description>
          </Grid>
        </Grid>
      </S.Footer>
    </Container>
  );
};

export default Footer;
