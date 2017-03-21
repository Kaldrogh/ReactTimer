import React from 'react';
import Nav from 'Nav'

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          <p>Main.jsx rendered.</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
