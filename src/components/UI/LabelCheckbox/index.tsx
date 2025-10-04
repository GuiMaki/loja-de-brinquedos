import Checkbox from "./Checkbox";

type LabelCheckboxProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const LabelCheckbox = ({ selected, onPress, label }: LabelCheckboxProps) => {
  return (
    <div
      onClick={onPress}
      className="items-center gap-2 cursor-pointer flex w-fit"
    >
      <Checkbox selected={selected} />

      <span className="select-none text-sm">{label}</span>
    </div>
  );
};

export default LabelCheckbox;
