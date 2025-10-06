'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import CategoriesModal from '@/components/Pages/(main)/Admin/CategoriesModal';
import Header from '@/components/Pages/(main)/Header';
import CurrencyInput from '@/components/UI/CurrencyInput';
import Icon from '@/components/UI/Icon';
import Input from '@/components/UI/Input';
import { useDefaultModal } from '@/contexts/defaultModalContext';
import colors from '@/global/colors';
import { ProductForm, ProductSchema } from '@/validation/product';

const AddProduct = () => {
  const router = useRouter();
  const { openModal, closeModal } = useDefaultModal();

  const [modalOpen, setModalOpen] = useState(false);
  const [hasCategory, setHasCategory] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    [],
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { handleSubmit, control, setValue } = useForm<ProductForm>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      category: [],
      name: '',
      price: 0,
      brand: '',
      description: '',
      details: '',
    },
  });

  useEffect(() => {
    setValue('category', categories);
  }, [categories, setValue]);

  const onSubmit = (data: ProductForm) => {
    console.log('Dados do produto:', data);
    console.log('Imagens:', images);

    openModal({
      type: 'success',
      title: 'Sucesso!',
      message: 'Produto cadastrado com sucesso!',
      confirmText: 'Voltar',
      onConfirm: () => router.back(),
    });
  };

  const handleCancel = () => {
    openModal({
      type: 'alert',
      title: 'Voltar',
      message: 'Tem certeza que deseja voltar?',
      notice: 'Essa ação não poderá ser desfeita. Os dados não serão salvas.',
      confirmText: 'Voltar',
      onConfirm: () => router.back(),
      cancelText: 'Cancelar',
      onCancel: closeModal,
    });
  };

  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
      return;
    }

    const newImages = Array.from(files).map(file => URL.createObjectURL(file));

    setImages(prev => [...prev, ...newImages]);

    event.target.value = '';
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveCategory = (categoryId: string) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
  };

  const handleSave = () => {
    if (categories.length === 0) {
      setHasCategory(false);
      return;
    }

    setHasCategory(true);
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <div className="flex h-screen flex-col">
        <Header canGoBack page="Admin" />

        <div className="flex flex-1 flex-col gap-8 px-6 py-8">
          <div className="flex justify-between p-3">
            <div className="flex gap-3">
              <div
                className="hover:bg-neutral-20 h-fit cursor-pointer rounded-full hover:opacity-60"
                onClick={handleCancel}
              >
                <Icon fill={colors.neutral[80]} name="ArrowIcon" size={32} />
              </div>

              <span className="text-neutral-80 flex font-lexend text-2xl font-medium">
                Cadastrar produto
              </span>
            </div>

            <div className="flex gap-3">
              <div
                className="bg-neutral-20 flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2 hover:opacity-60"
                onClick={handleCancel}
              >
                <span className="font-roboto text-xl font-medium text-white">
                  Cancelar
                </span>
              </div>

              <div
                className="bg-primary-60 flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2 hover:opacity-60"
                onClick={handleSave}
              >
                <span className="font-roboto text-xl font-medium text-white">
                  Salvar
                </span>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-grow gap-5 px-3 pt-3">
            <div className="flex w-fit flex-col gap-6 p-3">
              <span className="text-neutral-60 font-roboto text-xl font-normal">
                Imagens
              </span>

              <div className="flex w-[284px] flex-col gap-3">
                {images.length > 0 ? (
                  images.map((image, index) => (
                    <div
                      key={index}
                      className="flex w-full items-center justify-between"
                    >
                      <span className="text-neutral-40 truncate font-roboto text-xl font-normal">
                        {image}
                      </span>

                      <div
                        className="hover:bg-neutral-20 cursor-pointer rounded-full p-2 hover:opacity-60"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <Icon
                          color={colors.neutral[40]}
                          name="XIcon"
                          size={16}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <span className="text-neutral-40 text-center font-roboto text-base font-light">
                    Nenhuma imagem adicionada
                  </span>
                )}
              </div>

              <div
                className="bg-primary-100 flex cursor-pointer items-center justify-center gap-3 rounded-full px-3 py-2 hover:opacity-60"
                onClick={() => fileInputRef.current?.click()}
              >
                <span className="font-lexend text-xl font-normal text-white">
                  Carregar imagem
                </span>

                <Icon fill={colors.neutral.white} name="UploadIcon" size={24} />
              </div>

              <input
                ref={fileInputRef}
                multiple
                accept="image/*"
                className="hidden"
                type="file"
                onChange={handleAddImages}
              />
            </div>

            <div className="flex flex-col gap-5 p-3" style={{ width: '64%' }}>
              <div className="flex flex-col gap-1">
                <span className="text-neutral-60 font-roboto text-xl font-normal">
                  Categorias
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  {categories.map(category => (
                    <div
                      key={category.id}
                      className="bg-neutral-20 flex items-center gap-3 rounded-xl px-3 py-2"
                    >
                      <span className="cursor-default">{category.name}</span>

                      <div
                        className="cursor-pointer hover:opacity-60"
                        onClick={() => handleRemoveCategory(category.id)}
                      >
                        <Icon
                          color={colors.neutral[80]}
                          name="XIcon"
                          size={16}
                        />
                      </div>
                    </div>
                  ))}

                  <div
                    className="flex cursor-pointer gap-2 hover:opacity-60"
                    onClick={() => setModalOpen(true)}
                  >
                    <span className="text-neutral-80 font-roboto text-base font-normal">
                      Adicionar categoria
                    </span>

                    <Icon fill={colors.neutral[80]} name="AddIcon" size={24} />
                  </div>
                </div>

                {!hasCategory && (
                  <span className="text-alert-error-primary font-roboto text-sm font-light">
                    selecione uma categoria para continuar
                  </span>
                )}
              </div>

              <div className="flex gap-5">
                <Input
                  control={control}
                  label="Nome do produto"
                  name="name"
                  placeholder="Insira o nome do produto"
                />

                <CurrencyInput
                  control={control}
                  label="Valor do produto"
                  name="price"
                  placeholder="Insira o valor do produto"
                />

                <Input
                  control={control}
                  label="Marca do produto"
                  name="brand"
                  placeholder="Insira a marca do produto"
                />
              </div>

              <div className="flex h-[500px] flex-col gap-5">
                <Input
                  multiline
                  control={control}
                  label="Descrição do produto"
                  name="description"
                  placeholder="Insira a descrição do produto"
                />

                <Input
                  multiline
                  control={control}
                  label="Detalhes do produto"
                  name="details"
                  placeholder="Insira os detalhes do produto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoriesModal
        isOpen={modalOpen}
        selectedCategories={categories}
        setCategories={setCategories}
        onCancel={() => setModalOpen(false)}
      />
    </>
  );
};

export default AddProduct;
