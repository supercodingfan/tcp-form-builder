import { FC } from 'react';

import * as S from './styled';

interface Props {
  children?: JSX.Element;
  index: number;
  value: number;
}

const TabPanel: FC<Props> = ({ children, index, value, ...rest }: Props) => {
  return (
    <S.TabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && children}
    </S.TabPanel>
  );
};

export default TabPanel;
