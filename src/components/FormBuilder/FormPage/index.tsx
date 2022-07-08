import { FC, useState } from 'react';
import { Grid } from '@mui/material';

import FormItem from 'components/common/FormItem';

import * as S from './styled';

const FormPage: FC = () => {
  const [components, setComponents] = useState([
    {
      id: '1',
      name: 'firstName',
      label: 'First Name',
      width: 6,
      type: 'text',
      value: '',
    },
    {
      id: '2',
      name: 'lastName',
      label: 'Last Name',
      width: 6,
      type: 'text',
      value: '',
    },
  ]);

  const onChange = (id: string, value: string) => {
    setComponents([
      ...components.map((item) => (item.id === id ? { ...item, value } : item)),
    ]);
  };

  return (
    <S.FormPage>
      <Grid container spacing={1}>
        {components.map((item) => {
          return (
            <Grid item xs={item.width} key={item.id}>
              <FormItem
                id={item.id}
                label={item.label}
                value={item.value}
                onChange={onChange}
              />
            </Grid>
          );
        })}
      </Grid>
    </S.FormPage>
  );
};

export default FormPage;
