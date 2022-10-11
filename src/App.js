import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Chart from './Pages/Chart';
import Blog from './Pages/Blog';
import Main from './Layout/Main';
// import Quiz from './Pages/Quiz';


function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [

          {
            path: '/home',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
          },

          // {
          //   path: '/quiz',
          //   element: <Quiz></Quiz>
          // },

          {
            path: '/chart',
            element: <Chart></Chart>
          },

          {
            path: '/blog',
            element: <Blog></Blog>
          }
        ]
      },
    
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
