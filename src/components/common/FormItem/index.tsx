import { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import {
  DragIndicatorOutlined,
  EditOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';

import { InputField } from 'components/common/InputField';

import * as S from './styled';

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (id: string, value: string) => void;
}

const FormItem: FC<Props> = ({ id, label, value, onChange }: Props) => {
  const handleChange = (e: any) => {
    e.preventDefault();
    onChange(id, e.target.value);
  };
  return (
    <S.FormItem>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'between',
        }}
      >
        <Box>
          <IconButton>
            <DragIndicatorOutlined />
          </IconButton>
        </Box>
        <Box flexGrow={1}>
          <S.LabelContainer>
            <S.FormLabel>{label}</S.FormLabel>
            <Box>
              <IconButton>
                <EditOutlined />
              </IconButton>
              <IconButton>
                <MoreVertOutlined />
              </IconButton>
            </Box>
          </S.LabelContainer>
          <InputField
            variant="filled"
            value={value}
            error={false}
            fullWidth
            onChange={handleChange}
          />
        </Box>
      </Box>
    </S.FormItem>
  );
};

export default FormItem;
