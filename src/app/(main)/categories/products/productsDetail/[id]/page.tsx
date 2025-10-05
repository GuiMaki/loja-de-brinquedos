'use client';

import { useParams } from 'next/navigation';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  return <span>{id}</span>;
};

export default ProductDetail;
