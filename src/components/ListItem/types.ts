import { IdType, InteractionOptionType, ValueType } from "types";

export type Props = {
  id: number;
  text: string;
  buttonOptions: InteractionOptionType[];
  handleSelection: (
    currentId: IdType,
    nextId: IdType,
    selection: ValueType
  ) => void;
};
