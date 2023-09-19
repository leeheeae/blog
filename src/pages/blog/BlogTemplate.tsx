import { Outlet } from "react-router-dom";

// # Components
import Template from "@/components/common/Template.component";
import Sidebar from "@/components/blog/Sidebar.component";

function BlogTemplate() {
  return (
    <Template>
      <Sidebar />
      BlogTemplate
      <Outlet />
    </Template>
  );
}

export default BlogTemplate;
