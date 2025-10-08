'use client';

import { HighlightedProductsData } from '@/assets/Data/HighlightedProducts';
import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import ProductCard from '@/components/Pages/(main)/Home/ProductCard';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header page="Home" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos em destaque
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {HighlightedProductsData.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={null}
              name={product.name}
              price={product.price}
              rateAmmount={product.rateAmmount}
              rating={product.rating}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
