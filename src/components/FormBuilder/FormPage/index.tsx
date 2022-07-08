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
    drop: (item: DragAndDropItem) => {
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

  const onChange = (id: string, value: string) => {
    // setComponents([
    //   ...components.map((item) => (item.id === id ? { ...item, value } : item)),
    // ]);
  };

  return (
    <S.FormPage>
      <Grid container spacing={1} flexGrow={1} ref={drop}>
        {components.map((item) => {
          return (
            <FormItem
              key={item.id}
              id={item.id}
              width={item.width}
              label={item.label}
              value={item.value}
              onChange={onChange}
            />
          );
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
