export type Tab = {
  label: string;
  value: number;
};

export type FormInputItem = {
  label: string;
  name: string;
  format: string;
  type: string;
};

export type Component = {
  id: string;
  label: string;
  name: string;
  width: number;
  value: string;
  type: string;
  options?: { label: string; value: string }[];
};

export type PageItem = {
  id: string;
  isLast: boolean;
  components: Component[];
};

export type DragAndDropItem = {
  id?: string;
  label: string;
  name: string;
  type: string;
};
