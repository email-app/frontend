import React, { useState } from 'react';

import MobileHeader from '../components/MobileHeader';
import Navbar from '../components/Navbar';
import Slideover from '../components/Slideover';

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
          <main className="focus:outline-none xl:order-last relative z-0 flex-1 overflow-y-auto">
            {children}
          </main>
          <aside className="xl:order-first xl:flex xl:flex-col w-96 relative flex-shrink-0 hidden border-r border-gray-200">
            {/* Start secondary column (hidden on smaller screens) */}
            <div className="sm:px-6 lg:px-8 absolute inset-0 px-4 py-6">
              <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
            </div>
            {/* End secondary column */}
          </aside>
        </div>
      </div>
    </div>
  );
};
export default AppLayout;
