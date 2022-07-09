import { FC, useState, useEffect } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';

import { InputField } from 'components/common/InputField';
import { Component } from 'types';

import * as S from './styled';

interface Props {
  item: Component;
  open: boolean;
  handleClose: () => void;
  handleSave: (item: Component) => void;
}

const EditFieldModal: FC<Props> = ({
  item,
  open,
  handleSave,
  handleClose,
}: Props) => {
  const [state, setState] = useState<Component | null>(null);
  useEffect(() => {
    setState(item);
  }, []);

  const handleChange = (e: any, name: string) => {
    e.preventDefault();
    if (state) {
      setState({
        ...state,
        [name]: name === 'width' ? parseInt(e.target.value) : e.target.value,
      });
    }
  };

  const onSave = () => {
    if (state) {
      handleSave(state);
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.EditFormBox boxShadow={24}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
          mb={3}
        >
          Edit Field
        </Typography>
        <Box mb={2}>
          <Typography>Label</Typography>
          <InputField
            value={state?.label}
            onChange={(e) => handleChange(e, 'label')}
          />
        </Box>
        <Box mb={2}>
          <Typography>Width</Typography>
          <InputField
            select
            value={state?.width.toString()}
            data={[
              { label: '6', value: '6' },
              { label: '12', value: '12' },
            ]}
            onChange={(e) => handleChange(e, 'width')}
          />
        </Box>
        <Box display="flex" justifyContent="end" alignItems="center">
          <Button
            color="inherit"
            variant="contained"
            style={{ marginRight: '5px' }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button color="primary" variant="contained" onClick={onSave}>
            Save
          </Button>
        </Box>
      </S.EditFormBox>
    </Modal>
  );
};

export default EditFieldModal;
