import  React from 'react';
import {Routes, Route } from 'react-router-dom';
import AppLayout from '../components/layout';
import Dashboard from '../components/dashboard';


const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<AppLayout><Dashboard/></AppLayout>} />
      </Routes>
  );
};

export default Routing;