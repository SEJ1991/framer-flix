import { BrowserRouter, Route, Routes } from 'react-router';
import { ComingSoonMoviesPage, HomePage, NowPlayingMoviesPage, PopularMoviesPage } from './pages';
import { RootLayout } from './layouts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientConfig } from './shared/configs/queryClient';
import { ScrollToTop } from './shared/components';
import GlobalStyle from './shared/styles/GlobalStyle';

const client = new QueryClient(queryClientConfig);

function App() {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/popular' element={<PopularMoviesPage />} />
            <Route path='/coming-soon' element={<ComingSoonMoviesPage />} />
            <Route path='/now-playing' element={<NowPlayingMoviesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
