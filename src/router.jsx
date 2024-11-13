import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main';
import NotFoundError from './pages/error/NotFound';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Chart from './pages/chart/Chart';
import Chatting from './pages/chatting/Chatting';
import RootLayout from './layout/rootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/chart',
        element: <Chart />,
      },
      {
        path: '/chatting',
        element: <Chatting />,
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export default router;
