'use client';

import { InputHTMLAttributes, useState } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import colors from '@/global/colors';

import Icon, { IconProps } from '../Icon';

type Props<TFieldValues extends FieldValues> = {
  label?: string;
  password?: boolean;
  placeholder?: string;
  leftIcon?: IconProps;
  mask?: string;
  multiline?: boolean; // nova prop
} & UseControllerProps<TFieldValues> &
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const Input = <TFieldValues extends FieldValues>({
  label,
  password,
  placeholder,
  leftIcon,
  mask,
  multiline = false, // padrão false
  control,
  name,
  ...props
}: Props<TFieldValues>) => {
  const [passwordHidden, setPasswordHidden] = useState(password);

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  const inputStyle = {
    paddingLeft: leftIcon ? 40 : 12,
    paddingRight: password ? 44 : undefined,
    height: multiline ? '100%' : undefined,
  };

  return (
    <div className="flex h-full w-full flex-col gap-1">
      {label && (
        <span className="text-neutral-60 font-roboto text-xl font-normal">
          {label}
        </span>
      )}

      <div className="relative h-full flex-1 gap-px">
        <div
          className={`relative overflow-hidden rounded-lg border bg-white ${
            multiline ? 'h-full' : ''
          }`}
          style={{
            borderColor: error?.message
              ? colors.alert.error.primary
              : colors.neutral[40],
          }}
        >
          {mask ? (
            <IMaskInput
              ref={field.ref}
              className="text-neutral-80 placeholder:text-neutral-20 w-full p-2 text-lg focus-within:outline-none"
              id={name}
              mask={mask}
              placeholder={placeholder}
              style={inputStyle}
              type={passwordHidden ? 'password' : 'text'}
              value={field.value ?? ''}
              onBlur={field.onBlur}
              onChange={field.onChange}
            />
          ) : multiline ? (
            <textarea
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ref={field.ref as any}
              className="text-neutral-80 placeholder:text-neutral-20 w-full resize-none overflow-auto p-2 text-lg focus-within:outline-none"
              id={name}
              placeholder={placeholder}
              style={inputStyle}
              value={field.value ?? ''}
              onBlur={field.onBlur}
              onChange={field.onChange}
              {...props}
            />
          ) : (
            <input
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ref={field.ref as any}
              className="text-neutral-80 placeholder:text-neutral-20 w-full p-2 text-lg focus-within:outline-none"
              id={name}
              placeholder={placeholder}
              style={inputStyle}
              type={passwordHidden ? 'password' : 'text'}
              value={field.value ?? ''}
              onBlur={field.onBlur}
              onChange={field.onChange}
              {...props}
            />
          )}

          {leftIcon && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <Icon {...leftIcon} />
            </div>
          )}

          {password && (
            <button
              aria-label={passwordHidden ? 'Show password' : 'Hide password'}
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 hover:bg-black/5"
              type="button"
              onClick={() => setPasswordHidden(!passwordHidden)}
            >
              <Icon
                color={
                  passwordHidden ? colors.neutral[40] : colors.primary[100]
                }
                fill={passwordHidden ? colors.neutral[40] : colors.primary[100]}
                name="EyeIcon"
              />
            </button>
          )}
        </div>

        {error?.message && (
          <span className="text-alert-error-primary font-roboto text-xs font-normal">
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
