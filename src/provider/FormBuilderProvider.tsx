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
    setPages((pages) => [
      ...pages.map((page) => (page.id === id ? { ...page, components } : page)),
    ]);
  };

  const onAddBetween = (
    pageId: string,
    componentId: string,
    type: string,
    component: Component
  ) => {
    setPages((pages) => [
      ...pages.map((page) => {
        if (page.id === pageId) {
          const index = page.components.findIndex(
            (item) => item.id === componentId
          );
          if (index === 0 && type === 'prev') {
            return { ...page, components: [component, ...page.components] };
          }
          if (index === page.components.length - 1 && type === 'next') {
            return { ...page, components: [...page.components, component] };
          }
          if (type === 'prev') {
            return {
              ...page,
              components: [
                ...page.components.slice(0, index - 1),
                component,
                ...page.components.slice(index - 1),
              ],
            };
          }
          return {
            ...page,
            components: [
              ...page.components.slice(0, index),
              component,
              ...page.components.slice(index),
            ],
          };
        }
        return page;
      }),
    ]);
  };

  const onChangeValue = (
    pageId: string,
    componentId: string,
    value: string
  ) => {
    setPages((pages) => [
      ...pages.map((page) =>
        page.id === pageId
          ? {
              ...page,
              components: [
                ...page.components.map((component) =>
                  component.id === componentId
                    ? { ...component, value }
                    : component
                ),
              ],
            }
          : page
      ),
    ]);
  };

  function moveComponents(
    components: Component[],
    sourceId: string,
    targetId: string,
    type: string
  ) {
    if (sourceId === targetId) {
      return components;
    }

    const sourceComponentIndex = components.findIndex(
      (component) => component.id === sourceId
    );
    const sourceComponent = components[sourceComponentIndex];

    let targetComponentIndex = components.findIndex(
      (component) => component.id === targetId
    );

    if (targetComponentIndex === 0 && type === 'prev') {
      return [
        sourceComponent,
        ...components.filter((component) => component.id !== sourceId),
      ];
    }

    if (targetComponentIndex === components.length && type === 'next') {
      return [
        ...components.filter((component) => component.id !== sourceId),
        sourceComponent,
      ];
    }

    if (type === 'next') {
      targetComponentIndex += 1;
    }

    const targetComponent = components[sourceComponentIndex];
    const increment = targetComponentIndex < sourceComponentIndex ? -1 : 1;

    for (
      let k = sourceComponentIndex;
      k !== targetComponentIndex;
      k += increment
    ) {
      components[k] = components[k + increment];
    }
    components[targetComponentIndex] = targetComponent;
    return components;
  }

  const onChangePosition = (
    pageId: string,
    sourceComponentId: string,
    targetComponentId: string,
    type: string
  ) => {
    setPages((pages) => [
      ...pages.map((page) =>
        page.id === pageId
          ? {
              ...page,
              components: moveComponents(
                page.components,
                sourceComponentId,
                targetComponentId,
                type
              ),
            }
          : page
      ),
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
          onAddBetween,
          onUpdate,
          onChangeValue,
          onChangePosition,
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
