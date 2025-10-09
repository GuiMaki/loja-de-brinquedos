'use client';

import React from 'react';

import DefaultModalBackdrop from '@/components/UI/DefaultModal/DefaultModalBackdrop';
import DefaultModalFooter from '@/components/UI/DefaultModal/DefaultModalFooter';
import DefaultModalHeader from '@/components/UI/DefaultModal/DefaultModalHeader';
import LabelCheckbox from '@/components/UI/LabelCheckbox';
import { Categoria } from '@/interface/products';
import { useGetAllCategories } from '@/services/api/categories';

type CategoryModalProps = {
  isOpen: boolean;
  selectedCategories: Categoria[];
  setCategories: React.Dispatch<React.SetStateAction<Categoria[]>>;
  onCancel: () => void;
};

const CategoriesModal = ({
  selectedCategories,
  setCategories,
  onCancel,
  isOpen,
}: CategoryModalProps) => {
  const { data } = useGetAllCategories();

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleToggleCategory = (category: Categoria) => {
    setCategories(prev => {
      const exists = prev.some(c => c.id === category.id);
      if (exists) {
        return prev.filter(c => c.id !== category.id);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <DefaultModalBackdrop>
      <dialog
        className="relative z-20 flex w-[460px] flex-col overflow-hidden rounded-lg bg-white"
        onClick={handleBackdropClick}
      >
        <DefaultModalHeader title="Selecionar categorias" type="custom" />

        <div className="flex h-[200px] flex-col gap-4 overflow-y-auto p-4">
          <span className="text-neutral-60 font-lexend text-xl font-light">
            Selecione as categorias desejadas
          </span>

          <div className="flex flex-col gap-2 px-3">
            {data?.map(category => {
              const selected = selectedCategories.some(
                c => c.id === category.id,
              );
              return (
                <LabelCheckbox
                  key={category.id}
                  label={category.nome}
                  selected={selected}
                  onPress={() => handleToggleCategory(category)}
                />
              );
            })}
          </div>
        </div>

        <DefaultModalFooter
          confirmText="Confirmar"
          handleConfirm={onCancel}
          type="custom"
        />
      </dialog>
    </DefaultModalBackdrop>
  );
};

export default CategoriesModal;
