import styled from '@emotion/styled';
import {
  Box,
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  Autocomplete as MuiAutoComplete,
} from '@mui/material';

export const FormItem = styled(Box)`
  box-sizing: border-box;
  padding: 10px 20px 20px 5px;
  width: 100%;
  &:hover {
    border: 1px dashed #3580ff;
    border-radius: 10px;
  }
`;

export const LabelContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormLabel = styled(MuiFormLabel)`
  color: black;
`;

export const AutoComplete = styled(MuiAutoComplete)`
  font-size: 12px;
`;
