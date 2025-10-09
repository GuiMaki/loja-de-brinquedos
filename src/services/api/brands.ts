import { useQuery } from '@tanstack/react-query';

import { http } from '../http';

export const useGetBrands = () => {
  const getBrands = async () => {
    const { data } = await http.get<string[]>('brinquedos/marcas');

    return data;
  };

  return useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });
};
