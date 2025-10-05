'use client';

import Footer from '@/components/Pages/(main)/Footer';
import Header from '@/components/Pages/(main)/Header';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header page="AboutUs" />

      <div className="flex flex-1 flex-col px-6 py-8">
        <div className="flex p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Equipe
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
