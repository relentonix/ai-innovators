import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/styles/pages.css';
import AppRouter from './router/AppRouter';
import Particle from './components/Particle';

function App () {
  return (
    <>
    <Particle />
        <AppRouter />

    </>
  );
}

export default App;
