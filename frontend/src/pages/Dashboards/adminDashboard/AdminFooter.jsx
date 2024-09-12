import React from "react";
import styled from "styled-components";

const AdminFooter = () => {
  return (
    <FooterAdmin>
      <p>Copyright © 2024. All rights reserved.</p>
    </FooterAdmin>
  );
};

const FooterAdmin = styled.div`
  width: 100%;
  padding: 0 1rem;
  background: var(--bg-two);
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
`;
export default AdminFooter;
