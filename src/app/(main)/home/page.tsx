'use client';

import { useState } from 'react';

import Header from '@/components/Pages/(main)/Home/Header';
import SearchBar from '@/components/UI/SearchBar';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex-1">
      <Header />

      <div className="flex flex-col px-6 py-8">
        <div className="flex justify-between p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos em destaque
          </span>

          <SearchBar
            placeholder="Pesquise pelo nome do brinquedo"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
