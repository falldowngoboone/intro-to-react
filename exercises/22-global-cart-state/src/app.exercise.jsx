import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from './screens/menu';
import { Home } from './screens/home';
import { ErrorPage } from './screens/error-page';
import { GlobalLayout } from './lib/shared-components/global-layout';
import { ProductDetail } from './screens/product-detail';

function App() {
  // 👋 Move cart state here

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GlobalLayout />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<ProductDetail />} />
          <Route
            path="*"
            element={<ErrorPage message="404: Page not found!" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
