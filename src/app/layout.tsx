
import { poppins } from '@/fonts';
import './globals.css';
import { ChildrenProps } from '@/types';
import { Navigation } from '@/components/Navigation';

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="fr">
      <body className={`relative w-full h-[100vh] flex flex-col bg-[#1D1D1D] ${poppins.className}`}>
        <Navigation />

        <div className="relative w-full h-[calc(100%-80px)] top-20 lg:top-0">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout;
