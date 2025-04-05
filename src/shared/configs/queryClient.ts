import { QueryClientConfig } from '@tanstack/react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, gcTime: 5 * 60 * 1000, staleTime: 5 * 60 * 1000 },
  },
};
