import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from './menu';
import { Home } from './home';
import { ErrorPage } from './error-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="*"
          element={<ErrorPage message="404: Page not found!" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
