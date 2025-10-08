import Image from 'next/image';
import React, { useState } from 'react';

import DefaultModalBackdrop from '@/components/UI/DefaultModal/DefaultModalBackdrop';
import Icon from '@/components/UI/Icon';
import colors from '@/global/colors';
import { Imagen } from '@/interface/products';

type ImageModalProps = {
  isOpen: boolean;
  onBackdropPress: () => void;
  images: Imagen[];
  toyName: string;
};

const ImageModal = ({
  isOpen,
  onBackdropPress,
  images,
  toyName,
}: ImageModalProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <DefaultModalBackdrop onPress={onBackdropPress}>
      <dialog
        className="relative flex flex-col gap-5 overflow-hidden rounded-lg bg-white p-5"
        onClick={handleBackdropClick}
      >
        <div className="border-primary-100 flex items-center justify-between border-b py-2">
          <span className="text-primary-100 cursor-default font-lexend text-xl font-medium">
            Imagens
          </span>

          <div className="cursor-pointer" onClick={onBackdropPress}>
            <Icon color={colors.primary[100]} name="XIcon" size={16} />
          </div>
        </div>

        <div className="flex gap-8">
          <Image
            alt="ProductImage"
            className="object-contain"
            height={500}
            src={images[selectedIndex].caminho}
            width={500}
          />

          <div className="flex flex-col gap-3">
            <span className="text-neutral-80 font-roboto text-2xl font-semibold">
              {toyName}
            </span>

            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-xl p-3 hover:${isSelected ? 'opacity-100' : 'opacity-60'}`}
                    style={{
                      backgroundColor: isSelected
                        ? colors.secondary[60]
                        : colors.primary[40],
                    }}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      alt="ProductImage"
                      className="object-contain"
                      height={68}
                      src={img.caminho}
                      width={68}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </dialog>
    </DefaultModalBackdrop>
  );
};

export default ImageModal;
