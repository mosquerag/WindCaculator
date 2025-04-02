import React, { useState, useEffect } from 'react';  

const ThemeToggle: React.FC = () => {  
  const [darkMode, setDarkMode] = useState<boolean>(false);  

  // Uso de useEffect para cargar el tema guardado  
  useEffect(() => {  
    const savedTheme = localStorage.getItem('theme');  
    if (savedTheme) {  
      setDarkMode(savedTheme === 'dark');  
      document.body.classList.toggle('dark', savedTheme === 'dark');  
      document.body.classList.toggle('light', savedTheme === 'light');  
    }  
  }, []);  

  const toggleTheme = () => {  
    const newTheme = darkMode ? 'light' : 'dark';  
    setDarkMode(!darkMode);  
    document.body.classList.toggle('dark', newTheme === 'dark');  
    document.body.classList.toggle('light', newTheme === 'light');  
    localStorage.setItem('theme', newTheme); // Guardar el tema en localStorage  
  };  

  return (  
    <button   
      className="bg-[#212752] p-2 rounded-md"  
      onClick={toggleTheme}  
    >  
      {darkMode ? '🌙' : '☀️'} {/* Icono de sol o luna dependiendo del estado */}  
    </button>  
  );  
};  

export default ThemeToggle;  