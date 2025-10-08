import { useQuery } from '@tanstack/react-query';

import { IProductsData } from '@/interface/products';

import { http } from '../http';

export type ProductParams = {
  nome?: string;
  marcas?: string;
  minValor?: number;
  maxValor?: number;
};

export const useGetProductsByCategory = (params: ProductParams) => {
  const getProductsByCategory = async () => {
    const { data } = await http.get<IProductsData[]>('brinquedos/search', {
      params,
    });

    return data;
  };

  return useQuery({
    queryKey: ['category_data', params],
    queryFn: getProductsByCategory,
  });
};

export const useGetProducts = () => {
  const getProducts = async () => {
    const { data } = await http.get<IProductsData[]>('brinquedos');

    return data;
  };

  return useQuery({
    queryKey: ['category_data'],
    queryFn: getProducts,
  });
};

export const useGetHighlightedProducts = () => {
  const getHighlightedProducts = async () => {
    const { data } = await http.get<IProductsData[]>('brinquedos');

    return data;
  };

  return useQuery({
    queryKey: ['category_data'],
    queryFn: getHighlightedProducts,
  });
};
