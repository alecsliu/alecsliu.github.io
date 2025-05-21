'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h3>My Portfolio</h3>
      </div>
      <nav>
        <ul>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#professional">Professional</Link></li>
          <li><Link href="#hobbies">Hobbies</Link></li>
          <li><Link href="#blog">Blog</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}