import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';
import { formatCurrency } from '@/utils/format';

type ProductListItemProps = {
  id: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
};

const ProductListItem = ({
  categories,
  description,
  id,
  name,
  price,
}: ProductListItemProps) => {
  const joinedCategories = categories.join(', ');

  return (
    <div className="border-neutral-20 flex w-full cursor-default items-center rounded-xl border bg-white px-3 py-2">
      <span
        className="text-neutral-60 truncate pr-10 font-roboto text-xl font-medium"
        style={{ width: '25%' }}
      >
        {name}
      </span>

      <span
        className="text-neutral-60 truncate pr-10 font-roboto text-xl font-medium"
        style={{ width: '37%' }}
      >
        {description}
      </span>

      <span
        className="text-neutral-60 truncate pr-10 font-roboto text-xl font-medium"
        style={{ width: '16%' }}
      >
        {joinedCategories}
      </span>

      <span className="text-neutral-60 flex flex-1 justify-center font-roboto text-xl font-medium">
        {formatCurrency(price)}
      </span>

      <div className="flex flex-1 justify-center gap-3">
        <div
          className="hover:bg-neutral-20 cursor-pointer items-center justify-center rounded-full p-2"
          onClick={() => alert(`detail id: ${id}`)}
        >
          <Icon fill={colors.neutral[60]} name="EyeIcon" size={24} />
        </div>

        <div
          className="hover:bg-neutral-20 cursor-pointer items-center justify-center rounded-full p-2"
          onClick={() => alert(`edit id: ${id}`)}
        >
          <Icon color={colors.neutral[60]} name="EditIcon" size={24} />
        </div>

        <div
          className="hover:bg-neutral-20 cursor-pointer items-center justify-center rounded-full p-2"
          onClick={() => alert(`delete id: ${id}`)}
        >
          <Icon color={colors.neutral[60]} name="DeleteIcon" size={24} />
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
