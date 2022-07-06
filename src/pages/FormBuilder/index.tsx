import { FC, useState } from 'react';
import { Box } from '@mui/material';

import Layout from '../../layouts';
import Tabs from '../../components/Tabs';
import TabPanel from '../../layouts/TabPanel';
import FormSettings from '../../containers/FormSettings';
import DesignForm from '../../containers/DesignForm';
import DataModel from '../../containers/DataModel';

import { tabs } from './utils';

const FormBuilder: FC = () => {
  const [tab, setTab] = useState<number>(tabs[0].value);

  const onChangeTab = (val: number) => {
    setTab(val);
  };

  return (
    <Layout>
      <Box>
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
      </Box>
    </Layout>
  );
};

export default FormBuilder;
