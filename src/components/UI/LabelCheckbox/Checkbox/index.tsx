import colors from "@/global/colors";
import Icon from "../../Icon";

type CheckboxProps = {
  selected: boolean;
};

const Checkbox = ({ selected }: CheckboxProps) => {
  return (
    <div
      className="inline-flex items-center justify-center rounded-[4px] border w-5 h-5"
      style={{
        backgroundColor: selected ? colors.primary[100] : "transparent",
        borderColor: colors.primary[100],
      }}
    >
      {selected && (
        <Icon
          name="CheckIcon"
          size={20}
          color={colors.neutral.white}
          strokeWidth={1}
          fill={colors.neutral.white}
        />
      )}
    </div>
  );
};

export default Checkbox;
