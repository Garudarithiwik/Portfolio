import './App.css'
import profileImg from '../RthiwikGaruda.png'

function App() {
  return (
    <div className="portfolio clean-template">
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Rithiwik Garuda's Portfolio</h2>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header id="hero" className="hero-simple">
        <div className="hero-copy">
          <h1>Rithiwik Garuda <span className="minor-text">(6+ years)</span></h1>
          <p className="label">Software Engineer</p>
          <p className="hero-text">I build enterprise-grade data platforms, microservices, and cloud-native solutions that scale globally.</p>
          <div className="hero-cta-group">
            <a className="cta-button outlined" href="https://github.com/Garudarithiwik" target="_blank" rel="noreferrer">GitHub</a>
            <a className="cta-button outlined" href="https://www.linkedin.com/in/rithiwik-garuda-351920239" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={profileImg} alt="Rithiwik Garuda" className="hero-img" />
        </div>
      </header>

      <section id="about" className="section-light">
        <h2>About Me</h2>
        <p>I am a senior software engineer with 6+ years leading cloud-native data platforms at Infosys.
           I architected and implemented enterprise Master Data Management (MDM) systems, event-driven Kafka pipelines,
           and resilient APIs on Amazon EKS.
           My work includes production-grade observability with CloudWatch/Datadog, automated CI/CD with Jenkins & GitHub Actions,
           and zero-downtime microservices deployment strategy across mission-critical insurance data workflows.</p>
      </section>

      <section id="experience" className="section-grid">
        <h2>Experience</h2>
        <div className="card-grid">
          <article className="card experience-item">
            <h3>Infosys Ltd.</h3>
            <span className="sub">Software Development Engineer | 10/2022 - Present</span>
            <p className="experience-summary">Leading cloud-native MDM, Kafka event processing, API ingestion, observability, and migration efforts in a high-throughput enterprise setting.</p>
            <ul className="experience-highlights experience-details">
              <li>Full Stack Engineer in Master Data Management (MDM) platform handling cloud-native, event-driven applications for enterprise insurance data.</li>
              <li>Built and maintained Kafka topic consumer services on Amazon EKS, processing 50K–100K+ events/hour with retry/backoff and autoscaling.</li>
              <li>Developed real-time ingestion APIs using Node.js and TypeScript, integrating third-party services and transforming JSON/XML payloads for MDM ingestion.</li>
              <li>Implemented AWS Lambda listeners for latency-critical workflows, routing Kafka events to containerized downstream systems.</li>
              <li>Created application health monitoring and observability dashboards with CloudWatch, Kibana, Dynatrace, Splunk, and Graylog.</li>
              <li>Implemented event deduplication, auditing, and status tracking with MongoDB optimized schemas and indexes.</li>
              <li>Led migration of MDM systems from Informatica to Reltio using Databricks ETL pipelines and Amazon S3 staging.</li>
              <li>Designed anti-corruption layer (ACL) to enable parallel publishing across legacy and modern systems with minimal disruption.</li>
              <li>Enhanced Java MDB service for JMS to Kafka data flows, transforming XML events to JSON for Node.js-based consumers.</li>
              <li>Automated infrastructure provisioning with Terraform and CI/CD deployments using Jenkins, GitHub Actions, Argo CD, and Urban Code Deploy.</li>
              <li>Built AutoSys scheduling workflows for batch ingestion and data processing pipelines.</li>
              <li>Established versioned Docker image pipelines and zero-downtime deployments to Amazon EKS via Kubernetes manifests.</li>
              <li>Architected centralized Angular resiliency dashboard to monitor distributed APIs and reduce MTTR.</li>
              <li>Optimized 70+ Node.js apps with Angular Standalone Components + lazy loading, and performance tuning for reliability.</li>
              <li>Implemented Jest/Mocha/Chai tests to maintain 85–90% code coverage, while participating in Agile ceremonies and cross-team planning.</li>
            </ul>
          </article>
          <article className="card experience-item">
            <h3>University of New Haven</h3>
            <span className="sub">Research Assistant | 01/2021 - 08/2022</span>
            <p className="experience-summary">Delivered a full-stack Shuttle Tracking app with 70% student adoption, focusing on real-time location services and reliability.</p>
            <ul className="experience-highlights experience-details">
              <li>Collaborated with faculty and stakeholders to design and build a production-grade Shuttle Tracking app using full-stack architecture.</li>
              <li>Delivered a highly adopted solution used by 70% of students, proving scalability and usability in real-world deployment.</li>
              <li>Led development of backend services, API integration, and live data flows for real-time location updates.</li>
              <li>Developed responsive React frontend components focused on performance and user experience.</li>
              <li>Designed and implemented Node.js REST APIs for efficient client-server communication.</li>
              <li>Optimized MySQL and MongoDB storage for real-time tracking and historical data retrieval.</li>
              <li>Delivered ongoing maintenance, debugging, and feature enhancement support.</li>
            </ul>
          </article>
          <article className="card experience-item">
            <h3>TCS</h3>
            <span className="sub">Software Development Engineer | 04/2019 - 12/2020</span>
            <p className="experience-summary">Built and stabilized a full-stack timesheet product with secure authentication and performance optimizations.</p>
            <ul className="experience-highlights experience-details">
              <li>Contributed as full stack engineer on mytimesheet application with end-to-end deliverables.</li>
              <li>Collaborated across teams for planning, building, testing, and stable release deployment.</li>
              <li>Implemented secure authentication and role-based access control using JWT and OAuth.</li>
              <li>Integrated Moment.js, Chart.js and additional UI enhancements for analytics/reporting workflows.</li>
              <li>Built Angular services and dependency-injected components for scalable state management.</li>
              <li>Optimized MySQL queries and indexes to improve response times and throughput.</li>
              <li>Established centralized Winston logging and error handling to speed troubleshooting.</li>
              <li>Managed Git branch workflow and merge strategy to preserve code quality across features.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" className="section-grid skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span>C</span><span>C++</span><span>Python</span><span>Java</span><span>JavaScript</span><span>TypeScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
              <span>Node.js</span><span>Express</span><span>React</span><span>Angular</span><span>React Query</span><span>Next.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Web Technologies & APIs</h3>
            <div className="skill-tags">
              <span>REST APIs</span><span>Event-driven REST listeners</span><span>HTML</span><span>CSS</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>SQL Server</span><span>MySQL</span><span>PostgreSQL</span><span>MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Cloud & Containers</h3>
            <div className="skill-tags">
              <span>AWS</span><span>Amazon S3</span><span>Apache Kafka</span><span>Amazon EKS</span><span>AWS Lambda</span><span>Databricks</span><span>PCF</span><span>OCF</span><span>Docker</span><span>Kubernetes</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Infrastructure & DevOps</h3>
            <div className="skill-tags">
              <span>Terraform</span><span>Jenkins</span><span>Argo CD</span><span>GitHub Actions</span><span>Urban Code Deploy</span><span>AutoSys</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Observability</h3>
            <div className="skill-tags">
              <span>CloudWatch</span><span>Kibana</span><span>Dynatrace</span><span>Graylog</span><span>Splunk</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Methodologies</h3>
            <div className="skill-tags">
              <span>Microservices</span><span>Agile/Scrum</span><span>JIRA</span><span>Rally</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-light">
        <h2>Contact</h2>
        <div className="contact-links">
          <a className="contact-btn email" href="mailto:rithiwikgaruda@gmail.com">Email</a>
          <a className="contact-btn phone" href="tel:+14756558713">Phone</a>
        </div>
      </section>

      <footer className="footer">&copy; Rithiwik Garuda</footer>
    </div>
  )
}

export default App
