import React from "react";
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = () => {
  return (
    <AdminLayoutPage>
      <div className="layout-container">
        <div className="sidebar">
          <SidebarAdmin />
        </div>
        <div className="layout-content">
          <AdminHeader />
          <div className="admin-outlet">
            <Outlet />
          </div>
          <AdminFooter />
        </div>
      </div>
    </AdminLayoutPage>
  );
};

const AdminLayoutPage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 134vh;
  overflow:hidden;
  .layout-container {
      display: flex;
      align-items: start;
      justify-content: start;
      min-height: 100vh;
    .sidebar {
      width: 20%;
      height:100%;
    }
    .layout-content{
        width: 80%;
    }
  }
  .admin-outlet {
    min-height: 90vh;
    height: fit-content;
    background: var(--bg-grey);
    padding:1rem 2rem;
  }
`;
export default AdminLayout;
