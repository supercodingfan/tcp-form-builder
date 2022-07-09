import { FC } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useDrop } from 'react-dnd';

import FormItem from 'components/common/FormItem';
import { PageItem, DragAndDropItem } from 'types';
import { useFormBuilder } from 'provider/FormBuilderProvider';

import * as S from './styled';

interface Props {
  item: PageItem;
}

const FormPage: FC<Props> = ({ item: { id, isLast, components } }: Props) => {
  const [, { onAddComponent }] = useFormBuilder();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'FormInput',
    drop: (item: DragAndDropItem, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop || item.id) {
        return;
      }
      onAddComponent(id, {
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
  }));

  return (
    <S.FormPage>
      <Grid container spacing={1} flexGrow={1} ref={drop} pb={2}>
        {components.map((item) => {
          return <FormItem key={item.id} component={item} pageId={id} />;
        })}
      </Grid>
      <Box display="flex" justifyContent="end">
        {isLast && (
          <Button
            size="large"
            variant="contained"
            color="inherit"
            style={{ marginRight: '8px' }}
          >
            Back
          </Button>
        )}
        <Button size="large" variant="contained">
          {isLast ? 'Submit' : 'Continue'}
        </Button>
      </Box>
    </S.FormPage>
  );
};

export default FormPage;
