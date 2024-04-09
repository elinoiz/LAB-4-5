import React from 'react';
import Button from './button';
import { useTheme } from './themeContext';
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate из react-router-dom

const Header = () => {
  const { toggleTheme, selectMenu, selectContent } = useTheme();
  const navigate = useNavigate(); // Использование useNavigate

  const handleRegistrationClick = () => {
    navigate('/registration'); // Перенаправление на страницу регистрации
  };

  return (
    <header>
      <h1>My Website</h1>
      <div>
        <Button onClick={selectMenu} label="Menu" />
        <Button onClick={selectContent} label="Content" />
        <Button onClick={toggleTheme} label="Смена темы" />
        <Button onClick={handleRegistrationClick} label="Регистрация" />
      </div>
    </header>
  );
};

export default Header;