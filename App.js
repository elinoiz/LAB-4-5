// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Content from './content';
import { useTheme } from './themeContext';
import './theme.css';
import Registration from './registration';

const App = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route path="/content/:id" element={<Content />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;