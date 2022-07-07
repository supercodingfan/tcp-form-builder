import { FC } from 'react';

import FormInputMenu from 'components/FormBuilder/FormInputMenu';

import { formInputMenu } from './utils';
import * as S from './styled';

const DesignForm: FC = () => {
  return (
    <S.DesignFormContainer>
      <FormInputMenu menu={formInputMenu} />
      <div>Form Builder Body</div>
    </S.DesignFormContainer>
  );
};

export default DesignForm;
