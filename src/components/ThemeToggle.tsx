'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <span className="toggle-icon">☀️</span>
      <span className="toggle-icon">🌙</span>
      <div className="toggle-ball"></div>
    </div>
  );
}