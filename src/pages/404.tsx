import * as React from "react";
import { Link, PageProps } from "gatsby";
import SEO from "../components/seo"

export const Head = () => <SEO title="Page Not Found" />;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <section className="d-grid d-rows-1 min-h-50vh">
      <div className="d-flex flex-column justify-content-center align-items-center text-center px-6 pt-5 mt-5">
        <h1 className="display-4 font-weight-bold">Page Not Found</h1>
        <Link to="/">Go Home</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
