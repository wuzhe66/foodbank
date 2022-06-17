import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Col } from "react-bootstrap";
const SidebarLayout = () => (
  <>
    <div className="row">
      <Col md="auto">
        <Sidebar />
      </Col>
      <Col>
        <Outlet />
      </Col>
    </div>
  </>
);

export default SidebarLayout;
