// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root')
);