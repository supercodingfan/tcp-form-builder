import { FC, useState } from 'react';

import Layout from 'layouts';
import Tabs from 'components/common/Tabs';
import DesignForm from 'containers/DesignForm';
import { FormBuilderProvider } from 'provider/FormBuilderProvider';

import { tabs } from './utils';
import * as S from './styled';

const FormBuilder: FC = () => {
  const [tab, setTab] = useState<number>(tabs[0].value);

  const onChangeTab = (val: number) => {
    setTab(val);
  };

  return (
    <Layout>
      <FormBuilderProvider>
        <S.FormBuilderContainer>
          <Tabs selected={tab} tabs={tabs} onChangeTab={onChangeTab} />
          <DesignForm />
        </S.FormBuilderContainer>
      </FormBuilderProvider>
    </Layout>
  );
};

export default FormBuilder;
