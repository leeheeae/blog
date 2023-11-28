import Layout from "@/components/common/layout.tsx";
import Categories from "@/components/blog/categories.tsx";
import { Outlet } from "react-router-dom";

function BlogTemplate() {
  return (
    <Layout>
      <div style={{ display: "flex", height: "100%" }}>
        <Categories />
        <Outlet />
      </div>
    </Layout>
  );
}

export default BlogTemplate;
