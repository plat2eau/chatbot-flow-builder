import './style.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {getTheme} from "./utils/ThemeUtils";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App theme={getTheme()}/>);