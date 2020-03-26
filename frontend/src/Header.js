import React from 'react';

function Header({ children }) {
  return (
    <header>
      {/* <h1>{props.title}</h1> */}
      <h1>{children}</h1>
    </header>
  );
}

export default Header;