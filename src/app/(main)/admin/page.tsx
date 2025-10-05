'use client';

import Header from '@/components/Pages/(main)/Home/Header';

const Admin = () => {
  return (
    <div className="flex-1">
      <Header page="Admin" />

      <div className="flex flex-col px-6 py-8">
        <div className="flex p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos cadastrados
          </span>
        </div>
      </div>
    </div>
  );
};

export default Admin;
