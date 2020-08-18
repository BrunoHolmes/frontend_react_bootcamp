import React from 'react';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado
 */

function App() {
    return (
        //<> </> FRAGMENTAÇÃO para não poluir o HTML
        <>
            <Header title="Homepage">
                <u>
                    <li>Homepage</li>
                    <li>Projects</li>
                </u>
            </Header>
            <Header title="Projects">
                <u>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </u>
            </Header>
        </>
    );
}

export default App;