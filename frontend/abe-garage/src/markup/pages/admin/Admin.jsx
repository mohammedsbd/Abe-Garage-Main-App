import React from "react";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import AdminComponent from "../../components/Admin/AdminComponent/AdminComponent";

function Admin() {
  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
          <AdminComponent />
        </div>
      </div>
    </div>
  );
}

export default Admin;
