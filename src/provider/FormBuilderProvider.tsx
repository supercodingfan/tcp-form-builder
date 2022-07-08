import { FC, createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { PageItem, Component } from 'types';

import { TypeFormBuilder } from './providers-type';

export const FormBuilderContext = createContext<any>(null);

interface Props {
  children: JSX.Element;
}

export const FormBuilderProvider: FC<Props> = ({ children }: Props) => {
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

  const onAddComponent = (id: string, component: Component) => {
    setPages((pages) => [
      ...pages.map((page) =>
        page.id === id
          ? { ...page, components: [...page.components, component] }
          : page
      ),
    ]);
  };

  const onUpdate = (id: string, components: Component[]) => {
    setPages([
      ...pages.map((page) => (page.id === id ? { ...page, components } : page)),
    ]);
  };

  return (
    <FormBuilderContext.Provider
      value={[
        {
          pages,
        },
        {
          onAddPage,
          onAddComponent,
          onUpdate,
        },
      ]}
    >
      {children}
    </FormBuilderContext.Provider>
  );
};

export const useFormBuilder = (): TypeFormBuilder => {
  const [state, dispatch] = useContext(FormBuilderContext);

  return [state, dispatch];
};
