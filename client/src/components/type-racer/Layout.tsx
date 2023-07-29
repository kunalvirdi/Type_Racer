import React from "react";


interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {

  return (
    <div className='d-flex flex-column vh-100'>
      <header/>
      <main className='flex-shrink-0 main'>
        <div className='container'>{children}</div>
      </main>
      <footer/>
    </div>
  );
}

export default Layout;
