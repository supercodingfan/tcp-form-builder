import { FC, useState } from 'react';

import Layout from 'layouts';
import Tabs from 'components/common/Tabs';
import TabPanel from 'layouts/TabPanel';
import FormSettings from 'containers/FormSettings';
import DesignForm from 'containers/DesignForm';
import DataModel from 'containers/DataModel';

import { tabs } from './utils';
import * as S from './styled';

const FormBuilder: FC = () => {
  const [tab, setTab] = useState<number>(tabs[0].value);

  const onChangeTab = (val: number) => {
    setTab(val);
  };

  return (
    <Layout>
      <S.FormBuilderContainer>
        <Tabs selected={tab} tabs={tabs} onChangeTab={onChangeTab} />
        <TabPanel value={tab} index={0}>
          <DesignForm />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <FormSettings />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <DataModel />
        </TabPanel>
      </S.FormBuilderContainer>
    </Layout>
  );
};

export default FormBuilder;
