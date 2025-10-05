'use client';

import { useState } from 'react';

import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';
import SearchBar from '@/components/UI/SearchBar';

const Categories = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex min-h-screen flex-col">
      <Header page="Categories" />

      <div className="flex flex-1 flex-col px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Categorias
          </span>

          <SearchBar
            placeholder="Pesquise pelo nome da categoria"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
