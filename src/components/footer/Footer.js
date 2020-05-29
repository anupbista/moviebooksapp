import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    // <MDBFooter color="blue" className="font-small pt-4 mt-4">
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid>
    //       Copyright &copy; {new Date().getFullYear()} | SANDR Group
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>
    <div className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} | SANDR Group</p>
    </div>
  );
};

export default FooterPage;
