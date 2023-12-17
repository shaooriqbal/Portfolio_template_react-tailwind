import './App.css';
import { createBrowserRouter , createRoutesFromElements ,Route, RouterProvider } from 'react-router-dom';
import NotesComponent from './components/Notes';
import CreateComponent from './components/Create';
import HomeComponent from './components/Home';


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeComponent/>}>
      </Route>
    )
  );

  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
