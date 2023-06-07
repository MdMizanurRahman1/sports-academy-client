import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div style={{ maxWidth: '1240px' }} className='mx-auto'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
