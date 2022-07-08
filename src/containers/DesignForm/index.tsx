import { FC } from 'react';
import { Box, Paper } from '@mui/material';

import FormInputMenu from 'components/FormBuilder/FormInputMenu';
import FormPage from 'components/FormBuilder/FormPage';

import { formInputMenu } from './utils';
import * as S from './styled';

const DesignForm: FC = () => {
  return (
    <S.DesignFormContainer>
      <FormInputMenu menu={formInputMenu} />
      <S.PageContainer>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              my: 3,
            }}
          >
            <S.PageNumber>Page 1</S.PageNumber>
          </Box>
          <FormPage />
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              my: 3,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <S.Divider>
                <S.AddPageButton>+ Add New Page Here</S.AddPageButton>
              </S.Divider>
            </Box>
            <S.PageNumber>Page 2</S.PageNumber>
          </Box>
          <FormPage />
        </Box>
      </S.PageContainer>
    </S.DesignFormContainer>
  );
};

export default DesignForm;
