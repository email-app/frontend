import React from 'react';

const MainAsideLayoutContainer: React.FC = ({ children }) => (
  <div className="relative z-0 flex flex-1 overflow-hidden">{children}</div>
);

const MainAsideLayout_Main: React.FC = ({ children }) => (
  <main className="focus:outline-none xl:order-last relative z-0 flex-1 overflow-y-auto">
    {children}
  </main>
);

const MainAsideLayout_Aside: React.FC = ({ children }) => (
  <aside className="xl:order-first xl:flex xl:flex-col w-96 relative flex-shrink-0 hidden border-r border-gray-200">
    {children}
  </aside>
);

const MainAsideLayout = MainAsideLayoutContainer as any;

MainAsideLayout.Main = MainAsideLayout_Main;
MainAsideLayout.Aside = MainAsideLayout_Aside;

export default MainAsideLayout as React.ComponentType & {
  Main: React.ComponentType;
  Aside: React.ComponentType;
};
