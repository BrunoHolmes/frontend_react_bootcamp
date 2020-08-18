import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';


/**
 * AXIOS: Responsável por conectar o front com o back-end
 * 
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
        useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`)
        setProjects([...projects, `Novo projeto ${Date.now()}`]); //Aplicação do conceito da imutabilidade

        console.log(projects);
    }

    return (
        //<> </> FRAGMENTAÇÃO para não poluir o HTML com div's
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;