export type IProductsData = {
  id: number;
  codigo: string;
  nome: string;
  valor: number;
  marca: string;
  descricao: string;
  detalhes: string;
  categorias: Categoria[];
  imagens: Imagen[];
  views: number;
};

export type Categoria = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export type Imagen = {
  id: number;
  caminho: string;
  publicId: string;
};
