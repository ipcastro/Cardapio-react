import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Personagens from './pages/Personagens';
import OQueAprender from './pages/OQueAprender';
import HQ from './pages/HQ';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import Acesso from './pages/Acesso';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Conteudo from './pages/Conteudo';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <header className="header">
            <div className="container">
              <Navbar />
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personagens" element={<Personagens />} />
              <Route path="/o-que-aprender" element={<OQueAprender />} />
              <Route path="/hq" element={<HQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/acesso" element={<Acesso />} />
              <Route path="/conteudo" element={<Conteudo />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
