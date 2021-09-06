export type InteractionType = {
  id: number;
  name: string;
  text: string;
  uiType: "button"; // e.g.: | "input" | "div" | "span"; etc. where applicable
  valueType: "boolean" | "string" | "number";
  valueOptions: InteractionOptionType[];
};

export type InteractionOptionType = {
  nextId: number | false;
  value: boolean | string | number;
  text: string;
};
