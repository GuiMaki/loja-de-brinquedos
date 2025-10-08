import { useQuery } from '@tanstack/react-query';

import { http } from '../http';

export type ICategorie = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

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
