import { FC } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import {
  DragIndicatorOutlined,
  EditOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';
import { useDrop } from 'react-dnd';

import { InputField } from 'components/common/InputField';

import * as S from './styled';

interface Props {
  id: string;
  label: string;
  width: number;
  value: string;
  onChange: (id: string, value: string) => void;
}

const FormItem: FC<Props> = ({ id, label, value, width, onChange }: Props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'FormInput',
    drop: (item: any, monitor) => {
      // onAdd(id, item.name, item.label, item.type);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleChange = (e: any) => {
    e.preventDefault();
    onChange(id, e.target.value);
  };

  return (
    <Grid item xs={width} ref={drop}>
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
    </Grid>
  );
};

export default FormItem;
