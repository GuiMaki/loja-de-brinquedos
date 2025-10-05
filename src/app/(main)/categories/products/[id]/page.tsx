'use client';

import { useParams } from 'next/navigation';

const Products = () => {
  const { id } = useParams<{ id: string }>();

  return <span>{id}</span>;
};

export default Products;
