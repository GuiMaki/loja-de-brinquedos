import colors from '@/global/colors';

import Icon from '../Icon';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (text: string) => void;
  borderColor?: string;
  bgColor?: string;
};

const SearchBar = ({
  placeholder = 'Buscar',
  value = '',
  onChangeText,
  borderColor = colors.primary[100],
  bgColor = colors.neutral.white,
}: SearchBarProps) => {
  return (
    <div
      className="flex items-center gap-3 rounded-lg border px-4 py-3 transition-all"
      style={{ borderColor, backgroundColor: bgColor, width: 500 }}
    >
      <div className="z-10">
        <Icon color={colors.secondary[100]} name="MagnifyingIcon" size={24} />
      </div>

      <input
        className="text-neutral-80 placeholder-neutral-20 flex w-full bg-transparent font-lexend text-lg font-light outline-none"
        placeholder={placeholder}
        value={value}
        onChange={text => onChangeText?.(text.target.value)}
      />

      {value.length > 0 && (
        <button
          className="hover:bg-neutral-10 cursor-pointer rounded-full p-1 transition"
          onClick={() => onChangeText?.('')}
        >
          <Icon color={colors.neutral[40]} name="XIcon" size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
