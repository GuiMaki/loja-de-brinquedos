import { useRouter } from 'next/navigation';
import { useState } from 'react';

import colors from '@/global/colors';

type CategoryTagProps = {
  label: string;
  id: string;
  disabled?: boolean;
};

const CategoryTag = ({ label, id, disabled = false }: CategoryTagProps) => {
  const router = useRouter();

  const [hover, setHover] = useState(false);

  return (
    <div
      className="border-primary-100 flex w-fit rounded-xl border px-2 py-0.5"
      style={{
        backgroundColor: hover ? colors.primary[100] : 'transparent',
        cursor: disabled ? 'default' : 'pointer',
      }}
      onClick={() =>
        !disabled &&
        router.push(
          `/categories/products/${id}?category=${encodeURIComponent(label)}`,
        )
      }
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => !disabled && setHover(false)}
    >
      <span
        className="text-primary-100 font-roboto text-base font-light"
        style={{ color: hover ? colors.neutral.white : colors.primary[100] }}
      >
        {label}
      </span>
    </div>
  );
};

export default CategoryTag;
