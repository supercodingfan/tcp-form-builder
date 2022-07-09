import styled from '@emotion/styled';
import {
  Box,
  FormLabel as MuiFormLabel,
  Autocomplete as MuiAutoComplete,
} from '@mui/material';

export const FormItem = styled(Box)`
  box-sizing: border-box;
  padding: 10px 20px 20px 5px;
  border: 1px dashed white;
  width: 100%;
  & .icon-move {
    opacity: 0;
  }
  &:hover {
    border: 1px dashed #3580ff;
    border-radius: 10px;
    & .icon-move {
      opacity: 1;
    }
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
