import Image from 'next/image';

import { DefaultImg } from '@/../public/Images';

type PersonCardProps = {
  image: typeof DefaultImg;
  name: string;
  RA: string;
};

const PersonCard = ({ RA, image, name }: PersonCardProps) => {
  return (
    <div className="flex flex-1 cursor-default flex-col items-center justify-start gap-4">
      <Image
        alt="image"
        src={image}
        style={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: 9999,
          aspectRatio: 1,
        }}
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-primary-100 text-center font-lexend text-2xl font-semibold">
          {name}
        </span>

        <span className="text-primary-100 font-lexend text-2xl font-semibold">
          RA: {RA}
        </span>
      </div>
    </div>
  );
};

export default PersonCard;
