'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import ViewField from '@/components/Pages/(main)/Admin/ViewField';
import CategoryTag from '@/components/Pages/(main)/Categories/CategoryTag';
import Header from '@/components/Pages/(main)/Header';
import Icon from '@/components/UI/Icon';
import Loader from '@/components/UI/Loader';
import colors from '@/global/colors';
import { useGetProductDetailById } from '@/services/api/products';
import { formatCurrency } from '@/utils/format';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { data, isFetching } = useGetProductDetailById(id);

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

        {isFetching ? (
          <div className="flex h-full items-center justify-center">
            <Loader color={colors.primary[100]} size={60} />
          </div>
        ) : (
          <div className="flex h-full flex-grow gap-5 px-3 pt-3">
            {/* Imagens */}
            <div className="flex w-fit flex-col gap-3 p-3">
              <span className="text-neutral-60 font-roboto text-xl font-normal">
                Imagens
              </span>

              {data?.brinquedo.imagens?.length ? (
                <div className="grid grid-cols-2 gap-3">
                  {data.brinquedo.imagens.map((image, index) => (
                    <div key={index} className="w-fit rounded-xl bg-white p-3">
                      <Image
                        alt="ProductImage"
                        className="object-contain"
                        height={100}
                        src={image.caminho}
                        width={100}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-neutral-40">
                  Nenhuma imagem cadastrada
                </span>
              )}
            </div>

            {/* Detalhes */}
            <div className="flex flex-col gap-5 p-3" style={{ width: '64%' }}>
              <div className="flex flex-col gap-1">
                <span className="text-neutral-60 font-roboto text-xl font-normal">
                  Categorias
                </span>

                <div className="flex flex-wrap gap-2">
                  {data?.brinquedo.categorias?.length ? (
                    data.brinquedo.categorias.map(category => (
                      <CategoryTag
                        key={category.id}
                        disabled
                        id={String(category.id)}
                        label={category.nome}
                      />
                    ))
                  ) : (
                    <span className="text-neutral-40">
                      Nenhuma categoria vinculada
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <ViewField
                  label="Nome do produto"
                  value={data?.brinquedo.nome || ''}
                />

                <ViewField
                  label="Valor do produto"
                  value={formatCurrency(data?.brinquedo.valor || 0)}
                />

                <ViewField
                  label="Marca do produto"
                  value={data?.brinquedo.marca || ''}
                />
              </div>

              <div className="flex h-[500px] flex-col gap-5">
                <ViewField
                  multiline
                  label="Descrição do produto"
                  value={data?.brinquedo.descricao || ''}
                />

                <ViewField
                  multiline
                  label="Detalhes do produto"
                  value={data?.brinquedo.detalhes || ''}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
