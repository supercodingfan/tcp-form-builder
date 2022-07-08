import { PageItem, Component } from 'types';

interface StateFormBuilder {
  pages: PageItem[];
}

interface ActionsFormBuilder {
  onAddPage: (id: string) => void;
  onAddComponent: (id: string, component: Component) => void;
  onUpdate: (id: string, components: Component[]) => void;
}

export type TypeFormBuilder = [StateFormBuilder, ActionsFormBuilder];
