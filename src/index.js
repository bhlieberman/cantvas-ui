import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { Root, loader as rootLoader } from './routes/root';
import { Details, detailsLoader, studentAction } from './routes/details';
import { Student } from './routes/student';
import ErrorPage from './errorPage';
import reportWebVitals from './reportWebVitals';
import { CourseInfo } from './components/CourseInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/details/:courseId",
        element: <Details />,
        loader: detailsLoader,
        action: studentAction,
        children: [
          {
            path: "/details/:courseId/student/:studentId",
            element: <Student />
          }
        ]
      },
      {
        path: "/courses",
        element: <CourseInfo />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
