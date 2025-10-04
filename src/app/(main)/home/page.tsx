'use client';

import { useState } from 'react';

import Header from '@/components/Global/Header';
import LabelCheckbox from '@/components/UI/LabelCheckbox';

const Home = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex-1">
      <Header />

      <LabelCheckbox
        label="teste"
        selected={selected}
        onPress={() => setSelected(!selected)}
      />
    </div>
  );
};

export default Home;
