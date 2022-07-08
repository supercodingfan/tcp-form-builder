import { FC, useState, ReactNode } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  MenuItem,
  TextFieldProps,
} from '@mui/material';

import * as S from './styled';

type TextFieldCustomProps = {
  value?: string;
  error?: boolean;
  type?: string;
  helperText?: ReactNode;
  data?: { label: string; value: string }[];
  gridAreaName?: string;
  id?: string;
  labelShrink?: boolean;
  $gridColumn?: string;
  $flex?: string;
};

export type InputFieldProps = TextFieldProps & TextFieldCustomProps;

export const InputField: FC<InputFieldProps> = ({
  data,
  type,
  value,
  gridAreaName,
  labelShrink,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const menuItems = data
    ?.reduce(
      (accumulator: { label: string; value: string }[], { label, value }) => {
        if (value === 'true' || value === 'false') {
          accumulator.push({ label: label, value: JSON.parse(value) });
        } else {
          accumulator.push({ label: label, value: value });
        }
        return accumulator;
      },
      []
    )
    .map(({ label, value }) => {
      return (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      );
    });

  const passwordProps = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword(!showPassword)}
        onMouseDown={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  const fieldValue = type === 'date' && value ? value.slice(0, 10) : value;

  let fieldType = type;
  if (type === 'password') {
    fieldType = showPassword ? 'text' : 'password';
  }
  return (
    <S.CustomTextField
      label={''}
      value={fieldValue}
      gridAreaName={gridAreaName}
      labelShrink={labelShrink}
      type={fieldType}
      FormHelperTextProps={{ className: 'helper-style' }}
      InputProps={{
        className: 'input-style',
        endAdornment: type === 'password' && { ...passwordProps },
      }}
      InputLabelProps={{
        // shrink: Boolean(labelShrink),
        className: labelShrink ? undefined : 'label-style',
      }}
      {...props}
    >
      {menuItems}
    </S.CustomTextField>
  );
};
