import { PageItem, Component } from 'types';

interface StateFormBuilder {
  pages: PageItem[];
}

interface ActionsFormBuilder {
  onAddPage: (id: string) => void;
  onAddComponent: (id: string, component: Component) => void;
  onAddBetween: (
    pageId: string,
    componentId: string,
    type: string,
    component: Component
  ) => void;
  onUpdate: (id: string, components: Component[]) => void;
  onChangeValue: (pageId: string, componentId: string, value: string) => void;
  onChangePosition: (
    pageId: string,
    sourceComponentId: string,
    targetComponentId: string,
    type: string
  ) => void;
}

export type TypeFormBuilder = [StateFormBuilder, ActionsFormBuilder];
