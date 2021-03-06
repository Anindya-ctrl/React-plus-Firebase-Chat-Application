import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
document.getElementById('chat-app'));
