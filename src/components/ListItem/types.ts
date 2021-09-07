import { InteractionOptionType } from "../../types";

export type Props = {
  id: number;
  text: string;
  buttonOptions: InteractionOptionType[];
  handleSelection: (
    currentId: number | false,
    nextId: number | false,
    selection: string | number | boolean
  ) => void;
};
