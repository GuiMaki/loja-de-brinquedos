import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Imagen } from '@/interface/products';
import { formatCurrency, formatRateNumber } from '@/utils/format';

import RatingStarsCard from './RatingStarCard';

type ProductCardProps = {
  image: Imagen[];
  name: string;
  rating: number;
  rateAmmount: number;
  price: number;
  id: string;
  width?: number;
};

const ProductCard = ({
  image,
  name,
  price,
  rateAmmount,
  rating,
  id,
}: ProductCardProps) => {
  const router = useRouter();

  return (
    <div
      className="flex h-fit w-[280px] cursor-pointer flex-col gap-3 overflow-hidden rounded-xl bg-white p-5 hover:opacity-60"
      onClick={() => router.push(`/categories/products/productsDetail/${id}`)}
    >
      <Image
        alt="ProductImage"
        height={240}
        src={image[0].caminho}
        style={{ width: 240, height: 240, objectFit: 'contain' }}
        width={240}
      />

      <span className="text-secondary-100 truncate font-lexend text-xl font-semibold">
        {name}
      </span>

      <div className="flex items-center gap-1">
        <span className="text-neutral-40 font-roboto text-xs font-medium">
          {rating},0
        </span>

        <RatingStarsCard rating={rating} />

        <span className="text-neutral-40 font-roboto text-xs font-medium">
          ({formatRateNumber(rateAmmount)})
        </span>
      </div>

      <span className="text-neutral-80 font-lexend text-xl font-bold">
        {formatCurrency(price)}
      </span>
    </div>
  );
};

export default ProductCard;
