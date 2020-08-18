import React from 'react';

import Header from './components/Header';

function App() {
    return (
        //<> </> FRAGMENTAÇÃO para não poluir o HTML
        <> 
            <Header />
            <Header />
        </>
    );
}

export default App;
