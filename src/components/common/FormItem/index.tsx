import { FC } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import {
  DragIndicatorOutlined,
  EditOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';
import { useDrop } from 'react-dnd';
import { v4 as uuid } from 'uuid';

import { InputField } from 'components/common/InputField';
import { useFormBuilder } from 'provider/FormBuilderProvider';
import { DragAndDropItem, Component } from 'types';

import * as S from './styled';

interface Props {
  component: Component;
  pageId: string;
}

const FormItem: FC<Props> = ({ component, pageId }: Props) => {
  const [, { onAddBetween, onChangeValue }] = useFormBuilder();
  const [{ canDrop: canPrevDrop, isOver: isPrevOver }, prevDrop] = useDrop(
    () => ({
      accept: 'FormInput',
      drop: (item: DragAndDropItem, monitor) => {
        onAddBetween(pageId, component.id, 'prev', {
          id: uuid(),
          ...item,
          width: 6,
          value: '',
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })
  );

  const [{ canDrop: canNextDrop, isOver: isNextOver }, nextDrop] = useDrop(
    () => ({
      accept: 'FormInput',
      drop: (item: DragAndDropItem, monitor) => {
        onAddBetween(pageId, component.id, 'njext', {
          id: uuid(),
          ...item,
          width: 6,
          value: '',
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })
  );

  const handleChange = (e: any) => {
    e.preventDefault();
    onChangeValue(pageId, component.id, e.target.value);
  };

  return (
    <Grid item xs={component.width}>
      <S.FormItem>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'between',
          }}
        >
          <Box className="icon-move" ref={prevDrop}>
            <IconButton>
              <DragIndicatorOutlined />
            </IconButton>
          </Box>
          <Box flexGrow={1} ref={nextDrop}>
            <S.LabelContainer>
              <S.FormLabel>{component.label}</S.FormLabel>
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
              value={component.value}
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
