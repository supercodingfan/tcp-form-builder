import styled from '@emotion/styled';
import { Box, Typography, Divider as MuiDivider, Button } from '@mui/material';

export const DesignFormContainer = styled(Box)`
  background-color: #f0f0f0;
  padding: 30px 10px;
  display: flex;
  height: 100%;
`;

export const PageContainer = styled(Box)`
  margin-left: 10px;
  flex-grow: 1;
`;

export const Divider = styled(MuiDivider)`
  &:before,
  &:after {
    border-top: thin dashed rgba(0, 0, 0, 0.12);
  }
`;

export const PageNumber = styled(Typography)`
  margin-left: 10px;
`;

export const AddPageButton = styled(Button)``;
