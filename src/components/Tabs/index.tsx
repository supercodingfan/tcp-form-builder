import { FC, SyntheticEvent } from 'react';

import { Tab } from '../../types';

import * as S from './styled';

interface Props {
  selected: number;
  tabs: Tab[];
  onChangeTab: (val: number) => void;
}

const Tabs: FC<Props> = ({ selected, tabs, onChangeTab }: Props) => {
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const onChange = (event: SyntheticEvent, newValue: number) => {
    onChangeTab(newValue);
  };

  return (
    <S.Tabs value={selected} onChange={onChange}>
      {tabs.map((tab) => (
        <S.Tab
          key={tab.value}
          label={tab.label}
          {...a11yProps(tab.value)}
        ></S.Tab>
      ))}
    </S.Tabs>
  );
};

export default Tabs;
