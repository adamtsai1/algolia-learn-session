import React from 'react';
import { createRoot } from 'react-dom/client';
import Search from './Search';

const container = document.getElementById('react-app');
const root = createRoot(container);
root.render(<Search />);
