import mathUtils from "../../utils/math";

type Props = {
  count: number;
};
const StarsDisplay = ({ count }: Props) => {
  return mathUtils
    .range(1, count)
    .map((number) => <div key={number} className="star" />);
};

export default StarsDisplay;
