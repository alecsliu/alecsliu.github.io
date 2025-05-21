'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light-theme' | 'dark-theme';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light-theme');
  
  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved theme preference or use light theme as default
    const savedTheme = localStorage.getItem('theme') as Theme || 'light-theme';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}