'use client';

import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import ProductCard from '@/components/Pages/(main)/Home/ProductCard';
import Loader from '@/components/UI/Loader';
import colors from '@/global/colors';
import { useGetHighlightedProducts } from '@/services/api/products';

const Home = () => {
  const { data, isFetching } = useGetHighlightedProducts();

  return (
    <div className="flex min-h-screen flex-col">
      <Header page="Home" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos em destaque
          </span>
        </div>

        {isFetching ? (
          <div className="flex w-full justify-center">
            <Loader color={colors.primary[100]} size={60} />
          </div>
        ) : data && data.length > 0 ? (
          <div className="flex flex-wrap gap-12">
            {data.map(product => (
              <ProductCard
                key={product.id}
                id={String(product.id)}
                image={product.imagens}
                name={product.nome}
                price={product.valor}
                rateAmmount={product.views}
                rating={4}
                width={280}
              />
            ))}
          </div>
        ) : (
          <span className="text-neutral-60 w-full text-center font-lexend text-2xl font-medium">
            Nenhum brinquedo encontrado
          </span>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
