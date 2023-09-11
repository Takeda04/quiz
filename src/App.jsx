import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import { v4 } from 'uuid';
import { Home } from './pages';

function App() {
  return (
    <div className='App bg-[#000B23] min-h-screen h-full overflow-x-hidden'>
      <div className='max-w-[390px] min-h-screen h-full mx-auto'>
        <Routes>
          <Route path='*' element={<Home />} />
          {routes.map(({ path, element: Component }) => (
            <Route key={v4()} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
