import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Blogs from './Components/Blogs/Blogs';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Quize from './Components/Quize/Quize';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/quize/:ID',
          loader: async ({ params }) => {
            // console.log(params.ID)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.ID}`)
          },

          element: <Quize></Quize>
        },
        {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    }, {
      path: '*',
      element: <Notfound></Notfound>
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
