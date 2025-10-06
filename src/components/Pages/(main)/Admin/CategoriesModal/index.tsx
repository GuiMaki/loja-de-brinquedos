'use client';

import React from 'react';

import { CategoriesData } from '@/assets/Data/Categories';
import DefaultModalBackdrop from '@/components/UI/DefaultModal/DefaultModalBackdrop';
import DefaultModalFooter from '@/components/UI/DefaultModal/DefaultModalFooter';
import DefaultModalHeader from '@/components/UI/DefaultModal/DefaultModalHeader';
import LabelCheckbox from '@/components/UI/LabelCheckbox';

export type Category = { id: string; name: string };

type CategoryModalProps = {
  isOpen: boolean;
  selectedCategories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  onCancel: () => void;
};

const CategoriesModal = ({
  selectedCategories,
  setCategories,
  onCancel,
  isOpen,
}: CategoryModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleToggleCategory = (category: Category) => {
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
            {CategoriesData.map(category => {
              const selected = selectedCategories.some(
                c => c.id === category.id,
              );
              return (
                <LabelCheckbox
                  key={category.id}
                  label={category.name}
                  selected={selected}
                  onPress={() => handleToggleCategory(category)}
                />
              );
            })}
          </div>
        </div>

        <DefaultModalFooter
          cancelText="Voltar"
          confirmText="Confirmar"
          handleCancel={onCancel}
          handleConfirm={onCancel}
          type="custom"
        />
      </dialog>
    </DefaultModalBackdrop>
  );
};

export default CategoriesModal;
