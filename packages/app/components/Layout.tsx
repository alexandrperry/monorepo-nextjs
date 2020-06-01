import React from 'react';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
