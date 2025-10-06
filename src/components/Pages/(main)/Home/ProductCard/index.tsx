import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { DefaultImg } from '@/../public/Images';
import { formatCurrency, formatRateNumber } from '@/utils/format';

import RatingStarsCard from './RatingStarCard';

type ProductCardProps = {
  image: typeof DefaultImg;
  name: string;
  rating: number;
  rateAmmount: number;
  price: number;
  id: string;
  width?: number;
  imgWidth?: number;
};

const ProductCard = ({
  image,
  name,
  price,
  rateAmmount,
  rating,
  id,
  width,
  imgWidth,
}: ProductCardProps) => {
  const router = useRouter();

  return (
    <div
      className="flex h-fit cursor-pointer flex-col gap-3 rounded-xl bg-white p-5 hover:opacity-60"
      style={{ width: width && width }}
      onClick={() => router.push(`/categories/products/productsDetail/${id}`)}
    >
      <Image
        alt="ProductImage"
        src={image}
        style={{ width: imgWidth ? imgWidth : '100%', objectFit: 'contain' }}
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
