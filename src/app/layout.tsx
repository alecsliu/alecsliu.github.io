import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Personal Portfolio',
  description: 'A place for my thoughts, projects, and passions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}