import React, { useState } from 'react';

import MobileHeader from 'src/components/MobileHeader';
import Navbar from 'src/components/Navbar';
import Slideover from 'src/components/Slideover';

const AppLayout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Mobile slideover nav */}
      <Slideover open={sidebarOpen} setOpen={setSidebarOpen}>
        <Navbar />
      </Slideover>

      {/* Static sidebar for desktop */}
      <div className="lg:flex lg:flex-shrink-0 hidden">
        <div className="flex flex-col w-64">
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div className="lg:hidden">
          <MobileHeader onToggleMenu={() => setSidebarOpen((open) => !open)} />
        </div>

        <div className="relative z-0 flex flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AppLayout;
