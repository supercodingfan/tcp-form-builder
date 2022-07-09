/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import React, { FC, useState } from 'react';
import { Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import {
  DragIndicatorOutlined,
  EditOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';
import { useDrop, useDrag } from 'react-dnd';
import { v4 as uuid } from 'uuid';
import { DropzoneArea } from 'mui-file-dropzone';

import { InputField } from 'components/common/InputField';
import { useFormBuilder } from 'provider/FormBuilderProvider';
import EditFieldModal from 'components/common/EditFieldModal';
import { DragAndDropItem, Component } from 'types';

import * as S from './styled';

interface Props {
  component: Component;
  pageId: string;
}

const FormItem: FC<Props> = ({ component, pageId }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [editModalOpened, setEditModalOpened] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = `edit-field-menu-${component.id}`;

  const [
    ,
    { onAddBetween, onChangeValue, onChangePosition, onUpdateComponent },
  ] = useFormBuilder();
  const [{ canDrop: canPrevDrop, isOver: isPrevOver }, prevDrop] = useDrop(
    () => ({
      accept: 'FormInput',
      drop: (item: DragAndDropItem, monitor) => {
        if (item.id) {
          onChangePosition(pageId, item.id, component.id, 'prev');
        } else {
          const newItem =
            item.type === 'select'
              ? {
                  ...item,
                  options: [
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' },
                    { label: 'Option 3', value: 'option3' },
                  ],
                }
              : item;
          onAddBetween(pageId, component.id, 'prev', {
            id: uuid(),
            ...newItem,
            width: item.type === 'file' ? 12 : 6,
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
          const newItem =
            item.type === 'select'
              ? {
                  ...item,
                  options: [
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' },
                    { label: 'Option 3', value: 'option3' },
                  ],
                }
              : item;
          onAddBetween(pageId, component.id, 'next', {
            id: uuid(),
            ...newItem,
            width: item.type === 'file' ? 12 : 6,
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

  const handleOptionMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenEditModal = () => {
    handleMenuClose();
    setEditModalOpened(true);
  };

  const handleCloseEditModal = () => setEditModalOpened(false);

  const handleSaveOptions = (item: Component) => {
    onUpdateComponent(pageId, component.id, item);
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
                <IconButton onClick={handleOptionMenuOpen}>
                  <MoreVertOutlined />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  style={{ top: '60px' }}
                >
                  <MenuItem onClick={handleOpenEditModal}>Edit Field</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Duplicate Field</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Delete Field</MenuItem>
                </Menu>
              </Box>
            </S.LabelContainer>
            {component.type === 'file' ? (
              <DropzoneArea
                onDelete={() => console.log('DropZoneArea onDelete')}
                onChange={() => console.log('DropZoneArea onChange')}
                fileObjects={undefined}
              />
            ) : component.type === 'select' ? (
              <InputField
                select
                variant="filled"
                value={component.value}
                error={false}
                data={component.options}
                fullWidth
                onChange={handleChange}
              />
            ) : (
              <InputField
                variant="filled"
                value={component.value}
                error={false}
                type={component.type}
                fullWidth
                onChange={handleChange}
              />
            )}
          </Box>
        </Box>
      </S.FormItem>
      <EditFieldModal
        item={component}
        open={editModalOpened}
        handleSave={handleSaveOptions}
        handleClose={handleCloseEditModal}
      />
    </Grid>
  );
};

export default FormItem;
