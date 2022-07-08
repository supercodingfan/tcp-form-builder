import { FC, useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { v4 as uuid } from 'uuid';

import FormItem from 'components/common/FormItem';
import { PageItem } from 'types';

import * as S from './styled';

interface Props {
  item: PageItem;
}

const FormPage: FC<Props> = ({ item: { id, isLast, components } }: Props) => {
  // const [components, setComponents] = useState([
  //   {
  //     id: '1',
  //     name: 'firstName',
  //     label: 'First Name',
  //     width: 6,
  //     type: 'text',
  //     value: '',
  //   },
  //   {
  //     id: '2',
  //     name: 'lastName',
  //     label: 'Last Name',
  //     width: 6,
  //     type: 'text',
  //     value: '',
  //   },
  // ]);

  const onChange = (id: string, value: string) => {
    // setComponents([
    //   ...components.map((item) => (item.id === id ? { ...item, value } : item)),
    // ]);
  };

  const onAdd = (id: string, name: string, label: string, type: string) => {
    // const index = components.findIndex((item) => item.id === id);
    // setComponents([
    //   ...components.slice(0, index),
    //   {
    //     id: uuid(),
    //     label,
    //     name,
    //     width: 6,
    //     type,
    //     value: '',
    //   },
    //   ...components.slice(index),
    // ]);
  };

  return (
    <S.FormPage>
      <Grid container spacing={1} flexGrow={1}>
        {components.map((item) => {
          return (
            <FormItem
              key={item.id}
              id={item.id}
              onAdd={onAdd}
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
