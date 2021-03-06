export type InteractionType = {
  id: number;
  name: string;
  text: string;
  uiType: "button"; // e.g.: | "input" | "div" | "span"; etc. where applicable
  valueType: ValueType;
  valueOptions: InteractionOptionType[];
};

export type InteractionOptionType = {
  nextId: IdType;
  value: ValueType;
  text: string;
};

export type DBItemType = {
  name: string;
  value?: ValueType;
};

export type ValueType = string | number | boolean;

export type IdType = number | false;
