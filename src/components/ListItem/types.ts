import { InteractionOptionType } from "../../types";

export type Props = {
  text: string;
  buttonOptions: InteractionOptionType[];
  handleSelection: (selection: number | false) => void;
};
