import Layout from "@/components/common/layout.component.tsx";
import Categories from "@/components/blog/categories.tsx";

function Blog_template() {
  return (
    <Layout>
      <div style={{ display: "flex", height: "100%" }}>
        <Categories />
      </div>
    </Layout>
  );
}

export default Blog_template;
