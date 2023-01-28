import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Pages/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="postifytheme" className='bg-gray-200'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
