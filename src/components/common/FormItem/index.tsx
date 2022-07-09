import { FC } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import {
  DragIndicatorOutlined,
  EditOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';
import { useDrop, useDrag } from 'react-dnd';
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
  const [, { onAddBetween, onChangeValue, onChangePosition }] =
    useFormBuilder();
  const [{ canDrop: canPrevDrop, isOver: isPrevOver }, prevDrop] = useDrop(
    () => ({
      accept: 'FormInput',
      drop: (item: DragAndDropItem, monitor) => {
        if (item.id) {
          onChangePosition(pageId, item.id, component.id, 'prev');
        } else {
          onAddBetween(pageId, component.id, 'prev', {
            id: uuid(),
            ...item,
            width: 6,
            value: '',
          });
        }
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
        if (item.id) {
          onChangePosition(pageId, item.id, component.id, 'next');
        } else {
          onAddBetween(pageId, component.id, 'next', {
            id: uuid(),
            ...item,
            width: 6,
            value: '',
          });
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })
  );

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'FormInput',
    item: {
      id: component.id,
      label: component.label,
      name: component.name,
      type: component.type,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleChange = (e: any) => {
    e.preventDefault();
    onChangeValue(pageId, component.id, e.target.value);
  };

  return (
    <Grid item xs={component.width} ref={dragPreview}>
      <S.FormItem>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'between',
          }}
        >
          <Box className="icon-move" ref={prevDrop}>
            <IconButton style={{ cursor: 'move' }} ref={drag}>
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
