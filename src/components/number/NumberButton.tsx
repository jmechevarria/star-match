import { NumberStatus } from "../../types";
import colors from "../../utils/colors";

type Props = {
  label: string;
  status: NumberStatus;
  onClickP: (number: number, status: NumberStatus) => void;
};

const NumberButton = ({ label, status, onClickP }: Props) => {
  const onClick = () => {
    onClickP(Number(label), status);
  };

  return (
    <button
      className="number"
      onClick={onClick}
      style={{ backgroundColor: colors[status] }}
    >
      {label}
    </button>
  );
};

export default NumberButton;
