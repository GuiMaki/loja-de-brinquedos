import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { IProductDetailResponse, IProductsData } from '@/interface/products';

import { http } from '../http';

export type ProductParams = {
  nome?: string;
  marcas?: string;
  minValor?: number;
  maxValor?: number;
};

export const useGetProductsByCategory = (id: string, params: ProductParams) => {
  const getProductsByCategory = async () => {
    const { data } = await http.get<IProductsData[]>(
      `brinquedos/categoria/${id}`,
      {
        params,
      },
    );

    return data;
  };

  return useQuery({
    queryKey: ['products_by_category', id, params],
    queryFn: getProductsByCategory,
  });
};

export const useGetProducts = () => {
  const getProducts = async () => {
    const { data } = await http.get<IProductsData[]>('brinquedos');

    return data;
  };

  return useQuery({
    queryKey: ['products_data'],
    queryFn: getProducts,
  });
};

export const useGetHighlightedProducts = () => {
  const getHighlightedProducts = async () => {
    const { data } = await http.get<IProductsData[]>('brinquedos');

    return data;
  };

  return useQuery({
    queryKey: ['products_highlighted'],
    queryFn: getHighlightedProducts,
  });
};

export const useGetProductDetailById = (id: string) => {
  const getProductDetailById = async () => {
    const { data } = await http.get<IProductDetailResponse>(`brinquedos/${id}`);

    return data;
  };

  return useQuery({
    queryKey: ['product_details', id],
    queryFn: getProductDetailById,
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteProduct = async (id: string) => {
    await http.delete(`brinquedos/${id}`);
  };

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products_data'] });
    },
  });
};
