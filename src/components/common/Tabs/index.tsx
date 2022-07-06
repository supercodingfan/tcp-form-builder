import { FC, SyntheticEvent } from 'react';

import { Tab } from '../../../types';

import * as S from './styled';

interface Props {
  selected: number;
  tabs: Tab[];
  onChangeTab: (val: number) => void;
  indicatorColor?: 'secondary' | 'primary' | undefined;
}

const Tabs: FC<Props> = ({
  selected,
  tabs,
  onChangeTab,
  indicatorColor,
}: Props) => {
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
    <S.Tabs
      value={selected}
      onChange={onChange}
      variant="scrollable"
      allowScrollButtonsMobile
      indicatorColor={indicatorColor}
    >
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
