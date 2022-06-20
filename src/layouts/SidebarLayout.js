import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./SidebarLayout.css";

const SidebarLayout = () => (
  <>
    <div className="row">
      <Col md="auto">
        <div className="left">
          <Sidebar />
        </div>
      </Col>
      <Col>
        <div className="right">
          <Outlet />
        </div>
      </Col>
    </div>
  </>
);

export default SidebarLayout;
