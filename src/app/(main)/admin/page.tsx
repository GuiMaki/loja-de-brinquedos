'use client';

import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';

const Admin = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header page="Admin" />

      <div className="flex flex-1 flex-col px-6 py-8">
        <div className="flex p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Brinquedos cadastrados
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
