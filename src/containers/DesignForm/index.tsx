import { FC } from 'react';

import FormInputMenu from 'components/FormBuilder/FormInputMenu';

import * as S from './styled';

const DesignForm: FC = () => {
  return (
    <S.DesignFormContainer>
      <FormInputMenu />
      <div>Form Builder Body</div>
    </S.DesignFormContainer>
  );
};

export default DesignForm;
