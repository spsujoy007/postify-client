import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Pages/Routes/Routes';

function App() {
  return (
    <div data-theme="postifytheme">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
