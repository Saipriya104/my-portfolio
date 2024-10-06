// src/app/projects/page.js

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <h3>Houzer Project</h3>
      <p>
        Houzer is a Prop-tech platform that helps housing societies with
        structural work and redevelopment by connecting them to verified
        professionals. It also provides valuable resources like blogs, articles,
        and regulatory updates to support informed decision-making.
        <ul>
          <li>
            Developed and maintained Java-based RESTful APIs using Spring Boot,
            optimized deployment processes, and ensured security through CORS
            policies.
          </li>
          <li>
            Improved file storage with Minio, created dynamic PDFs and email
            templates using Thymeleaf, and enhanced UI with Material-UI in
            React.js.
          </li>
          <li>
            Conducted thorough API, unit, and integration testing, applied
            advanced debugging, and optimized database management with SQL.
          </li>
        </ul>
      </p>

      <h3>PMS RIA Application</h3>
      <p>
        The PMS RIA application is a multi-tenant application designed to
        streamline financial advisory services, enabling efficient management of
        client portfolios, products, and commission schedules.
        <ul>
          <li>
            Led the development of a multi-tenant PMS RIA application for
            portfolio management, coordinating project planning and conducting
            code reviews to ensure high standards.
          </li>
          <li>
            Designed and implemented core CRUD operations for essential entities
            like providers, products, and clients, ensuring data integrity and
            scalability across tenants.
          </li>
        </ul>
      </p>
    </div>
  );
}
