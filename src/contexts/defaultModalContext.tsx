'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type DefaultModalProps = {
  title: string;
  message: string;
  confirmText: string;
  notice?: string;
  onConfirm?: () => void | Promise<void>;
  cancelText?: string;
  onCancel?: () => void | Promise<void>;
  successMessage?: string;
  type: 'warning' | 'alert' | 'success';
};

type ProviderProps = {
  modal: DefaultModalProps | null;
  // eslint-disable-next-line no-unused-vars
  openModal: (props: DefaultModalProps) => void;
  closeModal: () => void;
};

const DefaultModalContext = createContext({} as ProviderProps);

export const DefaultModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<DefaultModalProps | null>(null);

  const openModal = (props: DefaultModalProps) => {
    setModal(props);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <DefaultModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </DefaultModalContext.Provider>
  );
};

export const useDefaultModal = () => useContext(DefaultModalContext);
