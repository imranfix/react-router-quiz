import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Chart from './Pages/Chart';
import Blog from './Pages/Blog';
import Main from './Layout/Main';
import CodeQuizs from './Pages/CodeQuizs';



function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [

          {
            path: '/home',
            loader:  () =>  fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
          },

          {
            path: '/home/:id',
            loader: async({params}) =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            element: <CodeQuizs></CodeQuizs>
          },

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
      {
        path: '*', element: <div className='text-center mt-5'><h1> <span>Sorry!!</span> This route is not Found
        <br />
        <h2><span className='fw-bold text-secondary mt-3'>404</span></h2>
        </h1></div>
      }
    
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
