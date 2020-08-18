import React, { useState } from 'react';

import './App.css';
import backgroundImagem from './assets/background.jpg';

import Header from './components/Header';


/**
 * Componente
 * Propriedade
 * Estado 
 * Imutabilidade: garantir performance mesmo em aplicações que tenham muitos dados
 */

function App() {
    //useState retorna um array com 2 posições

    //1. Variável com seu valor inicial
    //2. Função para atualizarmos esse valor
    const [projects, setProjects] =
        useState([
            'Desenvolvimento de app',
            'Front-end Web'
        ]);

    function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`)
        setProjects([...projects, `Novo projeto ${Date.now()}`]); //Aplicação do conceito da imutabilidade

        console.log(projects);
    }

    return (
        //<> </> FRAGMENTAÇÃO para não poluir o HTML com div's
        <>
            <Header title="Projects" />

            <img width={300} src={backgroundImagem} />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;