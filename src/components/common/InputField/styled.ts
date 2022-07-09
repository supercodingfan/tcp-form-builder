import styled from '@emotion/styled';
import { TextField } from '@mui/material';

import { theme } from 'styles/theme';

interface GridProps {
  gridAreaName?: string;
  $gridColumn?: string;
  $flex?: string;
  $maxWidth?: string;
  labelShrink?: boolean;
}
const customTextFieldOptions = {
  shouldForwardProp: (prop: any) =>
    prop !== 'gridAreaName' && prop !== 'labelShrink' && prop !== '$gridColumn',
};
export const CustomTextField = styled(
  TextField,
  customTextFieldOptions
)<GridProps>`
  grid-area: ${(props) => props.gridAreaName};
  display: flex;
  ${({ $flex }) => $flex && `flex: ${$flex}`};

  & .input-style {
    & .MuiOutlinedInput-input {
      padding: 5px 15px;
      display: flex;
      align-items: center;
    }

    & .MuiFilledInput-input {
      padding-top: 10px;
      display: flex;
      align-items: center;
    }
  }

  & .helper-style {
    margin: 5px 0 0 14px;
  }

  & .label-style {
    top: -10px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: solid 1px ${theme.palette.colors.gray[100]};
  }

  & .MuiInputLabel-shrink {
    top: 0;
  }

  ${({ labelShrink, $gridColumn, $maxWidth }) =>
    labelShrink
      ? ''
      : `
      &. MuiTextField-root {
        ${$gridColumn ? `grid-column: ${$gridColumn};` : ''}

        & .MuiInputBase-root {
          ${$maxWidth && `max-width: ${$maxWidth}`};
        }
      }
  `}
`;
