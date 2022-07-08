import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuid } from 'uuid';

import FormInputMenu from 'components/FormBuilder/FormInputMenu';
import FormPage from 'components/FormBuilder/FormPage';
import { PageItem } from 'types';

import { formInputMenu } from './utils';
import * as S from './styled';

const DesignForm: FC = () => {
  const [pages, setPages] = useState<PageItem[]>([]);

  useEffect(() => {
    setPages([{ id: uuid(), isLast: true, components: [] }]);
  }, []);

  const onAddPage = (id: string) => {
    const page = pages.findIndex((page) => page.id === id);
    setPages([
      ...pages.slice(0, page),
      {
        id: uuid(),
        isLast: false,
        components: [],
      },
      ...pages.slice(page),
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <S.DesignFormContainer>
        <FormInputMenu menu={formInputMenu} />
        <S.PageContainer>
          {pages.map((page, index) => (
            <Box key={page.id}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  my: 3,
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  {(page.isLast || index !== 0) && (
                    <S.Divider>
                      <S.AddPageButton onClick={() => onAddPage(page.id)}>
                        + Add New Page Here
                      </S.AddPageButton>
                    </S.Divider>
                  )}
                </Box>
                <S.PageNumber>Page {index + 1}</S.PageNumber>
              </Box>
              <FormPage item={page} />
            </Box>
          ))}
        </S.PageContainer>
      </S.DesignFormContainer>
    </DndProvider>
  );
};

export default DesignForm;
