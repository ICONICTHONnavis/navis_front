import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import NotFoundError from './pages/error/NotFound';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Chart from './pages/chart/Chart';
import Chatting from './pages/chatting/Chatting';
import App from './App';
import Table from './pages/Table/Table';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: '/table',
        element: <Table />,
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
