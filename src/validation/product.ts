import z from './zod';

export const ProductSchema = z.object({
  categories: z.array(
    z.object({
      id: z.number(),
      nome: z.string(),
      descricao: z.string().optional(),
      imagem: z.string().optional(),
    }),
  ),
  name: z.string().min(1),
  price: z.number().min(1),
  brand: z.string().min(1),
  description: z.string().min(1),
  details: z.string().min(1),
});

export type ProductForm = z.infer<typeof ProductSchema>;
