import { useQuery } from '@tanstack/react-query';

import { ICategorie } from '@/interface/categories';

import { http } from '../http';

export const useGetCategories = (nome: string) => {
  const getCategories = async () => {
    const { data } = await http.get<ICategorie[]>('categorias/search', {
      params: { nome },
    });

    return data;
  };

  return useQuery({
    queryKey: ['category_data', nome],
    queryFn: getCategories,
  });
};
