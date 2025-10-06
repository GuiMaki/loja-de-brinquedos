import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { DefaultImg } from '@/../public/Images';
import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';
import { formatAmmountNumber } from '@/utils/format';

type CategoryCardProps = {
  image: typeof DefaultImg;
  name: string;
  description: string;
  productAmmount: number;
  id: string;
};

const CategoryCard = ({
  description,
  id,
  image,
  name,
  productAmmount,
}: CategoryCardProps) => {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer gap-3 rounded-xl bg-white p-5 hover:opacity-60"
      onClick={() => router.push(`categories/products/${id}`)}
    >
      <Image
        alt="CategoryImage"
        src={image}
        style={{ width: '40%', objectFit: 'contain' }}
      />

      <div className="flex flex-col gap-2">
        <span className="text-secondary-100 font-lexend text-xl font-semibold">
          {name}
        </span>

        <span className="text-neutral-60 flex flex-1 font-lexend text-base font-light">
          {description}
        </span>

        <div className="flex items-center justify-between">
          <span className="text-neutral-60 font-roboto text-base font-normal">
            {formatAmmountNumber(productAmmount)} produtos
          </span>

          <div className="flex items-center gap-1">
            <span className="text-secondary-100 font-roboto text-base font-normal">
              Ver mais
            </span>

            <Icon
              color={colors.secondary[100]}
              name="ChevronIcon"
              rotate={-90}
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
