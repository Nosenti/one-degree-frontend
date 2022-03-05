import { Sidebar } from "../Sidebar";

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta title="description" content={description} />
        <meta title="keywords" content={keywords} />
      </head>

      <body>
        <main>
          <div className="main-layout">
            <Sidebar>
            <div className="main-content">{children}</div>
            </Sidebar>
          </div>
        </main>
      </body>
    </>
  );
}

Layout.defaultProps = {
  title: "ONE-DEGREE WEB",
  description: "ONE-DEGREE WEB",
  keywords: "ONE-DEGREE WEB",
};
