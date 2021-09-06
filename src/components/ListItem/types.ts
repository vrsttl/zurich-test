import { InteractionOptionType } from "../../types";

export type Props = {
  key: number;
  text: string;
  align: string;
  time: string;
  buttonOptions: InteractionOptionType[];
  handleSelection: (selection: number | false) => VoidFunction;
};
