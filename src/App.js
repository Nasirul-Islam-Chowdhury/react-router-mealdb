import './App.css';
import {RouterProvider} from 'react-router-dom'
import { router } from './components/routes/Routes';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
