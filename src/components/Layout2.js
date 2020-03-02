import React from "react";

import Header from "./Header";

function Layout2(props) {
  return (
    <React.Fragment>
      {console.log(props.test)}
      <Header />
      {props.children}
    </React.Fragment>
  );
}

export default Layout2;
