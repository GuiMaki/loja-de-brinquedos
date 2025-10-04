import Checkbox from './Checkbox';

type LabelCheckboxProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const LabelCheckbox = ({ selected, onPress, label }: LabelCheckboxProps) => {
  return (
    <div
      className="flex w-fit cursor-pointer items-center gap-2"
      onClick={onPress}
    >
      <Checkbox selected={selected} />

      <span className="select-none font-roboto text-sm font-light">
        {label}
      </span>
    </div>
  );
};

export default LabelCheckbox;
