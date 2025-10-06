import z from './zod';

export const ProductSchema = z.object({
  category: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .array(),
  name: z.string().min(1),
  price: z.number().min(1),
  brand: z.string().min(1),
  description: z.string().min(1),
  details: z.string().min(1),
});

export type ProductForm = z.infer<typeof ProductSchema>;
