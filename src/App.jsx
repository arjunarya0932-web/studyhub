import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("studyhub-theme") === "dark"
);
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = [
  { name: "Data Structures", page: "Data Structures" },
  { name: "Operating System", page: "Operating System" },
  { name: "Computer Networks", page: "Computer Networks" },
  { name: "DBMS", page: "DBMS" },
  { name: "Software Engineering", page: "Software Engineering" },
  { name: "Computer Architecture", page: "Computer Architecture" },
  { name: "Notes", page: "Notes" },
  { name: "Tasks", page: "Tasks" },
  { name: "Timetable", page: "Timetable" },
  { name: "Progress", page: "Progress" },
  { name: "Settings", page: "Settings" },
];

  const [studentName, setStudentName] = useState(
    localStorage.getItem("studyhub-name") || "Student"
  );

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("studyhub-tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Complete DSA notes", done: true },
          { id: 2, title: "Study Operating System", done: false },
          { id: 3, title: "Practice JavaScript", done: false },
        ];
  });

  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem("studyhub-timetable");
    return saved ? JSON.parse(saved) : [];
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("studyhub-notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("studyhub-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("studyhub-timetable", JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    localStorage.setItem("studyhub-notes", JSON.stringify(notes));
  }, [notes]);

  const completedTasks = tasks.filter((task) => task.done).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const examDate = new Date("2026-09-25T00:00:00");
  const today = new Date();
  const currentHour = today.getHours();

const greeting =
  currentHour < 12
    ? "Good Morning"
    : currentHour < 18
    ? "Good Afternoon"
    : "Good Evening";

  const daysLeft = Math.max(
    0,
    Math.ceil((examDate - today) / (1000 * 60 * 60 * 24))
  );
useEffect(() => {
  localStorage.setItem(
    "studyhub-theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);
  return (
  <div className={darkMode ? "app dark-mode" : "app"}>
      <aside className="sidebar">
        <h1>StudyHub</h1>

        <nav>
  <button
    className={activePage === "Dashboard" ? "active-nav" : ""}
    onClick={() => setActivePage("Dashboard")}
  >
    🏠 Dashboard
  </button>

  <button
    className={activePage === "Subjects" ? "active-nav" : ""}
    onClick={() => setActivePage("Subjects")}
  >
    📚 Subjects
  </button>

  <button
    className={activePage === "Notes" ? "active-nav" : ""}
    onClick={() => setActivePage("Notes")}
  >
    📝 Notes
  </button>

  <button
    className={activePage === "Tasks" ? "active-nav" : ""}
    onClick={() => setActivePage("Tasks")}
  >
    ✅ Tasks
  </button>

  <button
    className={activePage === "Timetable" ? "active-nav" : ""}
    onClick={() => setActivePage("Timetable")}
  >
    📅 Timetable
  </button>

  <button
    className={activePage === "Progress" ? "active-nav" : ""}
    onClick={() => setActivePage("Progress")}
  >
    📊 Progress
  </button>

  <button
    className={activePage === "Settings" ? "active-nav" : ""}
    onClick={() => setActivePage("Settings")}
  >
    ⚙️ Settings
  </button>
</nav>
      </aside>

      <main className="main">
        {/* SUBJECTS */}

        {activePage === "Subjects" ? (
          <section className="card">
            <h2>📚 Subjects</h2>

            <div className="subject-grid">
              <div className="subject-card">
                <h3>🧠 Data Structures</h3>
                <p>Learn DSA concepts and algorithms.</p>
                <button onClick={() => setActivePage("Data Structures")}>
                  Open Subject →
                </button>
              </div>

              <div className="subject-card">
                <h3>💻 Operating System</h3>
                <p>Learn processes, memory and file systems.</p>
                <button onClick={() => setActivePage("Operating System")}>
                  Open Subject →
                </button>
              </div>

              <div className="subject-card">
                <h3>🌐 Computer Networks</h3>
                <p>Learn networking and communication.</p>
                <button onClick={() => setActivePage("Computer Networks")}>
  Open Subject →
</button>
</div>
              <div className="subject-card">
                <h3>🗄️ DBMS</h3>
                <p>Learn databases and SQL.</p>
                <button onClick={() => setActivePage("DBMS")}>
  Open Subject →
</button>
              </div>

              <div className="subject-card">
                <h3>⚙️ Software Engineering</h3>
<p>Learn software development models.</p>
<button onClick={() => setActivePage("Software Engineering")}>
  Open Subject →
</button>
              </div>
      
              <div className="subject-card">
                <h3>🖥️ Computer Architecture</h3>
<p>Learn CPU and computer organization.</p>
<button onClick={() => setActivePage("Computer Architecture")}>
  Open Subject →
</button>
              </div>
            </div>
          </section>
/* ================= COMPUTER NETWORKS ================= */

) : activePage === "Computer Networks" ? (
  <section className="card">
    <h2>🌐 Computer Networks</h2>

    <p>
      Learn important concepts of computer networks and data communication.
    </p>

    <div className="topic-list">

      <div className="topic-card">
        <h3>🔗 Network Basics</h3>
        <p>Learn the fundamentals of computer networking.</p>
        <button onClick={() => setActivePage("Network Basics")}>
          Start Learning →
        </button>
      </div>

      <div className="topic-card">
        <h3>📡 OSI Model</h3>
        <p>Learn all seven layers of the OSI model.</p>
        <button onClick={() => setActivePage("OSI Model")}>
          Start Learning →
        </button>
      </div>

      <div className="topic-card">
        <h3>🌐 TCP/IP Model</h3>
        <p>Understand the TCP/IP model and its layers.</p>
        <button onClick={() => setActivePage("TCP/IP Model")}>
          Start Learning →
        </button>
      </div>

      <div className="topic-card">
        <h3>📦 Network Protocols</h3>
        <p>Learn important protocols used in computer networks.</p>
        <button onClick={() => setActivePage("Network Protocols")}>
          Start Learning →
        </button>
      </div>

    </div>

    <button onClick={() => setActivePage("Subjects")}>
      ← Back to Subjects
    </button>
  </section>

) : activePage === "Network Basics" ? (
  <section className="card topic-detail-card">

    <h2>🔗 Network Basics</h2>

    <p>
      Computer Network is a system in which two or more computers and
      devices are connected to share data, information and resources.
    </p>

    <h3>What is a Computer Network?</h3>

    <p>
      A computer network allows connected devices to communicate with each
      other using communication links and networking protocols.
    </p>

    <h3>Basic Components of a Network</h3>

    <ul>
      <li>
        <strong>Sender:</strong> The device that sends the data.
      </li>

      <li>
        <strong>Receiver:</strong> The device that receives the data.
      </li>

      <li>
        <strong>Transmission Medium:</strong> The path through which data
        travels, such as cables or wireless signals.
      </li>

      <li>
        <strong>Network Devices:</strong> Devices such as routers, switches
        and hubs used for network communication.
      </li>

      <li>
        <strong>Protocols:</strong> Rules that control communication between
        network devices.
      </li>
    </ul>

    <h3>Types of Computer Networks</h3>

    <ul>
      <li>
        <strong>LAN:</strong> Local Area Network covers a small geographical
        area such as a home, office or laboratory.
      </li>

      <li>
        <strong>MAN:</strong> Metropolitan Area Network covers a city or
        large campus.
      </li>

      <li>
        <strong>WAN:</strong> Wide Area Network covers a large geographical
        area and can connect networks across different cities or countries.
      </li>
    </ul>

    <h3>Advantages of Computer Networks</h3>

    <ul>
      <li>Sharing files and information.</li>
      <li>Sharing hardware and software resources.</li>
      <li>Fast communication between users.</li>
      <li>Centralized management of resources.</li>
      <li>Easy access to shared data.</li>
    </ul>

    <h3>Examples</h3>

    <ul>
      <li>Home Wi-Fi network</li>
      <li>College computer laboratory network</li>
      <li>Office network</li>
      <li>Internet</li>
    </ul>

    <button onClick={() => setActivePage("Computer Networks")}>
      ← Back to Computer Networks
    </button>

  </section>

) : activePage === "OSI Model" ? (
  <section className="card topic-detail-card">

    <h2>📡 OSI Model</h2>

    <p>
      The OSI (Open Systems Interconnection) model is a seven-layer
      reference model that explains how data is transmitted between
      devices over a network.
    </p>

    <h3>Seven Layers of OSI Model</h3>

    <ol>
      <li>
        <strong>Physical Layer:</strong> Transmits raw bits through the
        physical medium such as cables and signals.
      </li>

      <li>
        <strong>Data Link Layer:</strong> Provides node-to-node delivery
        and handles framing and error detection.
      </li>

      <li>
        <strong>Network Layer:</strong> Handles logical addressing and
        routing of data between networks.
      </li>

      <li>
        <strong>Transport Layer:</strong> Provides reliable data delivery,
        flow control and error recovery.
      </li>

      <li>
        <strong>Session Layer:</strong> Establishes, manages and terminates
        communication sessions.
      </li>

      <li>
        <strong>Presentation Layer:</strong> Handles data translation,
        encryption and compression.
      </li>

      <li>
        <strong>Application Layer:</strong> Provides network services
        directly to applications used by the user.
      </li>
    </ol>

    <h3>Advantages of OSI Model</h3>

    <ul>
      <li>Provides a standard framework for network communication.</li>
      <li>Divides complex networking into separate layers.</li>
      <li>Makes troubleshooting easier.</li>
      <li>Helps different network technologies work together.</li>
      <li>Useful for learning and understanding network protocols.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Networks")}>
      ← Back to Computer Networks
    </button>

  </section>
) : activePage === "TCP/IP Model" ? (
  <section className="card topic-detail-card">

    <h2>🌐 TCP/IP Model</h2>

    <p>
      The TCP/IP model is a communication model that describes how data is
      transmitted between devices over a network, especially on the Internet.
    </p>

    <h3>Four Layers of TCP/IP Model</h3>

    <ol>
      <li>
        <strong>Network Access Layer:</strong> Handles communication between
        devices on the same network and manages data transmission over the
        physical network.
      </li>

      <li>
        <strong>Internet Layer:</strong> Responsible for logical addressing
        and routing packets between different networks.
      </li>

      <li>
        <strong>Transport Layer:</strong> Provides end-to-end communication,
        reliability, flow control and error handling.
      </li>

      <li>
        <strong>Application Layer:</strong> Provides network services used by
        applications such as web browsing, email and file transfer.
      </li>
    </ol>

    <h3>Important Protocols</h3>

    <ul>
      <li><strong>TCP:</strong> Provides reliable and ordered delivery of data.</li>
      <li><strong>IP:</strong> Provides addressing and routing of packets.</li>
      <li><strong>HTTP/HTTPS:</strong> Used for web communication.</li>
      <li><strong>FTP:</strong> Used for file transfer.</li>
      <li><strong>DNS:</strong> Converts domain names into IP addresses.</li>
    </ul>

    <h3>Advantages</h3>

    <ul>
      <li>Widely used for Internet communication.</li>
      <li>Provides reliable data communication.</li>
      <li>Supports different types of networks.</li>
      <li>Allows different devices and systems to communicate.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Networks")}>
      ← Back to Computer Networks
    </button>

  </section>

) : activePage === "Network Protocols" ? (
  <section className="card topic-detail-card">

    <h2>📦 Network Protocols</h2>

    <p>
      Network protocols are a set of rules that define how devices
      communicate, exchange data and share information over a network.
    </p>

    <h3>Important Network Protocols</h3>

    <ul>
      <li>
        <strong>HTTP:</strong> Used for transferring web pages and other
        resources between a web browser and web server.
      </li>

      <li>
        <strong>HTTPS:</strong> Secure version of HTTP that protects data
        exchanged between the client and server.
      </li>

      <li>
        <strong>FTP:</strong> Used to transfer files between computers over
        a network.
      </li>

      <li>
        <strong>TCP:</strong> Provides reliable, ordered and error-checked
        delivery of data.
      </li>

      <li>
        <strong>IP:</strong> Provides logical addressing and helps route
        packets from source to destination.
      </li>

      <li>
        <strong>DNS:</strong> Converts domain names into their corresponding
        IP addresses.
      </li>
    </ul>

    <h3>Why Network Protocols are Important</h3>

    <ul>
      <li>Provide standard rules for communication.</li>
      <li>Allow different devices to communicate with each other.</li>
      <li>Help in reliable and organized data transfer.</li>
      <li>Provide security and proper data management.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Networks")}>
      ← Back to Computer Networks
    </button>

  </section>


          /* ================= DBMS ================= */

        ) : activePage === "DBMS" ? (
          <section className="card">
            <h2>🗄️ DBMS</h2>

            <p>
              Learn database concepts, SQL and database management.
            </p>

            <div className="topic-list">

              <div className="topic-card">
                <h3>📚 DBMS Basics</h3>
                <p>Learn database, DBMS and its advantages.</p>
              <button onClick={() => setActivePage("DBMS Basics")}>
  Start Learning →
</button>
</div>
              <div className="topic-card">
                <h3>🔑 Keys</h3>
                <p>Learn Primary Key, Foreign Key and Candidate Key.</p>
                <button onClick={() => setActivePage("DBMS Keys")}>
  Start Learning →
</button>
              </div>

              <div className="topic-card">
                <h3>🔗 ER Model</h3>
                <p>Learn entities, attributes and relationships.</p>
                <button onClick={() => setActivePage("ER Model")}>
  Start Learning →
</button>
              </div>

            <div className="topic-card">
  <h3>💻 SQL</h3>
  <p>Learn SQL commands and database queries.</p>

  <button onClick={() => setActivePage("SQL")}>
    Start Learning →
  </button>
</div>
</div>

<button onClick={() => setActivePage("Subjects")}>
  ← Back to Subjects
</button>
</section>
   
/* ================= DBMS BASICS ================= */

) : activePage === "DBMS Basics" ? (
  <section className="card">
    <h2>📚 DBMS Basics</h2>

    <p>
      DBMS stands for Database Management System. It is software used
      to create, store, organize and manage data in databases.
    </p>

    <h3>What is a Database?</h3>

    <p>
      A database is an organized collection of data that can be
      easily accessed, managed and updated.
    </p>

    <h3>Advantages of DBMS</h3>

    <ul>
      <li>Reduces data redundancy</li>
      <li>Provides data security</li>
      <li>Allows easy data access</li>
      <li>Maintains data consistency</li>
      <li>Supports data backup and recovery</li>
    </ul>

    <h3>Examples of DBMS</h3>

    <ul>
      <li>MySQL</li>
      <li>Oracle</li>
      <li>PostgreSQL</li>
      <li>Microsoft SQL Server</li>
    </ul>

    <button onClick={() => setActivePage("DBMS")}>
      ← Back to DBMS
    </button>
  </section>


/* ================= DBMS KEYS ================= */

) : activePage === "DBMS Keys" ? (
  <section className="card">
    <h2>🔑 DBMS Keys</h2>

    <p>
      Keys are used to uniquely identify records and establish relationships between tables.
    </p>

    <h3>Types of Keys</h3>

    <ul>
      <li><b>Primary Key:</b> Uniquely identifies each record.</li>
      <li><b>Foreign Key:</b> Connects one table with another table.</li>
      <li><b>Candidate Key:</b> A key that can uniquely identify records.</li>
      <li><b>Alternate Key:</b> Candidate key not selected as the primary key.</li>
    </ul>

    <button onClick={() => setActivePage("DBMS")}>
      ← Back to DBMS
    </button>
  </section>



/* ================= ER MODEL ================= */

) : activePage === "ER Model" ? (
  <section className="card">
    <h2>🔗 ER Model</h2>

    <p>
      The Entity-Relationship (ER) Model is used to represent the structure
      and relationships of data in a database.
    </p>

    <h3>Main Components</h3>

    <ul>
      <li><b>Entity:</b> A real-world object such as Student or Employee.</li>
      <li><b>Attribute:</b> A property of an entity, such as Name or Age.</li>
      <li><b>Relationship:</b> Shows how entities are connected.</li>
    </ul>

    <h3>Example</h3>

    <p>
      Student → Enrolls → Course
    </p>

    <button onClick={() => setActivePage("DBMS")}>
      ← Back to DBMS
    </button>
  </section>

/* ================= SQL ================= */

) : activePage === "SQL" ? (
  <section className="card">
    <h2>💻 SQL</h2>

    <p>
      SQL is used to store, retrieve and manage data in databases.
    </p>

    <h3>Important SQL Commands</h3>

    <ul>
      <li>SELECT – retrieve data</li>
      <li>INSERT – add new data</li>
      <li>UPDATE – modify existing data</li>
      <li>DELETE – remove data</li>
    </ul>

    <h3>Example</h3>

    <pre>{`SELECT * FROM students;`}</pre>

    <button onClick={() => setActivePage("DBMS")}>
      ← Back to DBMS
    </button>
  </section>

 /* ================= SOFTWARE TESTING ================= */

) : activePage === "Software Testing" ? (
  <section className="card topic-detail-card">

    <h2>🧪 Software Testing</h2>

    <p>
      Software Testing is the process of evaluating a software system to
      identify errors and verify that it satisfies the specified
      requirements.
    </p>

    <h3>What is Software Testing?</h3>

    <p>
      Testing helps determine whether the developed software behaves as
      expected. It helps identify defects before the software is delivered
      to users.
    </p>

    <h3>Types of Testing</h3>

    <ul>
      <li>
        <strong>Unit Testing:</strong> Tests individual modules or
        components of a software system.
      </li>

      <li>
        <strong>Integration Testing:</strong> Tests whether different
        modules work correctly together.
      </li>

      <li>
        <strong>System Testing:</strong> Tests the complete software system
        as a whole.
      </li>

      <li>
        <strong>Acceptance Testing:</strong> Checks whether the software
        satisfies user and business requirements.
      </li>
    </ul>

    <h3>Testing Objectives</h3>

    <ul>
      <li>Find and identify software defects.</li>
      <li>Verify that software requirements are satisfied.</li>
      <li>Improve software quality and reliability.</li>
      <li>Ensure that the software behaves as expected.</li>
      <li>Reduce the possibility of failures after deployment.</li>
    </ul>

    <h3>Benefits of Software Testing</h3>

    <ul>
      <li>Improves software quality.</li>
      <li>Helps detect errors early.</li>
      <li>Increases reliability.</li>
      <li>Improves user satisfaction.</li>
      <li>Reduces maintenance problems.</li>
    </ul>

    <button onClick={() => setActivePage("Software Engineering")}>
      ← Back to Software Engineering
    </button>

  </section>

  /* ================= SOFTWARE DESIGN ================= */

) : activePage === "Software Design" ? (
  <section className="card topic-detail-card">

    <h2>🎨 Software Design</h2>

    <p>
      Software Design is the process of defining the architecture,
      components, modules, interfaces and data structures of a software
      system before implementation.
    </p>

    <h3>What is Software Design?</h3>

    <p>
      Software design converts the requirements of a software system into
      a detailed plan that developers can use to implement the system.
      It focuses on how different parts of the software will work together.
    </p>

    <h3>Important Design Principles</h3>

    <ul>
      <li>
        <strong>Modularity:</strong> Dividing a large system into smaller
        and manageable modules.
      </li>

      <li>
        <strong>Abstraction:</strong> Showing essential features while
        hiding unnecessary implementation details.
      </li>

      <li>
        <strong>Encapsulation:</strong> Combining data and related operations
        while restricting direct access to internal details.
      </li>

      <li>
        <strong>Low Coupling:</strong> Keeping dependencies between modules
        as low as possible.
      </li>

      <li>
        <strong>High Cohesion:</strong> Ensuring that the responsibilities
        within a module are closely related.
      </li>
    </ul>

    <h3>Goals of Software Design</h3>

    <ul>
      <li>Make software easy to understand.</li>
      <li>Reduce system complexity.</li>
      <li>Improve maintainability.</li>
      <li>Improve software reliability.</li>
      <li>Support future modifications.</li>
      <li>Promote reuse of software components.</li>
    </ul>

    <h3>Levels of Software Design</h3>

    <ul>
      <li>
        <strong>Architectural Design:</strong> Defines the overall structure
        and major components of the system.
      </li>

      <li>
        <strong>Detailed Design:</strong> Defines the internal logic,
        interfaces and interactions of individual components.
      </li>
    </ul>

    <button onClick={() => setActivePage("Software Engineering")}>
      ← Back to Software Engineering
    </button>

  </section>

/* ================= SRS ================= */

) : activePage === "SRS" ? (
  <section className="card topic-detail-card">

    <h2>📄 Software Requirements Specification (SRS)</h2>

    <p>
      Software Requirements Specification (SRS) is a document that
      describes the complete requirements of a software system. It defines
      what the system should do and the conditions under which it should
      operate.
    </p>

    <h3>What is SRS?</h3>

    <p>
      SRS acts as a communication document between the customer,
      developers, testers and other stakeholders. It provides a clear
      description of the expected behavior and requirements of the system.
    </p>

    <h3>Main Contents of SRS</h3>

    <ol>
      <li>
        <strong>Introduction:</strong> Describes the purpose, scope and
        objectives of the software system.
      </li>

      <li>
        <strong>Functional Requirements:</strong> Describes the functions
        and services that the system must provide.
      </li>

      <li>
        <strong>Non-Functional Requirements:</strong> Describes qualities
        such as performance, security, reliability and usability.
      </li>

      <li>
        <strong>System Requirements:</strong> Specifies hardware and
        software requirements needed to run the system.
      </li>

      <li>
        <strong>External Interfaces:</strong> Describes interaction between
        the software and users, hardware or other systems.
      </li>
    </ol>

    <h3>Characteristics of a Good SRS</h3>

    <ul>
      <li>Correct</li>
      <li>Complete</li>
      <li>Consistent</li>
      <li>Unambiguous</li>
      <li>Verifiable</li>
      <li>Modifiable</li>
      <li>Traceable</li>
    </ul>

    <h3>Importance of SRS</h3>

    <ul>
      <li>Provides a clear understanding of the software system.</li>
      <li>Improves communication between customers and developers.</li>
      <li>Helps developers understand what needs to be built.</li>
      <li>Provides a reference for software testing.</li>
      <li>Helps estimate project cost, time and resources.</li>
      <li>Reduces misunderstanding about system requirements.</li>
    </ul>

    <button onClick={() => setActivePage("Software Engineering")}>
      ← Back to Software Engineering
    </button>

  </section>




/* ================= WATERFALL MODEL ================= */

) : activePage === "Waterfall Model" ? (
  <section className="card topic-detail-card">

    <h2>🌊 Waterfall Model</h2>

    <p>
      The Waterfall Model is a traditional and sequential software
      development model. In this model, the development process is divided
      into different phases, and each phase is completed before the next
      phase begins.
    </p>

    <h3>What is Waterfall Model?</h3>

    <p>
      The Waterfall Model follows a linear approach to software development.
      Requirements are collected first, followed by system design,
      implementation, testing, deployment and maintenance.
    </p>

    <h3>Phases of Waterfall Model</h3>

    <ol>
      <li>
        <strong>Requirement Analysis:</strong> All software requirements
        are collected and documented.
      </li>

      <li>
        <strong>System Design:</strong> The system architecture, database,
        interfaces and other design details are prepared.
      </li>

      <li>
        <strong>Implementation:</strong> Developers write the program code
        according to the system design.
      </li>

      <li>
        <strong>Testing:</strong> The developed software is tested to find
        and fix errors and defects.
      </li>

      <li>
        <strong>Deployment:</strong> The completed software is delivered
        and installed for users.
      </li>

      <li>
        <strong>Maintenance:</strong> Changes, corrections and improvements
        are made after deployment.
      </li>
    </ol>

    <h3>Advantages</h3>

    <ul>
      <li>Simple and easy to understand.</li>
      <li>Each phase has clearly defined objectives.</li>
      <li>Easy to manage because of its sequential structure.</li>
      <li>Proper documentation is maintained.</li>
      <li>Suitable when requirements are clear and stable.</li>
    </ul>

    <h3>Disadvantages</h3>

    <ul>
      <li>Difficult to accommodate changing requirements.</li>
      <li>Testing starts after implementation is completed.</li>
      <li>Working software is available relatively late.</li>
      <li>Errors in early phases can become expensive to fix later.</li>
    </ul>

    <h3>When to Use Waterfall Model?</h3>

    <p>
      The Waterfall Model is suitable for projects where requirements are
      clearly defined, stable and unlikely to change during development.
    </p>

    <button onClick={() => setActivePage("Software Engineering")}>
      ← Back to Software Engineering
    </button>

  </section>

) : activePage === "Software Engineering" ? (
  <section className="card">

    <h2>⚙️ Software Engineering</h2>

    <p>
      Software Engineering is the systematic approach to designing,
      developing, testing and maintaining software systems.
    </p>

    <div className="topic-list">

      <div className="topic-card">
        <h3>🌊 Waterfall Model</h3>
        <p>Learn sequential software development.</p>
        <button onClick={() => setActivePage("Waterfall Model")}>
          Start Learning →
        </button>
      </div>

      <div className="topic-card">
        <h3>📄 SRS</h3>
        <p>Learn Software Requirement Specification.</p>
        <button onClick={() => setActivePage("SRS")}>
          Start Learning →
        </button>
      </div>

      <div className="topic-card">
        <h3>🏗️ Software Design</h3>
        <p>Learn design principles and architecture.</p>
        <button onClick={() => setActivePage("Software Design")}>
          Start Learning →
        </button>
      </div>

      <div className="topic-card">
        <h3>🧪 Software Testing</h3>
        <p>Learn testing methods and techniques.</p>
        <button onClick={() => setActivePage("Software Testing")}>
          Start Learning →
        </button>
      </div>

    </div>

    <button onClick={() => setActivePage("Subjects")}>
      ← Back to Subjects
    </button>

  </section>
) : activePage === "CPU" ? (
  <section className="card topic-detail-card">

    <h2>🧠 Central Processing Unit (CPU)</h2>

    <p>
      The Central Processing Unit (CPU) is the main processing unit of a
      computer. It executes instructions, performs calculations and
      controls the overall operation of the computer system.
    </p>

    <h3>Components of CPU</h3>

    <ul>
      <li>
        <strong>ALU (Arithmetic Logic Unit):</strong> Performs arithmetic
        operations and logical operations.
      </li>

      <li>
        <strong>Control Unit (CU):</strong> Controls and coordinates the
        execution of instructions.
      </li>

      <li>
        <strong>Registers:</strong> Small, high-speed storage locations
        inside the CPU used to hold temporary data and instructions.
      </li>

      <li>
        <strong>Cache Memory:</strong> High-speed memory that stores
        frequently used data and instructions.
      </li>
    </ul>

    <h3>Functions of CPU</h3>

    <ul>
      <li>Fetches instructions from memory.</li>
      <li>Decodes the instructions.</li>
      <li>Performs required operations.</li>
      <li>Stores the results of operations.</li>
      <li>Controls other components of the computer.</li>
    </ul>

    <h3>Instruction Cycle</h3>

    <p>
      The CPU generally follows three main steps:
    </p>

    <ol>
      <li><strong>Fetch:</strong> The instruction is fetched from memory.</li>
      <li><strong>Decode:</strong> The instruction is interpreted by the Control Unit.</li>
      <li><strong>Execute:</strong> The required operation is performed.</li>
    </ol>

    <h3>Importance of CPU</h3>

    <ul>
      <li>Processes instructions and data.</li>
      <li>Controls the operation of the computer.</li>
      <li>Performs arithmetic and logical operations.</li>
      <li>Coordinates communication between different components.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>

  </section>
) : activePage === "Memory" ? (
  <section className="card topic-detail-card">

    <h2>💾 Memory Organization</h2>

    <p>
      Memory is a storage unit of a computer system used to store data,
      instructions and results. It provides the CPU with the information
      required for processing.
    </p>

    <h3>Types of Memory</h3>

    <ul>
      <li>
        <strong>Primary Memory:</strong> Memory directly accessible by the
        CPU, such as RAM and ROM.
      </li>

      <li>
        <strong>Secondary Memory:</strong> Non-volatile storage used for
        permanent data storage, such as hard disks and SSDs.
      </li>

      <li>
        <strong>Cache Memory:</strong> Very high-speed memory that stores
        frequently used data and instructions.
      </li>
    </ul>

    <h3>Primary Memory</h3>

    <ul>
      <li>
        <strong>RAM:</strong> Temporary and volatile memory used to store
        currently running programs and data.
      </li>

      <li>
        <strong>ROM:</strong> Non-volatile memory that stores permanent
        instructions required for starting the computer.
      </li>
    </ul>

    <h3>Memory Hierarchy</h3>

    <p>
      Memory hierarchy arranges different types of memory according to
      speed, cost and storage capacity.
    </p>

    <ol>
      <li>Registers</li>
      <li>Cache Memory</li>
      <li>Main Memory (RAM)</li>
      <li>Secondary Memory</li>
    </ol>

    <h3>Functions of Memory</h3>

    <ul>
      <li>Stores data and instructions.</li>
      <li>Provides data to the CPU for processing.</li>
      <li>Stores intermediate and final results.</li>
      <li>Helps the computer execute programs efficiently.</li>
    </ul>

    <h3>Importance of Memory</h3>

    <ul>
      <li>Provides storage for programs and data.</li>
      <li>Supports fast access to required information.</li>
      <li>Helps improve overall system performance.</li>
      <li>Allows the CPU to process instructions efficiently.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>

  </section>
  ) : activePage === "Instruction Set" ? (
  <section className="card topic-detail-card">

    <h2>🔢 Instruction Set</h2>

    <p>
      An instruction set is a collection of instructions that a CPU can
      understand and execute. It defines the operations that a processor
      can perform.
    </p>

    <h3>Types of Instructions</h3>

    <ul>
      <li>
        <strong>Data Transfer Instructions:</strong> Used to transfer data
        between registers, memory and other locations.
      </li>

      <li>
        <strong>Arithmetic Instructions:</strong> Perform operations such
        as addition, subtraction, multiplication and division.
      </li>

      <li>
        <strong>Logical Instructions:</strong> Perform logical operations
        such as AND, OR, NOT and XOR.
      </li>

      <li>
        <strong>Control Transfer Instructions:</strong> Change the normal
        sequence of program execution, such as jump and branch operations.
      </li>
    </ul>

    <h3>Instruction Format</h3>

    <p>
      An instruction generally contains an opcode and operand information.
    </p>

    <ul>
      <li>
        <strong>Opcode:</strong> Specifies the operation to be performed.
      </li>

      <li>
        <strong>Operand:</strong> Specifies the data or location on which
        the operation is performed.
      </li>
    </ul>

    <h3>Instruction Cycle</h3>

    <ol>
      <li><strong>Fetch:</strong> The CPU fetches the instruction from memory.</li>
      <li><strong>Decode:</strong> The instruction is decoded by the Control Unit.</li>
      <li><strong>Execute:</strong> The CPU performs the required operation.</li>
    </ol>

    <h3>Importance of Instruction Set</h3>

    <ul>
      <li>Defines the operations supported by the processor.</li>
      <li>Provides instructions for executing programs.</li>
      <li>Controls data processing and movement.</li>
      <li>Helps programmers communicate with the processor.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>

  </section>

) : activePage === "I/O Organization" ? (
  <section className="card topic-detail-card">

    <h2>🔌 I/O Organization</h2>

    <p>
      I/O Organization deals with the communication and data transfer
      between the computer system and external input/output devices.
      It provides a way for the CPU and memory to communicate with
      peripheral devices.
    </p>

    <h3>Examples of I/O Devices</h3>

    <ul>
      <li><strong>Keyboard:</strong> Used to enter text and commands.</li>
      <li><strong>Mouse:</strong> Used to provide pointing and selection input.</li>
      <li><strong>Monitor:</strong> Displays information and output to the user.</li>
      <li><strong>Printer:</strong> Produces a physical copy of computer output.</li>
      <li><strong>Storage Devices:</strong> Used to store and transfer data.</li>
    </ul>

    <h3>I/O Methods</h3>

    <ul>
      <li>
        <strong>Programmed I/O:</strong> The CPU continuously checks the
        status of the I/O device and controls the complete data transfer.
      </li>

      <li>
        <strong>Interrupt-Driven I/O:</strong> The I/O device sends an
        interrupt signal to the CPU when it requires attention.
      </li>

      <li>
        <strong>DMA (Direct Memory Access):</strong> Allows data to be
        transferred directly between memory and an I/O device with
        minimal CPU involvement.
      </li>
    </ul>

    <h3>I/O Interface</h3>

    <p>
      An I/O interface acts as a communication link between the CPU or
      memory and peripheral devices. It manages data transfer and
      provides control and status information.
    </p>

    <h3>Functions of I/O Organization</h3>

    <ul>
      <li>Controls communication with I/O devices.</li>
      <li>Transfers data between the computer and peripheral devices.</li>
      <li>Provides status information about I/O devices.</li>
      <li>Coordinates input and output operations.</li>
      <li>Reduces unnecessary CPU involvement during data transfer.</li>/
    </ul>

    <h3>Importance of I/O Organization</h3>

    <ul>
      <li>Provides communication between the computer and external devices.</li>
      <li>Improves efficiency of data transfer.</li>
      <li>Allows different peripheral devices to work with the computer.</li>
      <li>Supports efficient input and output operations.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>

  </section>

  
/* ================= INSTRUCTION SET ================= */

) : activePage === "Instruction Set" ? (
  <section className="card">
    <h2>⚙️ Instruction Set</h2>

    <p>
      An instruction set is a collection of instructions that a processor
      can understand and execute.
    </p>

    <h3>Types of Instructions</h3>

    <ul>
      <li><b>Data Transfer:</b> Moves data between registers and memory.</li>
      <li><b>Arithmetic:</b> Performs addition, subtraction and other calculations.</li>
      <li><b>Logical:</b> Performs AND, OR, NOT and comparison operations.</li>
      <li><b>Control Transfer:</b> Changes the sequence of program execution.</li>
    </ul>

    <h3>Instruction Cycle</h3>

    <ul>
      <li>Fetch</li>
      <li>Decode</li>
      <li>Execute</li>
      <li>Store Result</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>
  </section>

/* ================= MEMORY ================= */

) : activePage === "Memory" ? (
  <section className="card">
    <h2>💾 Computer Memory</h2>

    <p>
      Computer memory is used to store data, instructions and results
      required by the CPU during program execution.
    </p>

    <h3>Types of Memory</h3>

    <ul>
      <li><b>Primary Memory:</b> RAM and ROM are directly accessible by the CPU.</li>
      <li><b>Secondary Memory:</b> Used for permanent storage of data.</li>
      <li><b>Cache Memory:</b> High-speed memory that stores frequently used data.</li>
    </ul>

    <h3>RAM vs ROM</h3>

    <ul>
      <li><b>RAM:</b> Volatile memory used for temporary data.</li>
      <li><b>ROM:</b> Non-volatile memory used to store permanent instructions.</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>
  </section>


/* ================= CPU ================= */

) : activePage === "CPU" ? (
  <section className="card">
    <h2>🧠 Central Processing Unit (CPU)</h2>

    <p>
      CPU is the main processing unit of a computer. It executes instructions
      and performs arithmetic and logical operations.
    </p>

    <h3>Main Components of CPU</h3>

    <ul>
      <li><b>ALU:</b> Performs arithmetic and logical operations.</li>
      <li><b>Control Unit:</b> Controls and coordinates computer operations.</li>
      <li><b>Registers:</b> Store temporary data and instructions.</li>
    </ul>

    <h3>Functions of CPU</h3>

    <ul>
      <li>Fetches instructions from memory</li>
      <li>Decodes instructions</li>
      <li>Executes instructions</li>
      <li>Stores the results</li>
    </ul>

    <button onClick={() => setActivePage("Computer Architecture")}>
      ← Back to Computer Architecture
    </button>
  </section>

/* ================= COMPUTER ARCHITECTURE ================= */

) : activePage === "Computer Architecture" ? (
  <section className="card">
    <h2>🖥️ Computer Architecture</h2>

    <p>
      Learn CPU, memory, instructions and computer organization.
    </p>

    <div className="topic-list">

      <div className="topic-card">
        <h3>🧠 CPU</h3>
        <p>Learn the basic components and working of a CPU.</p>
<button onClick={() => setActivePage("CPU")}>
  Start Learning →
</button>      </div>

      <div className="topic-card">
        <h3>💾 Memory</h3>
        <p>Learn primary and secondary memory concepts.</p>
        <button onClick={() => setActivePage("Memory")}>
  Start Learning →
</button>
      </div>

      <div className="topic-card">
        <h3>🔢 Instruction Set</h3>
        <p>Learn instructions and instruction formats.</p>
        <button onClick={() => setActivePage("Instruction Set")}>
  Start Learning →
</button>
      </div>

      <div className="topic-card">
        <h3>🔌 I/O Organization</h3>
        <p>Learn input and output organization.</p>
       <button onClick={() => setActivePage("I/O Organization")}>
  Start Learning →
</button>
      </div>

    </div>

    <button onClick={() => setActivePage("Subjects")}>
      ← Back to Subjects
    </button>
  </section>



        /* DATA STRUCTURES */

        ) : activePage === "Data Structures" ? (
          <section className="card">
            <h2>📘 Data Structures</h2>

            <p>
              Learn important data structures and their basic operations.
            </p>

            <div className="topic-list">
              <div className="topic-card">
                <h3>📊 Arrays</h3>
                <p>Learn array basics and operations.</p>
                <button onClick={() => setActivePage("Arrays")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>🔗 Linked List</h3>
                <p>Learn nodes, insertion and deletion.</p>
                <button onClick={() => setActivePage("Linked List")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>📚 Stack</h3>
                <p>Learn LIFO principle and operations.</p>
                <button onClick={() => setActivePage("Stack")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>🚶 Queue</h3>
                <p>Learn FIFO principle and operations.</p>
                <button onClick={() => setActivePage("Queue")}>
                  Start Learning →
                </button>
              </div>
            </div>

            <button onClick={() => setActivePage("Subjects")}>
              ← Back to Subjects
            </button>
          </section>

        /* ARRAYS */

        ) : activePage === "Arrays" ? (
          <section className="card">
            <h2>📊 Arrays</h2>

            <p>
              An array is a collection of elements stored in continuous
              memory locations.
            </p>

            <h3>Key Concepts</h3>

            <ul>
              <li>Stores multiple values.</li>
              <li>Elements are accessed using an index.</li>
              <li>Index usually starts from 0.</li>
              <li>Provides fast access to elements.</li>
            </ul>

            <h3>Example</h3>

            <pre>{`int numbers[5] = {10, 20, 30, 40, 50};`}</pre>

            <button onClick={() => setActivePage("Data Structures")}>
              ← Back to Data Structures
            </button>
          </section>

        /* LINKED LIST */

        ) : activePage === "Linked List" ? (
          <section className="card">
            <h2>🔗 Linked List</h2>

            <p>
              A Linked List is a linear data structure made up of nodes.
            </p>

            <h3>Key Concepts</h3>

            <ul>
              <li>Each element is called a node.</li>
              <li>Node contains data and a link.</li>
              <li>Nodes are connected with each other.</li>
              <li>Insertion and deletion are easier.</li>
            </ul>

            <h3>Types</h3>

            <ul>
              <li>Singly Linked List</li>
              <li>Doubly Linked List</li>
              <li>Circular Linked List</li>
            </ul>

            <button onClick={() => setActivePage("Data Structures")}>
              ← Back to Data Structures
            </button>
          </section>

        /* STACK */

        ) : activePage === "Stack" ? (
          <StackPage setActivePage={setActivePage} />

        /* QUEUE */

        ) : activePage === "Queue" ? (
          <QueuePage setActivePage={setActivePage} />

        /* OPERATING SYSTEM */

        ) : activePage === "Operating System" ? (
          <section className="card">
            <h2>💻 Operating System</h2>

            <p>
              Learn how an operating system manages computer resources.
            </p>

            <div className="topic-list">
              <div className="topic-card">
                <h3>⚙️ Process Management</h3>
                <p>Learn processes and process scheduling.</p>
                <button onClick={() => setActivePage("Process Management")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>🧠 Memory Management</h3>
                <p>Learn paging and virtual memory.</p>
                <button onClick={() => setActivePage("Memory Management")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>📁 File System</h3>
                <p>Learn files and directories.</p>
                <button onClick={() => setActivePage("File System")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>🔒 Deadlock</h3>
                <p>Learn deadlock conditions and prevention.</p>
                <button onClick={() => setActivePage("Deadlock")}>
                  Start Learning →
                </button>
              </div>

              <div className="topic-card">
                <h3>🖥️ CPU Scheduling</h3>
                <p>Learn FCFS, SJF, Round Robin and Priority.</p>
                <button onClick={() => setActivePage("CPU Scheduling")}>
                  Open Scheduler →
                </button>
              </div>
            </div>

            <button onClick={() => setActivePage("Subjects")}>
              ← Back to Subjects
            </button>
          </section>

        /* PROCESS MANAGEMENT */

) : activePage === "Process Management" ? (
  <section className="card topic-detail-card">

    <h2>⚙️ Process Management</h2>

    <p>
      Process Management is an important function of an Operating System.
      It is responsible for creating, scheduling, executing and terminating
      processes efficiently.
    </p>

    <h3>What is a Process?</h3>

    <p>
      A process is a program that is currently in execution. A process
      requires CPU time, memory and other system resources to complete
      its execution.
    </p>

    <h3>Process States</h3>

    <p>
      During its lifetime, a process passes through different states:
    </p>

    <ul>
      <li><strong>New:</strong> The process is being created.</li>
      <li><strong>Ready:</strong> The process is waiting for CPU allocation.</li>
      <li><strong>Running:</strong> The process is currently being executed by the CPU.</li>
      <li><strong>Waiting:</strong> The process is waiting for an event or I/O operation.</li>
      <li><strong>Terminated:</strong> The process has completed its execution.</li>
    </ul>

    <h3>Process Control Block (PCB)</h3>

    <p>
      PCB is a data structure maintained by the operating system for every
      process. It contains important information such as Process ID,
      process state, CPU registers, program counter and scheduling information.
    </p>

    <h3>Process Scheduling</h3>

    <p>
      Process scheduling is the method used by the operating system to select
      a process from the ready queue and allocate the CPU to it.
    </p>

    <h3>Context Switching</h3>

    <p>
      Context switching is the process of saving the state of a running
      process and loading the saved state of another process.
    </p>

    <h3>Process State Flow</h3>

    <div className="process-states">
      <div className="process-state">🆕 New</div>
      <div className="process-arrow">→</div>
      <div className="process-state">📋 Ready</div>
      <div className="process-arrow">→</div>
      <div className="process-state">▶️ Running</div>
      <div className="process-arrow">→</div>
      <div className="process-state">⏳ Waiting</div>
      <div className="process-arrow">→</div>
      <div className="process-state">✅ Terminated</div>
    </div>

    <button onClick={() => setActivePage("Operating System")}>
      ← Back to Operating System
    </button>

  </section>



        /* MEMORY */

) : activePage === "Memory Management" ? (
  <section className="card topic-detail-card">

    <h2>🧠 Memory Management</h2>

    <p>
      Memory Management is an important function of an Operating System.
      It manages the main memory and keeps track of which parts of memory
      are being used by which processes.
    </p>

    <h3>What is Memory Management?</h3>

    <p>
      Memory Management is the process of allocating and deallocating memory
      space to processes. It ensures efficient utilization of memory and
      provides protection between different processes.
    </p>

    <h3>Memory Allocation</h3>

    <p>
      Memory allocation is the process of assigning available memory space
      to processes. The operating system allocates memory when a process
      requires it and releases the memory after the process finishes.
    </p>

    <h3>Paging</h3>

    <p>
      Paging is a memory management technique in which physical memory is
      divided into fixed-size blocks called frames and logical memory is
      divided into pages.
    </p>

    <h3>Segmentation</h3>

    <p>
      Segmentation divides a program into logical sections called segments.
      Examples include code, data and stack segments.
    </p>

    <h3>Virtual Memory</h3>

    <p>
      Virtual Memory is a technique that allows a computer to execute
      programs that are larger than the available physical memory by using
      secondary storage as an extension of main memory.
    </p>

    <h3>Page Replacement</h3>

    <p>
      Page replacement is used when a required page is not present in
      physical memory and a new page needs to be loaded. The operating
      system selects an existing page to replace.
    </p>

    <h3>Key Points</h3>

    <ul>
      <li>Manages main memory efficiently.</li>
      <li>Allocates and deallocates memory for processes.</li>
      <li>Provides memory protection.</li>
      <li>Supports techniques such as Paging and Segmentation.</li>
      <li>Supports Virtual Memory for efficient memory utilization.</li>
    </ul>

    <button onClick={() => setActivePage("Operating System")}>
      ← Back to Operating System
    </button>

  </section>
/* FILE SYSTEM */

) : activePage === "File System" ? (
  <section className="card topic-detail-card">

    <h2>📁 File System</h2>

    <p>
      A File System is an important part of an Operating System that
      organizes, stores, manages and provides access to files and directories
      on a storage device.
    </p>

    <h3>What is a File?</h3>

    <p>
      A file is a collection of related information stored on a storage
      device. Files may contain text, programs, images, videos or other data.
    </p>

    <h3>Directories</h3>

    <p>
      A directory is used to organize and manage files. It can contain files
      as well as other directories called subdirectories.
    </p>

    <h3>File Organization</h3>

    <p>
      File organization defines how data is arranged and stored inside a
      file. Proper organization helps the operating system access data
      efficiently.
    </p>

    <h3>File Access Methods</h3>

    <ul>
      <li><strong>Sequential Access:</strong> Data is accessed in a sequential order.</li>
      <li><strong>Direct Access:</strong> Data can be accessed directly from a specific location.</li>
      <li><strong>Indexed Access:</strong> An index is used to locate required data.</li>
    </ul>

    <h3>File Permissions</h3>

    <p>
      File permissions control who can read, write or execute a file.
      They help protect files from unauthorized access.
    </p>

    <h3>Functions of File System</h3>

    <ul>
      <li>File creation and deletion</li>
      <li>Directory management</li>
      <li>File access and storage</li>
      <li>File protection</li>
      <li>Management of free storage space</li>
    </ul>

    <button onClick={() => setActivePage("Operating System")}>
      ← Back to Operating System
    </button>

  </section>
        /* DEADLOCK */

) : activePage === "Deadlock" ? (
  <section className="card topic-detail-card">

    <h2>🔒 Deadlock</h2>

    <p>
      Deadlock is a situation in an Operating System where two or more
      processes wait indefinitely for resources held by each other.
      As a result, none of the processes can continue their execution.
    </p>

    <h3>Necessary Conditions of Deadlock</h3>

    <p>
      Deadlock can occur only when all four of the following conditions
      exist simultaneously:
    </p>

    <ul>
      <li>
        <strong>Mutual Exclusion:</strong> A resource can be used by only
        one process at a time.
      </li>

      <li>
        <strong>Hold and Wait:</strong> A process holds at least one resource
        while waiting for another resource.
      </li>

      <li>
        <strong>No Preemption:</strong> A resource cannot be forcibly taken
        away from a process.
      </li>

      <li>
        <strong>Circular Wait:</strong> Processes form a circular chain where
        each process waits for a resource held by the next process.
      </li>
    </ul>

    <h3>Deadlock Prevention</h3>

    <p>
      Deadlock prevention techniques try to ensure that at least one of the
      four necessary conditions does not occur.
    </p>

    <ul>
      <li>Prevent mutual exclusion where possible.</li>
      <li>Avoid holding resources while waiting for others.</li>
      <li>Allow resource preemption when possible.</li>
      <li>Prevent circular waiting by ordering resources.</li>
    </ul>

    <h3>Deadlock Handling</h3>

    <p>
      Operating systems can handle deadlocks using prevention, avoidance,
      detection and recovery techniques depending on the system requirements.
    </p>

    <button onClick={() => setActivePage("Operating System")}>
      ← Back to Operating System
    </button>

  </section>
        /* FCFS */

        ) : activePage === "CPU Scheduling" ? (
          <FCFSPage
            setActivePage={setActivePage}
            activePage={activePage}
          />

        /* SJF */

        ) : activePage === "SJF" ? (
          <SJFPage
            setActivePage={setActivePage}
            activePage={activePage}
          />

        /* ROUND ROBIN */

        ) : activePage === "Round Robin" ? (
          <RoundRobinPage
            setActivePage={setActivePage}
            activePage={activePage}
          />

        /* PRIORITY */

        ) : activePage === "Priority Scheduling" ? (
          <PriorityPage
            setActivePage={setActivePage}
            activePage={activePage}
          />

        /* TASKS */

        ) : activePage === "Tasks" ? (
          <TasksPage tasks={tasks} setTasks={setTasks} />

        /* PROGRESS */

        ) : activePage === "Progress" ? (
          <ProgressPage tasks={tasks} />

        /* TIMETABLE */

        ) : activePage === "Timetable" ? (
          <TimetablePage
            schedule={schedule}
            setSchedule={setSchedule}
          />

        /* NOTES */

        ) : activePage === "Notes" ? (
          <NotesPage notes={notes} setNotes={setNotes} />

        /* SETTINGS */

        ) : activePage === "Settings" ? (
          <SettingsPage
  studentName={studentName}
  setStudentName={setStudentName}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
        /* DASHBOARD */

        ) : (
          <>
            <header>
<h2>{greeting}, {studentName} 👋</h2>
  <p>Let's make today productive.</p>
</header>

<div className="global-search">
  <input
    type="text"
    placeholder="🔍 Search StudyHub..."
    value={searchTerm}
    onChange={(e) => {
      const value = e.target.value;
      setSearchTerm(value);

const search = value.toLowerCase();

if (
  search.includes("dsa") ||
  search.includes("data structure")
) {
  setActivePage("Data Structures");

} else if (
  search.includes("operating system") ||
  search === "os"
) {
  setActivePage("Operating System");

} else if (
  search.includes("computer network") ||
  search === "cn" ||
  search.includes("network")
) {
  setActivePage("Computer Networks");

} else if (
  search.includes("dbms") ||
  search.includes("database")
) {
  setActivePage("DBMS");

} else if (
  search.includes("software engineering") ||
  search === "se"
) {
  setActivePage("Software Engineering");

} else if (
  search.includes("computer architecture") ||
  search === "coa" ||
  search.includes("architecture")
) {
  setActivePage("Computer Architecture");

} else if (
  search.includes("notes") ||
  search.includes("note")
) {
  setActivePage("Notes");

} else if (
  search.includes("tasks") ||
  search.includes("task")
) {
  setActivePage("Tasks");

} else if (
  search.includes("timetable") ||
  search.includes("schedule")
) {
  setActivePage("Timetable");

} else if (
  search.includes("progress")
) {
  setActivePage("Progress");

} else if (
  search.includes("settings")
) {
  setActivePage("Settings");
}
    }}
  />

  {searchTerm.trim() !== "" && (
    <div className="search-results">
      <h4>Search Results</h4>

      {searchResults
        .filter((item) =>
          item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
        .map((item) => (
          <button
            key={item.page}
            onClick={() => {
              setActivePage(item.page);
              setSearchTerm("");
            }}
          >
            {item.name}
          </button>
        ))}

      {searchResults.filter((item) =>
        item.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ).length === 0 && <p>No results found.</p>}
    </div>
  )}
</div>

            <section className="stats">
              <div className="stat-card">
                <h3>6</h3>
                <p>Subjects</p>
              </div>

              <div className="stat-card">
                <h3>{tasks.length}</h3>
                <p>Tasks</p>
              </div>

              <div className="stat-card">
                <h3>{notes.length}</h3>
                <p>Notes</p>
              </div>

              <div className="stat-card">
                <h3>{progress}%</h3>
                <p>Progress</p>
              </div>
            </section>

<section className="card quick-actions">
  <h2>⚡ Quick Actions</h2>

  <div className="quick-actions-buttons">
    <button onClick={() => setActivePage("Notes")}>
      📝 Add Note
    </button>

    <button onClick={() => setActivePage("Tasks")}>
      ✅ Add Task
    </button>

    <button onClick={() => setActivePage("Timetable")}>
      📅 Add Schedule
    </button>
  </div>
</section>
            <section className="dashboard-grid">
              <div className="card">
                <h2>Today's Tasks</h2>

                {tasks.length === 0 ? (
                  <p>No tasks available.</p>
                ) : (
                  tasks.map((task) => (
                    <div className="task" key={task.id}>
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task.id)}
                      />

                      <span className={task.done ? "completed" : ""}>
                        {task.title}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="card">
                <h2>Study Progress</h2>
                <p className="progress-summary">
  {completedTasks} of {tasks.length} tasks completed
</p>

                <div
                  className="progress-circle"
                  style={{
                    background: `conic-gradient(#4f46e5 ${progress}%, #e5e7eb ${progress}% 100%)`,
                  }}
                >
                  <span>{progress}%</span>
                </div>

                <p>Keep going! You are doing great.</p>
              </div>
            </section>

            <section className="card dashboard-schedu">
              <h2>📅 Today's Schedule</h2>

              {schedule.filter(
                (item) =>
                  item.day ===
                  new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                  })
              ).length === 0 ? (
                <p>No schedule for today.</p>
              ) : (
                schedule
                  .filter(
                    (item) =>
                      item.day ===
                      new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                      })
                  )
                  .map((item) => (
                    <p key={item.id}>
                      <strong>{item.time}</strong> — {item.subject}
                    </p>
                  ))
              )}
            </section>

            <section className="card recent-notes">
  <h2>📝 Recent Notes</h2>

  {notes.length === 0 ? (
    <p>No notes available.</p>
  ) : (
    notes.slice(-3).reverse().map((note) => (
      <div className="recent-note" key={note.id}>
        <h4>{note.title}</h4>
        <p>{note.content}</p>
      </div>
    ))
  )}

  
</section>

            <section className="card exam">
              <h2>Upcoming Exam</h2>
              <h3>Computer Networks</h3>
              <p>25 September 2026</p>
              <p>{daysLeft} days left</p>
            </section>
          </>
        )}
      </main>
    </div>
  );
}


/* ================= STACK ================= */

function StackPage({ setActivePage }) {
  const [stack, setStack] = useState([10, 20, 30]);
  const [value, setValue] = useState("");

  const pushElement = () => {
    if (value === "") return;

    setStack([...stack, Number(value)]);
    setValue("");
  };

  const popElement = () => {
    if (stack.length === 0) return;

    setStack(stack.slice(0, -1));
  };

  return (
    <section className="card">
      <h2>📚 Stack Visualizer</h2>

      <p>Stack follows the LIFO principle.</p>

      <div className="stack-controls">
        <input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={pushElement}>Push</button>
        <button onClick={popElement}>Pop</button>
      </div>

      <h3>Stack</h3>

      <div className="stack-container">
        {stack.length === 0 ? (
          <p>Stack is empty</p>
        ) : (
          [...stack].reverse().map((item, index) => (
            <div className="stack-item" key={index}>
              {item}
            </div>
          ))
        )}
      </div>

      <p>
        <strong>Top:</strong>{" "}
        {stack.length > 0 ? stack[stack.length - 1] : "Empty"}
      </p>

      <button onClick={() => setActivePage("Data Structures")}>
        ← Back to Data Structures
      </button>
    </section>
  );
}


/* ================= QUEUE ================= */

function QueuePage({ setActivePage }) {
  const [queue, setQueue] = useState([10, 20, 30]);
  const [value, setValue] = useState("");

  const enqueueElement = () => {
    if (value === "") return;

    setQueue([...queue, Number(value)]);
    setValue("");
  };

  const dequeueElement = () => {
    if (queue.length === 0) return;

    setQueue(queue.slice(1));
  };

  return (
    <section className="card">
      <h2>🚶 Queue Visualizer</h2>

      <p>Queue follows the FIFO principle.</p>

      <div className="queue-controls">
        <input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={enqueueElement}>Enqueue</button>
        <button onClick={dequeueElement}>Dequeue</button>
      </div>

      <h3>Queue</h3>

      <div className="queue-container">
        {queue.length === 0 ? (
          <p>Queue is empty</p>
        ) : (
          queue.map((item, index) => (
            <div className="queue-item" key={index}>
              {item}
            </div>
          ))
        )}
      </div>

      <p>
        <strong>Front:</strong>{" "}
        {queue.length > 0 ? queue[0] : "Empty"}
      </p>

      <p>
        <strong>Rear:</strong>{" "}
        {queue.length > 0 ? queue[queue.length - 1] : "Empty"}
      </p>

      <button onClick={() => setActivePage("Data Structures")}>
        ← Back to Data Structures
      </button>
    </section>
  );
}


/* ================= SCHEDULING NAV ================= */

function SchedulingNav({ setActivePage, activePage }) {
  return (
    <div className="scheduling-buttons">
      <button
        className={activePage === "CPU Scheduling" ? "active-algorithm" : ""}
        onClick={() => setActivePage("CPU Scheduling")}
      >
        FCFS
      </button>

      <button
        className={activePage === "SJF" ? "active-algorithm" : ""}
        onClick={() => setActivePage("SJF")}
      >
        SJF
      </button>

      <button
        className={activePage === "Round Robin" ? "active-algorithm" : ""}
        onClick={() => setActivePage("Round Robin")}
      >
        Round Robin
      </button>

      <button
        className={
          activePage === "Priority Scheduling"
            ? "active-algorithm"
            : ""
        }
        onClick={() => setActivePage("Priority Scheduling")}
      >
        Priority
      </button>
    </div>
  );
}


/* ================= FCFS ================= */

function FCFSPage({ setActivePage, activePage }) {
  const [processName, setProcessName] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [processes, setProcesses] = useState([]);

  const addProcess = () => {
    if (processName.trim() === "" || Number(burstTime) <= 0) return;

    setProcesses([
      ...processes,
      {
        id: Date.now(),
        name: processName.trim(),
        burstTime: Number(burstTime),
      },
    ]);

    setProcessName("");
    setBurstTime("");
  };

  const deleteProcess = (id) => {
    setProcesses(processes.filter((process) => process.id !== id));
  };

  let currentTime = 0;

  const calculatedProcesses = processes.map((process) => {
    const waitingTime = currentTime;

    currentTime += process.burstTime;

    return {
      ...process,
      waitingTime,
      turnaroundTime: currentTime,
    };
  });

  const averageWaitingTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.waitingTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  const averageTurnaroundTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.turnaroundTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  return (
    <section className="card">
      <h2>🖥️ CPU Scheduling</h2>

      <p>
        FCFS executes processes in the order in which they arrive.
      </p>

      <h3>📊 FCFS Scheduler</h3>

      <div className="fcfs-box">
        <input
          type="text"
          placeholder="Process Name"
          value={processName}
          onChange={(e) => setProcessName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Burst Time"
          value={burstTime}
          onChange={(e) => setBurstTime(e.target.value)}
        />

        <button onClick={addProcess}>+ Add Process</button>
      </div>

      <h3>📋 Process Queue</h3>

      <div className="process-list">
        {processes.length === 0 ? (
          <p>No processes added yet.</p>
        ) : (
          processes.map((process) => (
            <div className="process-item" key={process.id}>
              <strong>{process.name}</strong>
              <span>Burst Time: {process.burstTime}</span>

              <button onClick={() => deleteProcess(process.id)}>
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {processes.length > 0 && (
        <>
          <h3>📈 FCFS Result</h3>

          <table className="fcfs-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Burst Time</th>
                <th>Waiting Time</th>
                <th>Turnaround Time</th>
              </tr>
            </thead>

            <tbody>
              {calculatedProcesses.map((process) => (
                <tr key={process.id}>
                  <td>{process.name}</td>
                  <td>{process.burstTime}</td>
                  <td>{process.waitingTime}</td>
                  <td>{process.turnaroundTime}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>📊 Gantt Chart</h3>

          <div className="gantt-chart">
            {calculatedProcesses.map((process) => (
              <div className="gantt-item" key={process.id}>
                <strong>{process.name}</strong>
                <span>{process.burstTime}</span>
              </div>
            ))}
          </div>

          <div className="gantt-times">
            <span>0</span>

            {calculatedProcesses.map((process) => (
              <span key={process.id}>
                {process.turnaroundTime}
              </span>
            ))}
          </div>

          <div className="fcfs-summary">
            <p>
              <strong>Average Waiting Time:</strong>
              {averageWaitingTime}
            </p>

            <p>
              <strong>Average Turnaround Time:</strong>
              {averageTurnaroundTime}
            </p>
          </div>
        </>
      )}

      <SchedulingNav
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <button onClick={() => setActivePage("Operating System")}>
        ← Back to Operating System
      </button>
    </section>
  );
}


/* ================= SJF ================= */

function SJFPage({ setActivePage, activePage }) {
  const [processName, setProcessName] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [processes, setProcesses] = useState([]);

  const addProcess = () => {
    if (processName.trim() === "" || Number(burstTime) <= 0) return;

    setProcesses([
      ...processes,
      {
        id: Date.now(),
        name: processName.trim(),
        burstTime: Number(burstTime),
      },
    ]);

    setProcessName("");
    setBurstTime("");
  };

  const deleteProcess = (id) => {
    setProcesses(processes.filter((process) => process.id !== id));
  };

  let currentTime = 0;

  const calculatedProcesses = [...processes]
    .sort((a, b) => a.burstTime - b.burstTime)
    .map((process) => {
      const waitingTime = currentTime;

      currentTime += process.burstTime;

      return {
        ...process,
        waitingTime,
        turnaroundTime: currentTime,
      };
    });

  const averageWaitingTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.waitingTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  const averageTurnaroundTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.turnaroundTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  return (
    <section className="card">
      <h2>🖥️ CPU Scheduling</h2>

      <p>SJF selects the process with the shortest burst time first.</p>

      <p className="algorithm-info">
        Scheduling Method: <strong>Non-Preemptive SJF</strong>
      </p>

      <div className="fcfs-box">
        <input
          type="text"
          placeholder="Process Name"
          value={processName}
          onChange={(e) => setProcessName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Burst Time"
          value={burstTime}
          onChange={(e) => setBurstTime(e.target.value)}
        />

        <button onClick={addProcess}>+ Add Process</button>
      </div>

      <h3>📋 Process Queue</h3>

      <div className="process-list">
        {processes.length === 0 ? (
          <p>No processes added yet.</p>
        ) : (
          processes.map((process) => (
            <div className="process-item" key={process.id}>
              <strong>{process.name}</strong>
              <span>Burst Time: {process.burstTime}</span>

              <button onClick={() => deleteProcess(process.id)}>
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {processes.length > 0 && (
        <>
          <h3>📈 SJF Result</h3>

          <table className="fcfs-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Burst Time</th>
                <th>Waiting Time</th>
                <th>Turnaround Time</th>
              </tr>
            </thead>

            <tbody>
              {calculatedProcesses.map((process) => (
                <tr key={process.id}>
                  <td>{process.name}</td>
                  <td>{process.burstTime}</td>
                  <td>{process.waitingTime}</td>
                  <td>{process.turnaroundTime}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>📊 Gantt Chart</h3>

          <div className="gantt-chart">
            {calculatedProcesses.map((process) => (
              <div className="gantt-item" key={process.id}>
                <strong>{process.name}</strong>
                <span>{process.burstTime}</span>
              </div>
            ))}
          </div>

          <div className="gantt-times">
            <span>0</span>

            {calculatedProcesses.map((process) => (
              <span key={process.id}>
                {process.turnaroundTime}
              </span>
            ))}
          </div>

          <div className="fcfs-summary">
            <p>
              <strong>Average Waiting Time:</strong>
              {averageWaitingTime}
            </p>

            <p>
              <strong>Average Turnaround Time:</strong>
              {averageTurnaroundTime}
            </p>
          </div>
        </>
      )}

      <SchedulingNav
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <button onClick={() => setActivePage("Operating System")}>
        ← Back to Operating System
      </button>
    </section>
  );
}


/* ================= ROUND ROBIN ================= */

function RoundRobinPage({ setActivePage, activePage }) {
  const [processName, setProcessName] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [quantum, setQuantum] = useState("");
  const [processes, setProcesses] = useState([]);

  const addProcess = () => {
    if (processName.trim() === "" || Number(burstTime) <= 0) return;

    setProcesses([
      ...processes,
      {
        id: Date.now(),
        name: processName.trim(),
        burstTime: Number(burstTime),
      },
    ]);

    setProcessName("");
    setBurstTime("");
  };

  const deleteProcess = (id) => {
    setProcesses(processes.filter((process) => process.id !== id));
  };

  const calculateRoundRobin = () => {
    if (processes.length === 0 || Number(quantum) <= 0) {
      return { results: [], timeline: [] };
    }

    const queue = processes.map((process) => ({
      ...process,
      remainingTime: process.burstTime,
      waitingTime: 0,
      turnaroundTime: 0,
    }));

    const timeline = [];

    let currentTime = 0;
    let completed = 0;

    while (completed < queue.length) {
      let progressMade = false;

      for (let i = 0; i < queue.length; i++) {
        const process = queue[i];

        if (process.remainingTime > 0) {
          progressMade = true;

          const startTime = currentTime;

          const executionTime = Math.min(
            Number(quantum),
            process.remainingTime
          );

          currentTime += executionTime;
          process.remainingTime -= executionTime;

          timeline.push({
            name: process.name,
            start: startTime,
            end: currentTime,
          });

          if (process.remainingTime === 0) {
            process.turnaroundTime = currentTime;

            process.waitingTime =
              process.turnaroundTime - process.burstTime;

            completed++;
          }
        }
      }

      if (!progressMade) break;
    }

    return {
      results: queue,
      timeline,
    };
  };

  const calculation = calculateRoundRobin();

  const calculatedProcesses = calculation.results;
  const timeline = calculation.timeline;

  const averageWaitingTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.waitingTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  const averageTurnaroundTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.turnaroundTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  return (
    <section className="card">
      <h2>🖥️ CPU Scheduling</h2>

      <p>
        Round Robin gives each process a fixed time quantum.
      </p>

      <p className="algorithm-info">
        Scheduling Method: <strong>Preemptive Round Robin</strong>
      </p>

      <div className="fcfs-box">
        <input
          type="text"
          placeholder="Process Name"
          value={processName}
          onChange={(e) => setProcessName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Burst Time"
          value={burstTime}
          onChange={(e) => setBurstTime(e.target.value)}
        />

        <input
          type="number"
          placeholder="Time Quantum"
          value={quantum}
          onChange={(e) => setQuantum(e.target.value)}
        />

        <button onClick={addProcess}>+ Add Process</button>
      </div>

      <h3>📋 Process Queue</h3>

      <div className="process-list">
        {processes.length === 0 ? (
          <p>No processes added yet.</p>
        ) : (
          processes.map((process) => (
            <div className="process-item" key={process.id}>
              <strong>{process.name}</strong>
              <span>Burst Time: {process.burstTime}</span>

              <button onClick={() => deleteProcess(process.id)}>
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {processes.length > 0 && Number(quantum) > 0 && (
        <>
          <h3>📈 Round Robin Result</h3>

          <table className="fcfs-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Burst Time</th>
                <th>Waiting Time</th>
                <th>Turnaround Time</th>
              </tr>
            </thead>

            <tbody>
              {calculatedProcesses.map((process) => (
                <tr key={process.id}>
                  <td>{process.name}</td>
                  <td>{process.burstTime}</td>
                  <td>{process.waitingTime}</td>
                  <td>{process.turnaroundTime}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>📊 Gantt Chart</h3>

          <div className="gantt-chart">
            {timeline.map((item, index) => (
              <div
                className="gantt-item"
                key={`${item.name}-${index}`}
              >
                <strong>{item.name}</strong>
                <span>
                  {item.start} - {item.end}
                </span>
              </div>
            ))}
          </div>

          <div className="fcfs-summary">
            <p>
              <strong>Average Waiting Time:</strong>
              {averageWaitingTime}
            </p>

            <p>
              <strong>Average Turnaround Time:</strong>
              {averageTurnaroundTime}
            </p>
          </div>
        </>
      )}

      <SchedulingNav
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <button onClick={() => setActivePage("Operating System")}>
        ← Back to Operating System
      </button>
    </section>
  );
}


/* ================= PRIORITY ================= */

function PriorityPage({ setActivePage, activePage }) {
  const [processName, setProcessName] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [priority, setPriority] = useState("");
  const [processes, setProcesses] = useState([]);

  const addProcess = () => {
    if (
      processName.trim() === "" ||
      Number(burstTime) <= 0 ||
      priority === ""
    ) {
      return;
    }

    setProcesses([
      ...processes,
      {
        id: Date.now(),
        name: processName.trim(),
        burstTime: Number(burstTime),
        priority: Number(priority),
      },
    ]);

    setProcessName("");
    setBurstTime("");
    setPriority("");
  };

  const deleteProcess = (id) => {
    setProcesses(processes.filter((process) => process.id !== id));
  };

  let currentTime = 0;

  const calculatedProcesses = [...processes]
    .sort((a, b) => a.priority - b.priority)
    .map((process) => {
      const waitingTime = currentTime;

      currentTime += process.burstTime;

      return {
        ...process,
        waitingTime,
        turnaroundTime: currentTime,
      };
    });

  const averageWaitingTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.waitingTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  const averageTurnaroundTime =
    calculatedProcesses.length > 0
      ? (
          calculatedProcesses.reduce(
            (sum, process) => sum + process.turnaroundTime,
            0
          ) / calculatedProcesses.length
        ).toFixed(2)
      : "0.00";

  return (
    <section className="card">
      <h2>🖥️ CPU Scheduling</h2>

      <p>
        Priority Scheduling executes the process according to its
        priority.
      </p>

      <p className="algorithm-info">
        Scheduling Method: <strong>Non-Preemptive Priority</strong>
      </p>

      <p>
        <strong>Lower priority number = Higher priority</strong>
      </p>

      <div className="fcfs-box">
        <input
          type="text"
          placeholder="Process Name"
          value={processName}
          onChange={(e) => setProcessName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Burst Time"
          value={burstTime}
          onChange={(e) => setBurstTime(e.target.value)}
        />

        <input
          type="number"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />

        <button onClick={addProcess}>+ Add Process</button>
      </div>

      <h3>📋 Process Queue</h3>

      <div className="process-list">
        {processes.length === 0 ? (
          <p>No processes added yet.</p>
        ) : (
          processes.map((process) => (
            <div className="process-item" key={process.id}>
              <strong>{process.name}</strong>

              <span>BT: {process.burstTime}</span>

              <span>Priority: {process.priority}</span>

              <button onClick={() => deleteProcess(process.id)}>
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {calculatedProcesses.length > 0 && (
        <>
          <h3>📈 Priority Result</h3>

          <table className="fcfs-table">
            <thead>
              <tr>
                <th>Process</th>
                <th>Burst Time</th>
                <th>Priority</th>
                <th>Waiting Time</th>
                <th>Turnaround Time</th>
              </tr>
            </thead>

            <tbody>
              {calculatedProcesses.map((process) => (
                <tr key={process.id}>
                  <td>{process.name}</td>
                  <td>{process.burstTime}</td>
                  <td>{process.priority}</td>
                  <td>{process.waitingTime}</td>
                  <td>{process.turnaroundTime}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>📊 Gantt Chart</h3>

          <div className="gantt-chart">
            {calculatedProcesses.map((process) => (
              <div className="gantt-item" key={process.id}>
                <strong>{process.name}</strong>

                <span>
                  {process.waitingTime} - {process.turnaroundTime}
                </span>
              </div>
            ))}
          </div>

          <div className="gantt-times">
            <span>0</span>

            {calculatedProcesses.map((process) => (
              <span key={process.id}>
                {process.turnaroundTime}
              </span>
            ))}
          </div>

          <div className="fcfs-summary">
            <p>
              <strong>Average Waiting Time:</strong>
              {averageWaitingTime}
            </p>

            <p>
              <strong>Average Turnaround Time:</strong>
              {averageTurnaroundTime}
            </p>
          </div>
        </>
      )}

      <SchedulingNav
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <button onClick={() => setActivePage("Operating System")}>
        ← Back to Operating System
      </button>
    </section>
  );
}


/* ================= NOTES ================= */

function NotesPage({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const saveNote = () => {
    if (title.trim() === "" || content.trim() === "") return;

    if (editingId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? { ...note, title, content }
            : note
        )
      );

      setEditingId(null);
    } else {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title,
          content,
        },
      ]);
    }

    setTitle("");
    setContent("");
  };

  const editNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="card">
      <h2>📝 My Notes</h2>

      <input
        className="notes-search"
        type="text"
        placeholder="🔍 Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="notes-form">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={saveNote}>
          {editingId !== null ? "✏️ Update Note" : "+ Add Note"}
        </button>
      </div>

      <h3>My Notes</h3>

      <div className="notes-list">
        {filteredNotes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          filteredNotes.map((note) => (
            <div className="note-item" key={note.id}>
              <h4>{note.title}</h4>
              <p>{note.content}</p>

              <button onClick={() => editNote(note)}>
                ✏️ Edit
              </button>

              <button onClick={() => deleteNote(note.id)}>
                🗑️ Delete
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}


/* ================= TASKS ================= */

function TasksPage({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPriority, setEditPriority] = useState("Medium");
  const [searchTask, setSearchTask] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      priority: priority,
      done: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setPriority("Medium");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const saveTask = () => {
  setTasks(
    tasks.map((task) =>
      task.id === editingId
        ? {
            ...task,
            title: editTitle,
            priority: editPriority,
          }
        : task
    )
  );

  setEditingId(null);
  setEditTitle("");
  setEditPriority("Medium");
};

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };
const clearCompletedTasks = () => {
  setTasks(
    tasks.filter((task) => !task.done)
  );
};
  const completedTasks = tasks.filter(
    (task) => task.done
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.done
  ).length;

  const taskProgress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks / tasks.length) * 100
        );
  const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(searchTask.toLowerCase());

  const matchesPriority =
    filterPriority === "All" ||
    (task.priority || "Medium") === filterPriority;

  return matchesSearch && matchesPriority;
});

const sortedTasks = [...filteredTasks].sort((a, b) => {
  if (a.done !== b.done) {
    return a.done ? 1 : -1;
  }

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  return (
    priorityOrder[a.priority || "Medium"] -
    priorityOrder[b.priority || "Medium"]
  );
});
  return (
    <section className="card tasks-page">

      <div className="tasks-header">
        <div>
          <h2>✅ My Tasks</h2>
          <p>Manage your daily study tasks.</p>
        </div>

        <div
          className="task-progress-circle"
          style={{
            background: `conic-gradient(#4f46e5 ${taskProgress}%, #e5e7eb ${taskProgress}% 100%)`,
          }}
        >
          <span>{taskProgress}%</span>
        </div>
      </div>
<div className="task-search-box">
  <input
    type="text"
    placeholder="🔍 Search tasks..."
    value={searchTask}
    onChange={(e) => setSearchTask(e.target.value)}
  />
</div>
<div className="task-filter-box">
  <select
    value={filterPriority}
    onChange={(e) => setFilterPriority(e.target.value)}
  >
    <option>All</option>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </select>
</div>
      <div className="task-input-box">
        

        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={addTask}>
          + Add Task
        </button>

      </div>

      <div className="task-stats">

        <div className="task-stat">
          <span>📋</span>
          <div>
            <strong>{tasks.length}</strong>
            <p>Total Tasks</p>
          </div>
        </div>

        <div className="task-stat completed-stat">
          <span>✅</span>
          <div>
            <strong>{completedTasks}</strong>
            <p>Completed</p>
          </div>
        </div>

        <div className="task-stat pending-stat">
          <span>⏳</span>
          <div>
            <strong>{pendingTasks}</strong>
            <p>Pending</p>
          </div>
        </div>

      </div>

      <div className="task-progress-section">

        <div className="task-progress-title">
          <strong>Today's Progress</strong>
          <span>{taskProgress}%</span>
        </div>

        <div className="task-progress-bar">
          <div
            className="task-progress-fill"
            style={{
              width: `${taskProgress}%`,
            }}
          ></div>
        </div>

      </div>

      <h3 className="task-list-title">
        Your Tasks
      </h3>

{completedTasks > 0 && (
  <button
    className="clear-completed-btn"
    onClick={clearCompletedTasks}
  >
    🧹 Clear Completed
  </button>
)}

      <div className="tasks-list">

        {tasks.length === 0 ? (
          <div className="empty-tasks">
            <div>📝</div>
            <h3>No tasks yet</h3>
            <p>Add your first study task above.</p>
          </div>
        ) : (
       sortedTasks.map((task) => (
            <div
              className={
                task.done
                  ? "task task-completed"
                  : "task"
              }
              key={task.id}
            >

              <input
                type="checkbox"
                checked={task.done}
                onChange={() =>
                  toggleTask(task.id)
                }
              />

              {editingId === task.id ? (
  <input
    value={editTitle}
    onChange={(e) => setEditTitle(e.target.value)}
  />
) : (
  <span
    className={task.done ? "completed" : ""}
  >
    {task.title}
  </span>
)}
              {editingId === task.id ? (
  <select
    value={editPriority}
    onChange={(e) => setEditPriority(e.target.value)}
  >
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </select>
) : (
  <span
    className={`task-priority ${(task.priority || "Medium").toLowerCase()}`}
  >
    {task.priority || "Medium"}
  </span>
)}
{editingId === task.id && (
  <button
    onClick={() => {
      setEditingId(null);
      setEditTitle("");
      setEditPriority("Medium");
    }}
  >
    ❌
  </button>
)}
{editingId === task.id && (
  <button
    onClick={saveTask}
  >
    💾
  </button>
)}
             <button
  onClick={() => {
  setEditingId(task.id);
  setEditTitle(task.title);
  setEditPriority(task.priority || "Medium");
}}
>
  ✏️
</button>

<button
  onClick={() =>
    deleteTask(task.id)
  }
>
  🗑️
</button>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

/* ================= PROGRESS ================= */

function ProgressPage({ tasks }) {
  const completedTasks = tasks.filter((task) => task.done).length;
  const pendingTasks = tasks.filter((task) => !task.done).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  return (
    <section className="card">
      <h2>📊 My Progress</h2>

      <div className="progress-stats">
        <div>
          <h3>{completedTasks}</h3>
          <p>Completed Tasks</p>
        </div>

        <div>
          <h3>{pendingTasks}</h3>
          <p>Pending Tasks</p>
        </div>

        <div>
          <h3>{progress}%</h3>
          <p>Overall Progress</p>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </section>
  );
}


/* ================= SETTINGS ================= */

function SettingsPage({
  studentName,
  setStudentName,
  darkMode,
  setDarkMode,
}) {
  const [name, setName] = useState(
    studentName === "Student" ? "" : studentName
  );

  const saveName = () => {
    localStorage.setItem("studyhub-name", name);

    setStudentName(
      name.trim() === "" ? "Student" : name.trim()
    );

    alert("Name saved successfully!");
  };

  return (
    <section className="card settings-card">

      <div className="settings-header">
        <h2>⚙️ Settings</h2>
        <p>Manage your StudyHub preferences</p>
      </div>

      <div className="settings-section">
        <h3>👤 Student Profile</h3>

        <label>Student Name</label>

        <div className="settings-name-row">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={saveName}>
            💾 Save Name
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h3>🔔 Notifications</h3>

        <label className="settings-option">
          <input
            type="checkbox"
            defaultChecked
          />
          <span>
            <strong>Study Reminders</strong>
            <small>Receive reminders for your study schedule</small>
          </span>
        </label>
      </div>

      <div className="settings-section">
        <h3>🎨 Appearance</h3>

        <label className="settings-option theme-option">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

          <span>
            <strong>
              {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </strong>
            <small>
              Change the appearance of your StudyHub
            </small>
          </span>
        </label>
      </div>

    </section>
  );
}

/* ================= TIMETABLE ================= */

function TimetablePage({ schedule, setSchedule }) {
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("Monday");
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const addSchedule = () => {
    if (subject.trim() === "" || time === "") return;

    setSchedule([
      ...schedule,
      {
        id: Date.now(),
        day,
        subject: subject.trim(),
        time,
      },
    ]);

    setSubject("");
    setTime("");
  };

  const deleteSchedule = (id) => {
    setSchedule(
      schedule.filter((item) => item.id !== id)
    );
  };

  const filteredSchedule = schedule.filter(
    (item) => item.day === selectedDay
  );

  return (
    <section className="card timetable-card">
      <h2>📅 My Timetable</h2>

      <div className="timetable-section">
        <h3>View Day</h3>

        <select
          className="timetable-select"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="timetable-section">
        <h3>Add Schedule</h3>

        <select
          className="timetable-select"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          {days.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          className="timetable-input"
          type="text"
          placeholder="Enter subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          className="timetable-input"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          className="timetable-add-btn"
          onClick={addSchedule}
        >
          + Add Schedule
        </button>
      </div>

      <div className="timetable-list">
        {filteredSchedule.length === 0 ? (
          <p>No schedule for {selectedDay}.</p>
        ) : (
          filteredSchedule.map((item) => (
            <div className="timetable-item" key={item.id}>
              <strong>{item.day}</strong>

              <strong>{item.time}</strong>

              <span>{item.subject}</span>

              <button
                onClick={() => deleteSchedule(item.id)}
                title="Delete schedule"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}


export default App;