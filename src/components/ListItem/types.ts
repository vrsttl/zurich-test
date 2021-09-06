import { InteractionOptionType } from "../../types";

export type Props = {
  text: string;
  align: string;
  buttonOptions: InteractionOptionType[];
  handleSelection: (selection: number | false) => void;
};
