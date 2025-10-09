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
    const { data } = await http.get<IProductsData[]>(
      'brinquedos/mais-acessados',
    );

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

export type ProductForm = {
  id: string;
  nome: string;
  valor: string;
  marca: string;
  descricao: string;
  detalhes: string;
  categoriaIds: number[];
};

export const useEditProduct = () => {
  const queryClient = useQueryClient();

  const editProduct = async ({
    nome,
    descricao,
    detalhes,
    marca,
    valor,
    categoriaIds,
    id,
  }: ProductForm) => {
    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('valor', String(valor));
    formData.append('marca', marca);
    formData.append('descricao', descricao);
    formData.append('detalhes', detalhes);
    categoriaIds.forEach(id => {
      formData.append('categoriaIds', String(id));
    });

    await http.put(`brinquedos/${id}`, formData);
  };

  return useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products_data'] });
      queryClient.invalidateQueries({ queryKey: ['product_details'] });
    },
  });
};

export const useDeleteProductsImage = () => {
  const queryClient = useQueryClient();

  const deleteProductsImage = async (id: string) => {
    await http.delete(`brinquedos/${id}/imagens`);
  };

  return useMutation({
    mutationFn: deleteProductsImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product_details'] });
    },
  });
};

export type ICreateImage = {
  id: string;
  arquivos: File[];
};

export const useCreateProductImage = () => {
  const queryClient = useQueryClient();

  const createProductImage = async ({ id, arquivos }: ICreateImage) => {
    const formData = new FormData();

    arquivos.forEach(file => formData.append('arquivos', file));

    await http.post(`brinquedos/${id}/imagens`, formData);
  };

  return useMutation({
    mutationFn: createProductImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product_details'] });
    },
  });
};

export type ProductFormData = {
  nome: string;
  valor: string;
  marca: string;
  descricao: string;
  detalhes: string;
  categoriaIds: number[];
  imagens: File[];
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const createProduct = async ({
    nome,
    descricao,
    detalhes,
    marca,
    valor,
    categoriaIds,
    imagens,
  }: ProductFormData) => {
    const formData = new FormData();

    formData.append('codigo', '');
    formData.append('nome', nome);
    formData.append('valor', String(valor));
    formData.append('marca', marca);
    formData.append('descricao', descricao);
    formData.append('detalhes', detalhes);
    categoriaIds.forEach(id => {
      formData.append('categoriaIds', String(id));
    });
    imagens.forEach(file => formData.append('imagens', file));

    await http.post(`brinquedos`, formData);
  };

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product_details'] });
    },
  });
};
