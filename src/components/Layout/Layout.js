import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBarComponent } from '../AppBar/AppBar';
export const Layout = () => {
  return (
    <>
      <AppBarComponent/>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>
    </>
  );
};