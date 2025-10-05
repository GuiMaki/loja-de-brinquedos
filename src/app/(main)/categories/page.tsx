'use client';

import { useState } from 'react';

import Header from '@/components/Pages/(main)/Header';
import SearchBar from '@/components/UI/SearchBar';

const Categories = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex-1">
      <Header page="Categories" />

      <div className="flex flex-col px-6 py-8">
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
    </div>
  );
};

export default Categories;
