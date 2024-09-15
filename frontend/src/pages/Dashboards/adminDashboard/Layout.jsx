import React, { useState } from "react";
import styled from "styled-components";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import SidebarAdmin from "./SidebarAdmin";
import withAdminAuth from "../../../HOC/withAdminAuth";

const AdminLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <AdminLayoutPage>
      <div className="layout-container">
        <div className={sideBarOpen ? "sidebar" : "sidebar-close"}>
          <SidebarAdmin
            sideBarOpen={sideBarOpen}
            toggleSideBar={toggleSideBar}
            setSideBarOpen={setSideBarOpen}
          />
        </div>
        <div className={sideBarOpen ? "layout-content" : "layout-content-full"}>
          <AdminHeader
            sideBarOpen={sideBarOpen}
            toggleSideBar={toggleSideBar}
            setSideBarOpen={setSideBarOpen}
          />
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
  height: fit-content;
  overflow: hidden;
  background: var(--bg-three);

  .layout-container {
    display: flex;
    align-items: start;
    justify-content: start;
    min-height: 100vh;
    .sidebar {
      width: 20%;
      height: 100%;
      transition: var(--transition);
    }
    .sidebar-close {
      width: 0%;
      height: 100%;
      overflow: hidden;
      transition: var(--transition);
    }
    .layout-content {
      width: 80%;
      transition: var(--transition);
    }
    .layout-content-full {
      width: 100%;
      transition: var(--transition);
    }
  }
  .admin-outlet {
    min-height: 90vh;
    height: fit-content;
    background: var(--bg-grey);
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
    position: relative;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .layout-container {
      display: flex;
      align-items: start;
      justify-content: start;
      min-height: 100vh;
      .sidebar {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        transition: var(--transition);
      }
      .sidebar-close {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 100;
        transition: var(--transition);
      }
      .layout-content {
        width: 100%;
      }
    }
    .admin-outlet {
      /* min-height: 150vh; */
      height: fit-content;
      background: var(--bg-grey);
      padding: 0rem;
    }
  }
  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .layout-container {
      display: flex;
      align-items: start;
      justify-content: start;
      min-height: 100vh;
      .sidebar {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        transition: var(--transition);
      }
      .sidebar-close {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 100;
        transition: var(--transition);
      }
      .layout-content {
        width: 100%;
      }
    }
    .admin-outlet {
      /* min-height: 150vh; */
      height: fit-content;
      background: var(--bg-grey);
      padding: 0rem;
    }
  }
  @media screen and (max-width: 420px) {
    position: relative;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .layout-container {
      display: flex;
      align-items: start;
      justify-content: start;
      min-height: 100vh;
      .sidebar {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        transition: var(--transition);
      }
      .sidebar-close {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 100;
        transition: var(--transition);
      }
      .layout-content {
        width: 100%;
      }
    }
    .admin-outlet {
      height: fit-content;
      background: var(--bg-grey);
      padding: 0rem;
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default withAdminAuth(AdminLayout);
