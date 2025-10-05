'use client';

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import DefaultModal from '@/components/UI/DefaultModal';
import { DefaultModalProvider } from '@/contexts/defaultModalContext';
import { handleError } from '@/utils/handleError';

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 20000,
        retry: false,
        initialDataUpdatedAt: 0,
      },
      mutations: {
        onError: err => handleError(err),
      },
    },
    mutationCache: new MutationCache({
      onSuccess: (_data, _variables, _context, mutation) => {
        if (mutation.meta?.invalidateQueries) {
          queryClient.invalidateQueries({
            queryKey: Array.isArray(mutation.meta?.invalidateQueries)
              ? mutation.meta.invalidateQueries
              : [mutation.meta?.invalidateQueries].filter(Boolean),
          });
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultModalProvider>
        {children}

        <DefaultModal />

        <ToastContainer />
      </DefaultModalProvider>
    </QueryClientProvider>
  );
};

export default Providers;
