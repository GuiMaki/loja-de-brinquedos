import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import DefaultModalBackdrop from '@/components/UI/DefaultModal/DefaultModalBackdrop';
import DefaultModalFooter from '@/components/UI/DefaultModal/DefaultModalFooter';
import DefaultModalHeader from '@/components/UI/DefaultModal/DefaultModalHeader';
import Input from '@/components/UI/Input';
import { LoginSchema, LoginForm as ZLoginForm } from '@/validation/login';

type LoginModalProps = {
  isOpen: boolean;
  onCancel: () => void;
};

const LoginModal = ({ isOpen, onCancel }: LoginModalProps) => {
  const router = useRouter();

  const { handleSubmit, control } = useForm<ZLoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (!isOpen) {
    return null;
  }

  const onSubmit = () => {
    router.replace('/admin');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <DefaultModalBackdrop>
      <dialog
        className="relative z-20 flex w-[460px] flex-col overflow-hidden rounded-lg bg-white"
        onClick={handleBackdropClick}
      >
        <DefaultModalHeader title="Credenciais necessárias" type="alert" />

        <div className="flex flex-col gap-4 p-4">
          <span className="text-neutral-60 font-lexend text-xl font-light">
            Insira as credenciais de administrador para acessar a página
          </span>

          <Input
            control={control}
            label="E-mail"
            name="email"
            placeholder="Insira o email"
          />

          <Input
            password
            control={control}
            label="Senha"
            name="password"
            placeholder="Insira a senha"
          />
        </div>

        <DefaultModalFooter
          cancelText="Voltar"
          confirmText="Continuar"
          handleCancel={onCancel}
          handleConfirm={handleSubmit(onSubmit)}
          type="alert"
        />
      </dialog>
    </DefaultModalBackdrop>
  );
};

export default LoginModal;
