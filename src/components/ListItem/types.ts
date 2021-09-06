import { InteractionOptionType } from "../../types";

export type Props = {
  key: number;
  text: string;
  align: string;
  buttonOptions: InteractionOptionType[];
  handleSelection: (selection: number | false) => void;
};
