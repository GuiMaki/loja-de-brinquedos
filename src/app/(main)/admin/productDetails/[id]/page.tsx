'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { ProductsDetails } from '@/assets/Data/ProductsDetails';
import ViewField from '@/components/Pages/(main)/Admin/ViewField';
import CategoryTag from '@/components/Pages/(main)/Categories/CategoryTag';
import Header from '@/components/Pages/(main)/Header';
import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';
import { formatCurrency } from '@/utils/format';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const product = ProductsDetails.find(product => product.id === id);

  return (
    <div className="flex h-screen flex-col">
      <Header canGoBack page="Admin" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <div className="flex gap-3">
            <div
              className="hover:bg-neutral-20 h-fit cursor-pointer rounded-full hover:opacity-60"
              onClick={() => router.back()}
            >
              <Icon fill={colors.neutral[80]} name="ArrowIcon" size={32} />
            </div>

            <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
              Detalhes do produto - {id}
            </span>
          </div>

          <div
            className="bg-primary-60 flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2 hover:opacity-60"
            onClick={() => router.push(`/admin/editProduct/${id}`)}
          >
            <span className="font-roboto text-xl font-medium text-white">
              Editar produto
            </span>

            <Icon color={colors.neutral.white} name="EditIcon" size={24} />
          </div>
        </div>

        <div className="flex h-full flex-grow gap-5 px-3 pt-3">
          <div className="flex w-fit flex-col gap-3 p-3">
            <span className="text-neutral-60 font-roboto text-xl font-normal">
              Imagens
            </span>

            <div className="grid grid-cols-2 gap-3">
              {product?.data.images.map((image, index) => (
                <div key={index} className="w-fit rounded-xl bg-white p-3">
                  <Image
                    alt="ProductImage"
                    className="object-contain"
                    height={100}
                    src={image}
                    width={100}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 p-3" style={{ width: '64%' }}>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-60 font-roboto text-xl font-normal">
                Categorias
              </span>

              <div className="flex gap-2">
                {product?.categories.map(category => (
                  <CategoryTag
                    key={category.id}
                    disabled
                    id={category.id}
                    label={category.name}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-5">
              <ViewField
                label="Nome do produto"
                value={product?.data.name || ''}
              />

              <ViewField
                label="Valor do produto"
                value={formatCurrency(product?.data.price || 0)}
              />

              <ViewField
                label="Marca do produto"
                value={product?.data.brand || ''}
              />
            </div>

            <div className="flex h-[500px] flex-col gap-5">
              <ViewField
                multiline
                label="Descrição do produto"
                value={product?.data.description || ''}
              />

              <ViewField
                multiline
                label="Detalhes do produto"
                value={product?.data.details || ''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
