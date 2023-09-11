import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import { v4 } from 'uuid';
import { Home } from './pages';

function App() {
  return (
    <div className='App bg-[#000B23] h-screen overflow-hidden'>
      <div className='max-w-[390px] h-full mx-auto'>
        <Routes>
          {routes?.map(({ path, element: Component }) => (
            <Route key={v4()} path={path} element={<Component />} />
          ))}
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
