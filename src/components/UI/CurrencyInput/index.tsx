'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import { Control, Controller, useController } from 'react-hook-form';

import colors from '@/global/colors';

type CurrencyInputProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label?: string;
  placeholder?: string;
};

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ name, control, label, placeholder }, ref) => {
    const [rawValue, setRawValue] = useState<string>('0');

    const {
      fieldState: { error },
    } = useController({
      control,
      name,
    });

    const formatCurrency = (value: string) => {
      const numeric = parseInt(value || '0', 10);
      const reais = Math.floor(numeric / 100);
      const centavos = numeric % 100;

      return `R$ ${reais.toString().padStart(2, '0')},${centavos
        .toString()
        .padStart(2, '0')}`;
    };

    const centavosToDecimal = (centavos: string) => {
      const numeric = parseInt(centavos || '0', 10);
      return numeric / 100;
    };

    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          // ✅ Inicializa o valor inicial de forma segura
          useEffect(() => {
            if (field.value && rawValue === '0') {
              const valueInCentavos = Math.round(field.value * 100);
              setRawValue(valueInCentavos.toString());
            }
          }, [field.value, rawValue]);

          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const onlyDigits = e.target.value.replace(/\D/g, '');
            const newValue = onlyDigits === '' ? '0' : onlyDigits;

            setRawValue(newValue);
            field.onChange(centavosToDecimal(newValue));
          };

          return (
            <div className="flex w-full flex-col">
              {label && (
                <span className="text-neutral-60 font-roboto text-xl font-normal">
                  {label}
                </span>
              )}

              <div
                className="relative items-center overflow-hidden rounded-lg border bg-white"
                style={{
                  borderColor: error?.message
                    ? colors.alert.error.primary
                    : colors.neutral[40],
                }}
              >
                <input
                  ref={ref}
                  className="text-neutral-80 placeholder:text-neutral-20 w-full p-2 text-lg focus-within:outline-none"
                  placeholder={placeholder || 'R$ 00,00'}
                  value={formatCurrency(rawValue)}
                  onChange={handleChange}
                />
              </div>

              {error?.message && (
                <span className="text-alert-error-primary font-roboto text-xs font-normal">
                  {error.message}
                </span>
              )}
            </div>
          );
        }}
      />
    );
  },
);

CurrencyInput.displayName = 'CurrencyInput';

export default CurrencyInput;
