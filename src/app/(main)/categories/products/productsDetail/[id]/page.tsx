'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { DefaultImg } from '@/../public/Images';
import CategoryTag from '@/components/Pages/(main)/Categories/CategoryTag';
import ImageModal from '@/components/Pages/(main)/Categories/ImageModal';
import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import ProductCard from '@/components/Pages/(main)/Home/ProductCard';
import RatingStarsCard from '@/components/Pages/(main)/Home/ProductCard/RatingStarCard';
import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';
import { useGetProductDetailById } from '@/services/api/products';
import { formatCurrency, formatRateNumber } from '@/utils/format';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const { data } = useGetProductDetailById(id);

  const randomRating = useMemo(() => Math.floor(Math.random() * 5) + 1, [id]);
  const randomRateAmount = useMemo(
    () => Math.floor(Math.random() * 10000) + 1,
    [id],
  );

  const images =
    data && data.brinquedo.imagens.length > 4
      ? data.brinquedo.imagens.slice(3)
      : data?.brinquedo.imagens;

  const relatedProducts = useMemo(() => {
    if (!data?.relacionados) {
      return [];
    }

    return data.relacionados.map(similarProduct => ({
      ...similarProduct,
      rating: Math.floor(Math.random() * 5) + 1,
      rateAmount: Math.floor(Math.random() * 10000) + 1,
    }));
  }, [data?.relacionados]);

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />

        <div className="flex flex-1 flex-col gap-8 px-6 py-8">
          <div className="flex gap-3 p-3">
            <div
              className="hover:bg-neutral-20 cursor-pointer rounded-full hover:opacity-60"
              onClick={() => router.back()}
            >
              <Icon fill={colors.neutral[80]} name="ArrowIcon" size={32} />
            </div>

            <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
              Detalhes do brinquedo
            </span>
          </div>

          <div className="flex w-fit flex-col justify-center gap-9 self-center p-3">
            <div className="flex gap-9">
              <div className="flex gap-3">
                <div
                  className={`flex flex-col gap-4 ${
                    data && data.brinquedo.imagens.length > 4
                      ? 'justify-between'
                      : 'justify-start'
                  }`}
                >
                  {images?.map((image, index) => {
                    const isSelected = selectedIndex === index;
                    return (
                      <div
                        key={index}
                        className={`flex cursor-pointer rounded-xl p-3 transition-colors duration-300 hover:${
                          isSelected ? 'opacity-100' : 'opacity-60'
                        } items-center justify-center`}
                        style={{
                          backgroundColor: isSelected
                            ? colors.secondary[60]
                            : colors.primary[40],
                          width: 80,
                          height: 80,
                        }}
                        onClick={() => setSelectedIndex(index)}
                      >
                        <Image
                          alt="ProductImage"
                          className="object-contain"
                          height={68}
                          src={image.caminho}
                          width={68}
                        />
                      </div>
                    );
                  })}

                  {data && data.brinquedo.imagens.length > 4 && (
                    <div
                      className="bg-primary-40 flex aspect-square w-full cursor-pointer items-center justify-center rounded-xl hover:opacity-60"
                      onClick={() => setImageModalOpen(true)}
                    >
                      <span className="text-neutral-60 font-roboto text-2xl font-medium">
                        + {data.brinquedo.imagens.length - 4}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex h-[512px] w-[512px] items-center justify-center rounded-xl bg-white p-3">
                  <Image
                    alt="ProductImage"
                    className="object-contain"
                    height={500}
                    src={
                      data?.brinquedo.imagens[selectedIndex].caminho ||
                      DefaultImg
                    }
                    width={500}
                  />
                </div>
              </div>

              <div className="flex w-[600px] flex-col gap-5 py-5">
                <span className="text-neutral-40 font-roboto text-base font-semibold">
                  {data?.brinquedo.codigo}
                </span>

                <div className="flex flex-col gap-2">
                  <span className="text-neutral-80 font-roboto text-2xl font-semibold">
                    {data?.brinquedo.nome}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {data?.brinquedo.categorias.map(category => (
                      <CategoryTag
                        key={category.id}
                        id={String(category.id)}
                        label={category.nome}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-neutral-40 font-roboto text-xs font-medium">
                    {randomRating.toFixed(1)}
                  </span>

                  <RatingStarsCard rating={randomRating} />

                  <span className="text-neutral-40 font-roboto text-xs font-medium">
                    ({formatRateNumber(randomRateAmount)})
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-neutral-80 font-lexend text-2xl font-semibold">
                    Descrição
                  </span>

                  <span className="text-neutral-60 font-roboto text-base font-normal">
                    {data?.brinquedo.descricao}
                  </span>
                </div>

                <span className="text-neutral-80 font-roboto text-2xl font-semibold">
                  {formatCurrency(data?.brinquedo.valor || 0)}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center gap-3">
                <Icon fill={colors.neutral[80]} name="DetailIcon" size={28} />

                <span className="text-neutral-80 font-lexend text-2xl font-semibold">
                  Detalhes do produto
                </span>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: data?.brinquedo.detalhes || '',
                }}
              />
            </div>

            <div className="flex flex-col gap-3 p-3" style={{ width: 1264 }}>
              <div className="flex items-center gap-3">
                <Icon
                  fill={colors.neutral[80]}
                  name="SimiliarProductsIcon"
                  size={28}
                />

                <span className="text-neutral-80 font-lexend text-2xl font-semibold">
                  Produtos semelhantes
                </span>
              </div>

              <div className="custom-scrollbar flex gap-5 overflow-x-auto py-3">
                {relatedProducts.map(similarProduct => (
                  <div key={similarProduct.id} className="flex">
                    <ProductCard
                      id={String(similarProduct.id)}
                      image={similarProduct.imagem}
                      name={similarProduct.nome}
                      price={similarProduct.valor}
                      rateAmmount={similarProduct.rateAmount}
                      rating={similarProduct.rating}
                      width={280}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <ImageModal
        images={data?.brinquedo.imagens || []}
        isOpen={imageModalOpen}
        toyName={data?.brinquedo.nome || ''}
        onBackdropPress={() => setImageModalOpen(false)}
      />
    </>
  );
};

export default ProductDetail;
