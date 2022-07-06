import styled from '@emotion/styled';
import { AppBar as MuiAppBar, Box, Typography, TextField } from '@mui/material';

export const Header = styled(MuiAppBar)`
  border-top-left-radius: 40px;
  background-color: white;
  box-shadow: none;
  border-bottom: 1px solid #eef2f8;
  color: #313e4f;
  padding: 10px;
`;

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-right: 1px solid #eef2f8;
  padding-right: 15px;
`;

export const LogoTitle = styled(Typography)`
  font-size: 40px;
  font-weight: bolder;
  margin-left: 20px;
`;

export const TitleInput = styled(TextField)`
  padding-left: 10px;
  & .MuiInput-root:before {
    border: 0;
  }
  & input {
    font-size: 24px;
    font-weight: bold;
    color: #313e4f;
  }
`;
