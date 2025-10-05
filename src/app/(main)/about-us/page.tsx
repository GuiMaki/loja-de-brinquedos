'use client';

import Header from '@/Components/Pages/(main)/Header';

const AboutUs = () => {
  return (
    <div className="flex-1">
      <Header page="AboutUs" />

      <div className="flex flex-col px-6 py-8">
        <div className="flex p-3">
          <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
            Equipe
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
