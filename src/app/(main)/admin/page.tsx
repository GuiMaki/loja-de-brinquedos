'use client';

import { useState } from 'react';

import { ProductsDetails } from '@/assets/Data/ProductsDetails';
import ListHeader from '@/components/Pages/(main)/Admin/ListHeader';
import ProductListItem from '@/components/Pages/(main)/Admin/ProductListItem';
import Header from '@/components/Pages/(main)/Header';
import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';

const ITEMS_PER_PAGE = 10;

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ProductsDetails.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProducts = ProductsDetails.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const text = `Página ${currentPage} de ${totalPages}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Header page="Admin" />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos cadastrados
          </span>

          <div className="bg-primary-60 flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2 hover:opacity-60">
            <span className="font-roboto text-xl font-medium text-white">
              Adicionar brinquedo
            </span>

            <Icon fill={colors.neutral.white} name="AddIcon" size={24} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <ListHeader />

          <div className="flex flex-col gap-4">
            {currentProducts.map(product => {
              const categoryNames = product.categories.map(
                category => category.name,
              );

              return (
                <ProductListItem
                  key={product.id}
                  categories={categoryNames}
                  description={product.data.description}
                  id={product.id}
                  name={product.data.name}
                  price={product.data.price}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              className="rounded-lg px-4 py-2 font-roboto text-lg font-medium text-white"
              disabled={currentPage === 1}
              style={{
                backgroundColor:
                  currentPage === 1 ? colors.neutral[20] : colors.primary[60],
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              }}
              onClick={handlePrevPage}
            >
              Anterior
            </button>

            <span className="text-neutral-80 cursor-default font-roboto text-lg font-medium">
              {text}
            </span>

            <button
              className="rounded-lg px-4 py-2 font-roboto text-lg font-medium text-white"
              disabled={currentPage === totalPages}
              style={{
                backgroundColor:
                  currentPage === totalPages
                    ? colors.neutral[20]
                    : colors.primary[60],
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              }}
              onClick={handleNextPage}
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
