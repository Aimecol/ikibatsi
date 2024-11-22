document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("toggle-menu");
  const menuclose = document.getElementById("close-menu");
  const sidebar = document.querySelector(".sidebar");
  const menuItems = document.querySelectorAll(".menu > li > a");
  const sections = document.querySelectorAll(".section");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  menuclose.addEventListener("click", () => {
    sidebar.classList.remove("collapsed");
  });

  menuItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      const nextElement = link.nextElementSibling;
      if (nextElement && nextElement.classList.contains("submenu")) {
        e.preventDefault();
      }

      links.forEach((l) => {
        l.classList.remove("active");
        const submenu = l.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
          submenu.style.display = "none";
        }
      });

      link.classList.add("active");

      if (nextElement && nextElement.classList.contains("submenu")) {
        nextElement.style.display = "block";
      }
    });
  });
});

const sidebarLinks = document.querySelectorAll(".sidebar .menu a");
const sections = document.querySelectorAll(".section");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetSectionName = link.getAttribute("data-section");
    const targetSection = document.querySelector(
      `.section[data-section="${targetSectionName}"]`
    );

    if (targetSection) {
      sections.forEach((section) => section.classList.remove("active"));

      targetSection.classList.add("active");

      sidebarLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

const links = document.querySelectorAll(".sidebar .menu a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");
  });
});

document.querySelector(".create-btn").addEventListener("click", () => {
  const allSections = document.querySelectorAll(".section");
  const targetSection = document.querySelector(
    "[data-section='create-new-project']"
  );

  allSections.forEach((section) => section.classList.remove("active"));
  targetSection.classList.add("active");
});

document.querySelector(".update-btn").addEventListener("click", () => {
  const allSections = document.querySelectorAll(".section");
  const targetSection = document.querySelector(
    "[data-section='update-project-status']"
  );

  allSections.forEach((section) => section.classList.remove("active"));
  targetSection.classList.add("active");
});

document
  .getElementById("project-select")
  .addEventListener("change", function () {
    const currentStatus = {
      project1: "In Progress",
      project2: "Completed",
      project3: "On Hold",
    };
    document.getElementById("current-status").value =
      currentStatus[this.value] || "";
  });

document.querySelector(".view-project").addEventListener("click", () => {
  const allSections = document.querySelectorAll(".section");
  const targetSection = document.querySelector(
    "[data-section='view-company-details']"
  );

  allSections.forEach((section) => section.classList.remove("active"));
  targetSection.classList.add("active");
});

document.querySelector(".view-project").addEventListener("click", () => {
  const allSections = document.querySelectorAll(".section");
  const targetSection = document.querySelector(
    "[data-section='view-project-details']"
  );

  allSections.forEach((section) => section.classList.remove("active"));
  targetSection.classList.add("active");

  const projectDetails = {
    project1: {
      title: "Project 1: New Website Launch",
      details: [
        "Objective: Launch a new corporate website.",
        "Deadline: 2024-12-15",
        "Team Members: John, Jane, Alex",
        "Current Status: In Progress",
      ],
    },
    project2: {
      title: "Project 2: Marketing Campaign",
      details: [
        "Objective: Increase brand awareness.",
        "Deadline: 2024-11-30",
        "Team Members: Sarah, Mike",
        "Current Status: Completed",
      ],
    },
    project3: {
      title: "Project 3: Product Development",
      details: [
        "Objective: Develop and launch a new product.",
        "Deadline: 2025-01-20",
        "Team Members: Chris, Emma, Luke",
        "Current Status: On Hold",
      ],
    },
  };

  const selectedProject = document.getElementById("project-select").value;
  const detailsContainer = document.getElementById("project-details-container");
  const projectTitle = document.getElementById("project-title");
  const projectInfoList = document.getElementById("project-info-list");

  if (selectedProject && projectDetails[selectedProject]) {
    projectTitle.textContent = projectDetails[selectedProject].title;
    projectInfoList.innerHTML = projectDetails[selectedProject].details
      .map((detail) => `<li>${detail}</li>`)
      .join("");
  } else {
    projectTitle.textContent = "No Project Selected";
    projectInfoList.innerHTML = "";
  }
});

document
  .getElementById("project-select")
  .addEventListener("change", function () {
    const selectedProject = this.value;
    const projectTitle = document.getElementById("project-title");
    const projectInfoList = document.getElementById("project-info-list");

    projectInfoList.innerHTML = "";

    if (projectDetails[selectedProject]) {
      projectTitle.textContent = projectDetails[selectedProject].title;

      projectDetails[selectedProject].details.forEach((detail) => {
        const li = document.createElement("li");
        li.textContent = detail;
        projectInfoList.appendChild(li);
      });
    } else {
      projectTitle.textContent = "No Project Selected";
    }
  });

const ganttData = [
  { task: "Planning", start: 0, duration: 5, color: "#3498db" },
  { task: "Design", start: 6, duration: 10, color: "#2ecc71" },
  { task: "Development", start: 17, duration: 15, color: "#e74c3c" },
  { task: "Testing", start: 33, duration: 7, color: "#9b59b6" },
];

const milestones = [
  { title: "Project Kickoff", date: "2024-11-20", status: "Completed" },
  { title: "First Prototype", date: "2024-12-05", status: "In Progress" },
  { title: "Final Release", date: "2025-01-15", status: "Upcoming" },
];

function renderGanttChart() {
  const ganttChart = document.getElementById("gantt-chart");
  ganttChart.innerHTML = "";

  ganttData.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("gantt-task");
    taskElement.style.left = `${task.start * 20}px`;
    taskElement.style.width = `${task.duration * 20}px`;
    taskElement.style.backgroundColor = task.color;
    taskElement.textContent = task.task;

    ganttChart.appendChild(taskElement);
  });
}

function renderMilestones() {
  const milestonesList = document.getElementById("milestones-list");
  milestonesList.innerHTML = "";

  milestones.forEach((milestone) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="milestone-title">${milestone.title}</span>
            <p>Date: ${milestone.date}</p>
            <p>Status: ${milestone.status}</p>
        `;
    milestonesList.appendChild(li);
  });
}

renderGanttChart();
renderMilestones();

document
  .getElementById("assign-team-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const task = document.getElementById("task").value;
    const teamMember = document.getElementById("team-member").value;

    if (task && teamMember) {
      alert(`Successfully assigned ${teamMember} to ${task}`);
    } else {
      alert("Please select a task and team member before assigning.");
    }
  });

document.querySelectorAll("[data-link]").forEach((link) => {
  link.addEventListener("click", function () {
    const targetSection = this.getAttribute("data-link");
    document.querySelectorAll("[data-section]").forEach((section) => {
      section.style.display =
        section.getAttribute("data-section") === targetSection
          ? "block"
          : "none";
    });
  });
});

// Handle Progress Report generation
document
  .getElementById("generate-progress-report")
  .addEventListener("click", function () {
    const reportContent = `
        <ul>
            <li><strong>Completed Tasks:</strong> 25</li>
            <li><strong>Pending Tasks:</strong> 10</li>
            <li><strong>Delayed Tasks:</strong> 3</li>
            <li><strong>Milestone Status:</strong> On Track</li>
        </ul>
    `;
    document.getElementById("progress-report-output").innerHTML = reportContent;
  });

// Handle Performance Analytics display
document
  .getElementById("view-performance-analytics")
  .addEventListener("click", function () {
    const analyticsContent = `
        <ul>
            <li><strong>Task Completion Rate:</strong> 85%</li>
            <li><strong>Resource Efficiency:</strong> 90%</li>
            <li><strong>Team Productivity:</strong> High</li>
            <li><strong>Overall Performance:</strong> Excellent</li>
        </ul>
    `;
    document.getElementById("performance-analytics-output").innerHTML =
      analyticsContent;
  });

// View All Members
document
  .getElementById("view-members-btn")
  .addEventListener("click", function () {
    const membersList = `
        <table>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Developer</td>
                <td>john.doe@example.com</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>Project Manager</td>
                <td>jane.smith@example.com</td>
            </tr>
            <tr>
                <td>Emily Johnson</td>
                <td>Designer</td>
                <td>emily.johnson@example.com</td>
            </tr>
        </table>
    `;
    document.getElementById("members-output").innerHTML = membersList;
  });

// Add Member
document
  .getElementById("add-member-btn")
  .addEventListener("click", function () {
    const addMemberForm = `
        <form id="add-member-form">
            <label for="member-name">Name:</label>
            <input type="text" id="member-name" placeholder="Enter member name" required>
            <label for="member-role">Role:</label>
            <input type="text" id="member-role" placeholder="Enter member role" required>
            <label for="member-email">Email:</label>
            <input type="email" id="member-email" placeholder="Enter member email" required>
            <button type="submit">Add Member</button>
        </form>
    `;
    document.getElementById("members-form-output").innerHTML = addMemberForm;

    // Form Submission Logic
    document
      .getElementById("add-member-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("member-name").value;
        const role = document.getElementById("member-role").value;
        const email = document.getElementById("member-email").value;

        alert(
          `Member "${name}" with role "${role}" and email "${email}" has been added!`
        );
        document.getElementById("members-form-output").innerHTML = ""; // Clear form
      });
  });

// Remove Member
document
  .getElementById("remove-member-btn")
  .addEventListener("click", function () {
    const removeMemberForm = `
        <form id="remove-member-form">
            <label for="remove-member-name">Name:</label>
            <input type="text" id="remove-member-name" placeholder="Enter member name to remove" required>
            <button type="submit">Remove Member</button>
        </form>
    `;
    document.getElementById("members-form-output").innerHTML = removeMemberForm;

    // Form Submission Logic
    document
      .getElementById("remove-member-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("remove-member-name").value;

        alert(`Member "${name}" has been removed!`);
        document.getElementById("members-form-output").innerHTML = ""; // Clear form
      });
  });

// View Roles & Permissions
document
  .getElementById("manage-roles-btn")
  .addEventListener("click", function () {
    const rolesPermissions = `
        <table>
            <tr>
                <th>Role</th>
                <th>Permissions</th>
            </tr>
            <tr>
                <td>Developer</td>
                <td>Code Access, Issue Tracking</td>
            </tr>
            <tr>
                <td>Project Manager</td>
                <td>Manage Teams, View Reports</td>
            </tr>
            <tr>
                <td>Designer</td>
                <td>Design Tools, File Upload</td>
            </tr>
        </table>
    `;
    document.getElementById("roles-output").innerHTML = rolesPermissions;
  });

// Add Role
document.getElementById("add-role-btn").addEventListener("click", function () {
  const addRoleForm = `
        <form id="add-role-form">
            <label for="new-role-name">Role Name:</label>
            <input type="text" id="new-role-name" placeholder="Enter role name" required>
            <label for="new-role-permissions">Permissions:</label>
            <input type="text" id="new-role-permissions" placeholder="Enter permissions (comma-separated)" required>
            <button type="submit">Add Role</button>
        </form>
    `;
  document.getElementById("roles-form-output").innerHTML = addRoleForm;

  // Form Submission Logic
  document
    .getElementById("add-role-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const roleName = document.getElementById("new-role-name").value;
      const rolePermissions = document.getElementById(
        "new-role-permissions"
      ).value;

      alert(
        `Role "${roleName}" with permissions "${rolePermissions}" has been added!`
      );
      document.getElementById("roles-form-output").innerHTML = ""; // Clear form
    });
});

// Remove Role
document
  .getElementById("remove-role-btn")
  .addEventListener("click", function () {
    const removeRoleForm = `
        <form id="remove-role-form">
            <label for="remove-role-name">Role Name:</label>
            <input type="text" id="remove-role-name" placeholder="Enter role name to remove" required>
            <button type="submit">Remove Role</button>
        </form>
    `;
    document.getElementById("roles-form-output").innerHTML = removeRoleForm;

    // Form Submission Logic
    document
      .getElementById("remove-role-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const roleName = document.getElementById("remove-role-name").value;

        alert(`Role "${roleName}" has been removed!`);
        document.getElementById("roles-form-output").innerHTML = ""; // Clear form
      });
  });

// View Member Contributions
document
  .getElementById("view-contributions-btn")
  .addEventListener("click", function () {
    const contributionsTable = `
        <h4>Member Contributions</h4>
        <table>
            <tr>
                <th>Member Name</th>
                <th>Tasks Completed</th>
                <th>Hours Worked</th>
                <th>Deliverables Met</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>15</td>
                <td>40</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>20</td>
                <td>45</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Emily Johnson</td>
                <td>10</td>
                <td>30</td>
                <td>2</td>
            </tr>
        </table>
    `;
    document.getElementById("performance-output").innerHTML =
      contributionsTable;
  });

// View Skill Matrix
document
  .getElementById("view-skill-matrix-btn")
  .addEventListener("click", function () {
    const skillMatrix = `
        <h4>Skill Matrix</h4>
        <table>
            <tr>
                <th>Skill</th>
                <th>Required</th>
                <th>John Doe</th>
                <th>Jane Smith</th>
                <th>Emily Johnson</th>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>Advanced</td>
                <td>Intermediate</td>
                <td>Advanced</td>
                <td>Beginner</td>
            </tr>
            <tr>
                <td>Project Management</td>
                <td>Expert</td>
                <td>Beginner</td>
                <td>Expert</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <td>Design</td>
                <td>Intermediate</td>
                <td>Beginner</td>
                <td>Intermediate</td>
                <td>Expert</td>
            </tr>
        </table>
    `;
    document.getElementById("performance-output").innerHTML = skillMatrix;
  });

// View Work Schedules
document
  .getElementById("view-work-schedules-btn")
  .addEventListener("click", function () {
    const workSchedules = `
        <h4>Work Schedules</h4>
        <table>
            <tr>
                <th>Member Name</th>
                <th>Working Hours</th>
                <th>Availability</th>
                <th>Time Off</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>9:00 AM - 5:00 PM</td>
                <td>Mon - Fri</td>
                <td>None</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>10:00 AM - 6:00 PM</td>
                <td>Mon - Thu</td>
                <td>1 Week (Vacation)</td>
            </tr>
            <tr>
                <td>Emily Johnson</td>
                <td>8:00 AM - 4:00 PM</td>
                <td>Mon - Fri</td>
                <td>2 Days (Sick Leave)</td>
            </tr>
        </table>
    `;
    document.getElementById("schedules-output").innerHTML = workSchedules;
  });

// View Meetings and Availability
document
  .getElementById("view-meetings-btn")
  .addEventListener("click", function () {
    const meetings = `
        <h4>Meetings and Availability</h4>
        <table>
            <tr>
                <th>Meeting Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Attendees</th>
            </tr>
            <tr>
                <td>Project Kickoff</td>
                <td>2024-11-22</td>
                <td>10:00 AM</td>
                <td>John, Jane, Emily</td>
            </tr>
            <tr>
                <td>Design Review</td>
                <td>2024-11-24</td>
                <td>2:00 PM</td>
                <td>Jane, Emily</td>
            </tr>
            <tr>
                <td>Weekly Sync</td>
                <td>2024-11-25</td>
                <td>9:30 AM</td>
                <td>All Team Members</td>
            </tr>
        </table>
    `;
    document.getElementById("schedules-output").innerHTML = meetings;
  });

// Add New Budget Section
document
  .getElementById("add-new-budget-btn")
  .addEventListener("click", function () {
    const addBudgetForm = `
        <h4>Add New Budget</h4>
        <form id="budget-form">
            <label for="budget-name">Budget Name:</label>
            <input type="text" id="budget-name" placeholder="Enter budget name" required><br><br>
            
            <label for="total-amount">Total Amount:</label>
            <input type="number" id="total-amount" placeholder="Enter total budget amount" required><br><br>
            
            <label for="category-allocation">Category Allocation:</label>
            <textarea id="category-allocation" placeholder="e.g., Marketing: 40%, R&D: 30%" required></textarea><br><br>
            
            <button type="button" id="submit-budget-btn">Submit</button>
        </form>
        <div id="budget-feedback" style="margin-top: 10px;"></div>
    `;
    document.getElementById("financials-content").innerHTML = addBudgetForm;

    document
      .getElementById("submit-budget-btn")
      .addEventListener("click", function () {
        const name = document.getElementById("budget-name").value;
        const amount = document.getElementById("total-amount").value;
        const allocation = document.getElementById("category-allocation").value;

        if (name && amount && allocation) {
          document.getElementById(
            "budget-feedback"
          ).innerHTML = `<p>Budget "${name}" with total amount of ${amount} created successfully!</p>`;
        } else {
          document.getElementById(
            "budget-feedback"
          ).innerHTML = `<p style="color: red;">Please fill out all fields.</p>`;
        }
      });
  });

// View Current Budgets Section
document
  .getElementById("view-current-budgets-btn")
  .addEventListener("click", function () {
    const currentBudgets = `
        <h4>Current Budgets</h4>
        <table>
            <tr>
                <th>Budget Name</th>
                <th>Total Amount</th>
                <th>Allocated Funds</th>
                <th>Remaining Balance</th>
            </tr>
            <tr>
                <td>Marketing Q1</td>
                <td>$50,000</td>
                <td>$30,000</td>
                <td>$20,000</td>
            </tr>
            <tr>
                <td>R&D</td>
                <td>$100,000</td>
                <td>$70,000</td>
                <td>$30,000</td>
            </tr>
            <tr>
                <td>Operations</td>
                <td>$75,000</td>
                <td>$50,000</td>
                <td>$25,000</td>
            </tr>
        </table>
    `;
    document.getElementById("financials-content").innerHTML = currentBudgets;
  });

// Allocate Resources Section
document
  .getElementById("allocate-resources-btn")
  .addEventListener("click", function () {
    const allocateResources = `
        <h4>Allocate Resources</h4>
        <form id="resource-form">
            <label for="project-name">Project/Department Name:</label>
            <input type="text" id="project-name" placeholder="Enter project/department name" required><br><br>
            
            <label for="allocation-amount">Allocation Amount:</label>
            <input type="number" id="allocation-amount" placeholder="Enter allocation amount" required><br><br>
            
            <label for="reason">Reason for Allocation:</label>
            <textarea id="reason" placeholder="Provide justification for allocation" required></textarea><br><br>
            
            <button type="button" id="submit-allocation-btn">Submit</button>
        </form>
        <div id="allocation-feedback" style="margin-top: 10px;"></div>
    `;
    document.getElementById("financials-content").innerHTML = allocateResources;

    document
      .getElementById("submit-allocation-btn")
      .addEventListener("click", function () {
        const project = document.getElementById("project-name").value;
        const amount = document.getElementById("allocation-amount").value;
        const reason = document.getElementById("reason").value;

        if (project && amount && reason) {
          document.getElementById(
            "allocation-feedback"
          ).innerHTML = `<p>Successfully allocated $${amount} to "${project}".</p>`;
        } else {
          document.getElementById(
            "allocation-feedback"
          ).innerHTML = `<p style="color: red;">Please fill out all fields.</p>`;
        }
      });
  });

// Income & Expenses Section
document
  .getElementById("income-expenses-btn")
  .addEventListener("click", function () {
    const incomeExpenses = `
        <h4>Income & Expenses</h4>
        <table>
            <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>2024-11-01</td>
                <td>Income</td>
                <td>Client Payment</td>
                <td>$5,000</td>
            </tr>
            <tr>
                <td>2024-11-05</td>
                <td>Expense</td>
                <td>Office Supplies</td>
                <td>$500</td>
            </tr>
            <tr>
                <td>2024-11-10</td>
                <td>Income</td>
                <td>Product Sales</td>
                <td>$3,000</td>
            </tr>
        </table>
    `;
    document.getElementById("transactions-content").innerHTML = incomeExpenses;
  });

// Payment History Section
document
  .getElementById("payment-history-btn")
  .addEventListener("click", function () {
    const paymentHistory = `
        <h4>Payment History</h4>
        <table>
            <tr>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>2024-11-01</td>
                <td>TXN001</td>
                <td>Client Payment</td>
                <td>$5,000</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>2024-11-05</td>
                <td>TXN002</td>
                <td>Office Supplies</td>
                <td>$500</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>2024-11-15</td>
                <td>TXN003</td>
                <td>Service Invoice</td>
                <td>$1,000</td>
                <td>Pending</td>
            </tr>
        </table>
    `;
    document.getElementById("transactions-content").innerHTML = paymentHistory;
  });

// Pending Approvals Section
document
  .getElementById("pending-approvals-btn")
  .addEventListener("click", function () {
    const pendingApprovals = `
        <h4>Pending Approvals</h4>
        <table>
            <tr>
                <th>Date</th>
                <th>Request ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>2024-11-15</td>
                <td>REQ001</td>
                <td>Marketing Campaign</td>
                <td>$2,000</td>
                <td>
                    <button class="approve-btn">Approve</button>
                    <button class="reject-btn">Reject</button>
                </td>
            </tr>
            <tr>
                <td>2024-11-16</td>
                <td>REQ002</td>
                <td>Equipment Purchase</td>
                <td>$3,500</td>
                <td>
                    <button class="approve-btn">Approve</button>
                    <button class="reject-btn">Reject</button>
                </td>
            </tr>
        </table>
    `;

    document.getElementById("transactions-content").innerHTML =
      pendingApprovals;

    // Add functionality for approve/reject buttons
    const approveButtons = document.querySelectorAll(".approve-btn");
    const rejectButtons = document.querySelectorAll(".reject-btn");

    approveButtons.forEach((btn) =>
      btn.addEventListener("click", function () {
        alert("Request Approved!");
      })
    );

    rejectButtons.forEach((btn) =>
      btn.addEventListener("click", function () {
        alert("Request Rejected!");
      })
    );
  });

// Monthly Summary Section
document
  .getElementById("monthly-summary-btn")
  .addEventListener("click", function () {
    const monthlySummary = `
        <h4>Monthly Summary</h4>
        <table>
            <tr>
                <th>Month</th>
                <th>Total Income</th>
                <th>Total Expenses</th>
                <th>Net Profit</th>
            </tr>
            <tr>
                <td>January</td>
                <td>$15,000</td>
                <td>$10,000</td>
                <td>$5,000</td>
            </tr>
            <tr>
                <td>February</td>
                <td>$20,000</td>
                <td>$12,000</td>
                <td>$8,000</td>
            </tr>
            <tr>
                <td>March</td>
                <td>$18,000</td>
                <td>$14,000</td>
                <td>$4,000</td>
            </tr>
        </table>
        <p>Best Practice: Regularly review these summaries to ensure alignment with financial goals and identify any trends or issues.</p>
    `;
    document.getElementById("financial-reports-content").innerHTML =
      monthlySummary;
  });

// Annual Financial Statements Section
document
  .getElementById("annual-statements-btn")
  .addEventListener("click", function () {
    const annualStatements = `
        <h4>Annual Financial Statements</h4>
        <ul>
            <li><strong>Income Statement:</strong> Total revenue: $200,000 | Total expenses: $150,000 | Net income: $50,000</li>
            <li><strong>Balance Sheet:</strong> Total assets: $300,000 | Total liabilities: $100,000 | Equity: $200,000</li>
            <li><strong>Cash Flow Statement:</strong> Operating cash flow: $70,000 | Investing cash flow: -$20,000 | Financing cash flow: $10,000</li>
        </ul>
    `;
    document.getElementById("financial-reports-content").innerHTML =
      annualStatements;
  });

// Dynamic Content for New Trends
document
  .getElementById("new-trends-btn")
  .addEventListener("click", function () {
    const newTrendsContent = `
        <h4>New Trends</h4>
        <ul>
            <li><strong>Trend:</strong> AI and Machine Learning integration in customer experiences.</li>
            <li><strong>Trend:</strong> Sustainable business practices gaining traction among consumers.</li>
            <li><strong>Trend:</strong> Shift towards remote and hybrid work environments.</li>
            <li><strong>Trend:</strong> Increased focus on cybersecurity and data privacy.</li>
        </ul>
        <p>Best Practice: Regularly monitor market research, attend industry events, and analyze reports to stay updated on these trends.</p>
    `;
    document.getElementById("research-content").innerHTML = newTrendsContent;
  });

// Dynamic Content for Competitor Analysis
document
  .getElementById("competitor-analysis-btn")
  .addEventListener("click", function () {
    const competitorAnalysisContent = `
        <h4>Competitor Analysis</h4>
        <table>
            <tr>
                <th>Competitor</th>
                <th>Strengths</th>
                <th>Weaknesses</th>
                <th>Opportunities</th>
                <th>Threats</th>
            </tr>
            <tr>
                <td>Competitor A</td>
                <td>Strong branding, extensive market reach</td>
                <td>High pricing strategy</td>
                <td>Expanding into untapped regions</td>
                <td>New entrants in their niche</td>
            </tr>
            <tr>
                <td>Competitor B</td>
                <td>Advanced technology solutions</td>
                <td>Limited customer service availability</td>
                <td>Collaboration with emerging startups</td>
                <td>Regulatory changes in their sector</td>
            </tr>
        </table>
        <p>Best Practice: Continuously track competitors’ activities, analyze their strategies, and capitalize on their weaknesses while leveraging your organization's strengths.</p>
    `;
    document.getElementById("research-content").innerHTML =
      competitorAnalysisContent;
  });

// Initialize Idea Storage
let ideas = {
  submitted: [],
  archived: [],
};

// Dynamic Content for Submit New Ideas
document
  .getElementById("submit-ideas-btn")
  .addEventListener("click", function () {
    const submitIdeasContent = `
        <h4>Submit New Ideas</h4>
        <form id="submit-idea-form">
            <label for="idea-title">Idea Title:</label><br>
            <input type="text" id="idea-title" required><br><br>
            <label for="idea-objectives">Objectives:</label><br>
            <textarea id="idea-objectives" rows="4" required></textarea><br><br>
            <label for="idea-benefits">Potential Benefits:</label><br>
            <textarea id="idea-benefits" rows="4" required></textarea><br><br>
            <label for="idea-feasibility">Feasibility:</label><br>
            <textarea id="idea-feasibility" rows="4" required></textarea><br><br>
            <button type="submit">Submit Idea</button>
        </form>
    `;
    document.getElementById("idea-content").innerHTML = submitIdeasContent;

    // Handle Idea Submission
    document
      .getElementById("submit-idea-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("idea-title").value;
        const objectives = document.getElementById("idea-objectives").value;
        const benefits = document.getElementById("idea-benefits").value;
        const feasibility = document.getElementById("idea-feasibility").value;

        ideas.submitted.push({ title, objectives, benefits, feasibility });
        alert("Idea submitted successfully!");
        document.getElementById("submit-idea-form").reset();
      });
  });

// Dynamic Content for Review Ideas
document
  .getElementById("review-ideas-btn")
  .addEventListener("click", function () {
    const reviewIdeasContent = `
        <h4>Review Ideas</h4>
        <div>
            ${
              ideas.submitted.length > 0
                ? ideas.submitted
                    .map(
                      (idea, index) =>
                        `<div>
                                      <h5>${idea.title}</h5>
                                      <p><strong>Objectives:</strong> ${idea.objectives}</p>
                                      <p><strong>Potential Benefits:</strong> ${idea.benefits}</p>
                                      <p><strong>Feasibility:</strong> ${idea.feasibility}</p>
                                      <button onclick="archiveIdea(${index})">Archive Idea</button>
                                  </div><hr>`
                    )
                    .join("")
                : "<p>No ideas available for review.</p>"
            }
        </div>
    `;
    document.getElementById("idea-content").innerHTML = reviewIdeasContent;
  });

// Archive Idea Function
function archiveIdea(index) {
  const archivedIdea = ideas.submitted.splice(index, 1)[0];
  ideas.archived.push(archivedIdea);
  alert("Idea archived successfully!");
  document.getElementById("review-ideas-btn").click(); // Refresh the review list
}

// Dynamic Content for Archive Ideas
document
  .getElementById("archive-ideas-btn")
  .addEventListener("click", function () {
    const archiveIdeasContent = `
        <h4>Archived Ideas</h4>
        <div>
            ${
              ideas.archived.length > 0
                ? ideas.archived
                    .map(
                      (idea) =>
                        `<div>
                                      <h5>${idea.title}</h5>
                                      <p><strong>Objectives:</strong> ${idea.objectives}</p>
                                      <p><strong>Potential Benefits:</strong> ${idea.benefits}</p>
                                      <p><strong>Feasibility:</strong> ${idea.feasibility}</p>
                                  </div><hr>`
                    )
                    .join("")
                : "<p>No archived ideas available.</p>"
            }
        </div>
    `;
    document.getElementById("idea-content").innerHTML = archiveIdeasContent;
  });

// Initialize Testing Lab Data
let pilotProjects = [];
let testResults = [];

// Dynamic Content for Pilot Projects
document
  .getElementById("pilot-projects-btn")
  .addEventListener("click", function () {
    const pilotContent = `
        <h4>Pilot Projects</h4>
        <form id="pilot-project-form">
            <label for="project-name">Project Name:</label><br>
            <input type="text" id="project-name" required><br><br>
            <label for="project-objectives">Objectives:</label><br>
            <textarea id="project-objectives" rows="4" required></textarea><br><br>
            <label for="project-scope">Scope:</label><br>
            <textarea id="project-scope" rows="4" required></textarea><br><br>
            <button type="submit">Launch Pilot</button>
        </form>
        <div id="active-pilots" style="margin-top: 20px;">
            <h5>Active Pilot Projects</h5>
            ${
              pilotProjects.length > 0
                ? pilotProjects
                    .map(
                      (project, index) =>
                        `<div>
                                      <strong>${project.name}</strong><br>
                                      <p>${project.objectives}</p>
                                      <p>${project.scope}</p>
                                      <button onclick="removePilot(${index})">End Pilot</button>
                                  </div><hr>`
                    )
                    .join("")
                : "<p>No active pilots currently.</p>"
            }
        </div>
    `;
    document.getElementById("testing-lab-content").innerHTML = pilotContent;

    // Handle New Pilot Submission
    document
      .getElementById("pilot-project-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("project-name").value;
        const objectives = document.getElementById("project-objectives").value;
        const scope = document.getElementById("project-scope").value;

        pilotProjects.push({ name, objectives, scope });
        alert("Pilot project launched successfully!");
        document.getElementById("pilot-project-form").reset();
        document.getElementById("pilot-projects-btn").click(); // Refresh list
      });
  });

// Remove Pilot Project
function removePilot(index) {
  pilotProjects.splice(index, 1);
  alert("Pilot project ended.");
  document.getElementById("pilot-projects-btn").click(); // Refresh list
}

// Dynamic Content for Tracking Testing Results
document
  .getElementById("track-results-btn")
  .addEventListener("click", function () {
    const trackResultsContent = `
        <h4>Track Testing Results</h4>
        <form id="testing-results-form">
            <label for="result-project">Project Name:</label><br>
            <input type="text" id="result-project" required><br><br>
            <label for="metrics">Performance Metrics:</label><br>
            <textarea id="metrics" rows="4" required></textarea><br><br>
            <label for="feedback">User Feedback:</label><br>
            <textarea id="feedback" rows="4" required></textarea><br><br>
            <label for="challenges">Technical Challenges:</label><br>
            <textarea id="challenges" rows="4" required></textarea><br><br>
            <button type="submit">Submit Results</button>
        </form>
        <div id="results-history" style="margin-top: 20px;">
            <h5>Testing Results</h5>
            ${
              testResults.length > 0
                ? testResults
                    .map(
                      (result) =>
                        `<div>
                                      <strong>${result.project}</strong><br>
                                      <p><strong>Metrics:</strong> ${result.metrics}</p>
                                      <p><strong>Feedback:</strong> ${result.feedback}</p>
                                      <p><strong>Challenges:</strong> ${result.challenges}</p>
                                  </div><hr>`
                    )
                    .join("")
                : "<p>No testing results recorded yet.</p>"
            }
        </div>
    `;
    document.getElementById("testing-lab-content").innerHTML =
      trackResultsContent;

    // Handle Testing Results Submission
    document
      .getElementById("testing-results-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const project = document.getElementById("result-project").value;
        const metrics = document.getElementById("metrics").value;
        const feedback = document.getElementById("feedback").value;
        const challenges = document.getElementById("challenges").value;

        testResults.push({ project, metrics, feedback, challenges });
        alert("Testing results submitted successfully!");
        document.getElementById("testing-results-form").reset();
        document.getElementById("track-results-btn").click(); // Refresh list
      });
  });

// Data Storage
let announcements = [];
let chatMessages = [];
let meetingNotes = [];

// Announcements Section
document
  .getElementById("announcements-btn")
  .addEventListener("click", function () {
    const announcementContent = `
        <h4>Announcements</h4>
        <form id="announcement-form">
            <label for="announcement-title">Title:</label><br>
            <input type="text" id="announcement-title" required><br><br>
            <label for="announcement-content">Content:</label><br>
            <textarea id="announcement-content" rows="4" required></textarea><br><br>
            <button type="submit">Post Announcement</button>
        </form>
        <div id="announcements-list" style="margin-top: 20px;">
            <h5>All Announcements</h5>
            ${
              announcements.length > 0
                ? announcements
                    .map(
                      (announcement) =>
                        `<div>
                                      <strong>${announcement.title}</strong><br>
                                      <p>${announcement.content}</p>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No announcements available.</p>"
            }
        </div>
    `;
    document.getElementById("communication-content").innerHTML =
      announcementContent;

    // Handle Announcement Submission
    document
      .getElementById("announcement-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("announcement-title").value;
        const content = document.getElementById("announcement-content").value;

        announcements.push({ title, content });
        alert("Announcement posted successfully!");
        document.getElementById("announcement-form").reset();
        document.getElementById("announcements-btn").click(); // Refresh announcements list
      });
  });

// Chat/Group Discussions Section
document.getElementById("chat-btn").addEventListener("click", function () {
  const chatContent = `
        <h4>Chat/Group Discussions</h4>
        <form id="chat-form">
            <label for="chat-message">Message:</label><br>
            <input type="text" id="chat-message" required><br><br>
            <button type="submit">Send Message</button>
        </form>
        <div id="chat-messages" style="margin-top: 20px;">
            <h5>Chat Messages</h5>
            ${
              chatMessages.length > 0
                ? chatMessages
                    .map(
                      (message) =>
                        `<div>
                                      <p>${message}</p>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No messages yet. Start the conversation!</p>"
            }
        </div>
    `;
  document.getElementById("communication-content").innerHTML = chatContent;

  // Handle Chat Submission
  document
    .getElementById("chat-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const message = document.getElementById("chat-message").value;

      chatMessages.push(message);
      document.getElementById("chat-form").reset();
      document.getElementById("chat-btn").click(); // Refresh chat list
    });
});

// Meeting Notes Section
document
  .getElementById("meeting-notes-btn")
  .addEventListener("click", function () {
    const meetingNotesContent = `
        <h4>Meeting Notes</h4>
        <form id="meeting-notes-form">
            <label for="meeting-topic">Meeting Topic:</label><br>
            <input type="text" id="meeting-topic" required><br><br>
            <label for="meeting-decisions">Decisions:</label><br>
            <textarea id="meeting-decisions" rows="4" required></textarea><br><br>
            <label for="meeting-action-items">Action Items:</label><br>
            <textarea id="meeting-action-items" rows="4" required></textarea><br><br>
            <button type="submit">Save Notes</button>
        </form>
        <div id="meeting-notes-list" style="margin-top: 20px;">
            <h5>Meeting Notes</h5>
            ${
              meetingNotes.length > 0
                ? meetingNotes
                    .map(
                      (note) =>
                        `<div>
                                      <strong>Topic: ${note.topic}</strong><br>
                                      <p><strong>Decisions:</strong> ${note.decisions}</p>
                                      <p><strong>Action Items:</strong> ${note.actionItems}</p>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No meeting notes available.</p>"
            }
        </div>
    `;
    document.getElementById("communication-content").innerHTML =
      meetingNotesContent;

    // Handle Meeting Notes Submission
    document
      .getElementById("meeting-notes-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const topic = document.getElementById("meeting-topic").value;
        const decisions = document.getElementById("meeting-decisions").value;
        const actionItems = document.getElementById(
          "meeting-action-items"
        ).value;

        meetingNotes.push({ topic, decisions, actionItems });
        alert("Meeting notes saved successfully!");
        document.getElementById("meeting-notes-form").reset();
        document.getElementById("meeting-notes-btn").click(); // Refresh meeting notes list
      });
  });

// Data Storage
let stakeholderReports = [];
let emailCampaigns = [];
let clientFeedbacks = [];

// Stakeholder Updates Section
document
  .getElementById("stakeholder-updates-btn")
  .addEventListener("click", function () {
    const stakeholderContent = `
        <h4>Stakeholder Updates</h4>
        <form id="stakeholder-form">
            <label for="stakeholder-title">Report Title:</label><br>
            <input type="text" id="stakeholder-title" required><br><br>
            <label for="stakeholder-details">Details:</label><br>
            <textarea id="stakeholder-details" rows="4" required></textarea><br><br>
            <button type="submit">Submit Report</button>
        </form>
        <div id="stakeholder-list" style="margin-top: 20px;">
            <h5>Stakeholder Updates</h5>
            ${
              stakeholderReports.length > 0
                ? stakeholderReports
                    .map(
                      (report) =>
                        `<div>
                                      <strong>${report.title}</strong><br>
                                      <p>${report.details}</p>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No updates available.</p>"
            }
        </div>
    `;
    document.getElementById("external-communication-content").innerHTML =
      stakeholderContent;

    // Handle Stakeholder Report Submission
    document
      .getElementById("stakeholder-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("stakeholder-title").value;
        const details = document.getElementById("stakeholder-details").value;

        stakeholderReports.push({ title, details });
        alert("Report submitted successfully!");
        document.getElementById("stakeholder-form").reset();
        document.getElementById("stakeholder-updates-btn").click(); // Refresh list
      });
  });

// Email Campaigns Section
document
  .getElementById("email-campaigns-btn")
  .addEventListener("click", function () {
    const emailContent = `
        <h4>Email Campaigns</h4>
        <form id="email-campaign-form">
            <label for="email-title">Campaign Title:</label><br>
            <input type="text" id="email-title" required><br><br>
            <label for="email-content">Email Content:</label><br>
            <textarea id="email-content" rows="4" required></textarea><br><br>
            <button type="submit">Launch Campaign</button>
        </form>
        <div id="email-campaigns-list" style="margin-top: 20px;">
            <h5>Email Campaigns</h5>
            ${
              emailCampaigns.length > 0
                ? emailCampaigns
                    .map(
                      (campaign) =>
                        `<div>
                                      <strong>${campaign.title}</strong><br>
                                      <p>${campaign.content}</p>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No campaigns yet.</p>"
            }
        </div>
    `;
    document.getElementById("external-communication-content").innerHTML =
      emailContent;

    // Handle Email Campaign Submission
    document
      .getElementById("email-campaign-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("email-title").value;
        const content = document.getElementById("email-content").value;

        emailCampaigns.push({ title, content });
        alert("Campaign launched successfully!");
        document.getElementById("email-campaign-form").reset();
        document.getElementById("email-campaigns-btn").click(); // Refresh list
      });
  });

// Client Feedback Section
document
  .getElementById("client-feedback-btn")
  .addEventListener("click", function () {
    const feedbackContent = `
        <h4>Client Feedback</h4>
        <form id="client-feedback-form">
            <label for="client-name">Client Name:</label><br>
            <input type="text" id="client-name" required><br><br>
            <label for="feedback-message">Feedback:</label><br>
            <textarea id="feedback-message" rows="4" required></textarea><br><br>
            <button type="submit">Submit Feedback</button>
        </form>
        <div id="client-feedback-list" style="margin-top: 20px;">
            <h5>Client Feedback</h5>
            ${
              clientFeedbacks.length > 0
                ? clientFeedbacks
                    .map(
                      (feedback) =>
                        `<div>
                                      <strong>${feedback.name}</strong><br>
                                      <p>${feedback.message}</p>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No feedback received yet.</p>"
            }
        </div>
    `;
    document.getElementById("external-communication-content").innerHTML =
      feedbackContent;

    // Handle Client Feedback Submission
    document
      .getElementById("client-feedback-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("client-name").value;
        const message = document.getElementById("feedback-message").value;

        clientFeedbacks.push({ name, message });
        alert("Feedback submitted successfully!");
        document.getElementById("client-feedback-form").reset();
        document.getElementById("client-feedback-btn").click(); // Refresh list
      });
  });

// Data Storage
let scheduledPosts = [];
let engagementMetrics = [];

// Schedule Posts Section
document
  .getElementById("schedule-posts-btn")
  .addEventListener("click", function () {
    const scheduleContent = `
        <h4>Schedule Posts</h4>
        <form id="schedule-post-form">
            <label for="platform">Social Media Platform:</label><br>
            <input type="text" id="platform" placeholder="e.g., Twitter, Facebook" required><br><br>
            <label for="post-content">Post Content:</label><br>
            <textarea id="post-content" rows="4" placeholder="Enter your post here..." required></textarea><br><br>
            <label for="post-date">Schedule Date:</label><br>
            <input type="datetime-local" id="post-date" required><br><br>
            <button type="submit">Schedule Post</button>
        </form>
        <div id="scheduled-posts-list" style="margin-top: 20px;">
            <h5>Scheduled Posts</h5>
            ${
              scheduledPosts.length > 0
                ? scheduledPosts
                    .map(
                      (post) =>
                        `<div>
                                      <strong>Platform:</strong> ${post.platform}<br>
                                      <strong>Content:</strong> ${post.content}<br>
                                      <strong>Scheduled for:</strong> ${post.date}<br>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No scheduled posts yet.</p>"
            }
        </div>
    `;
    document.getElementById("social-media-content").innerHTML = scheduleContent;

    // Handle Post Scheduling
    document
      .getElementById("schedule-post-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const platform = document.getElementById("platform").value;
        const content = document.getElementById("post-content").value;
        const date = document.getElementById("post-date").value;

        scheduledPosts.push({ platform, content, date });
        alert("Post scheduled successfully!");
        document.getElementById("schedule-post-form").reset();
        document.getElementById("schedule-posts-btn").click(); // Refresh list
      });
  });

// Monitor Engagement Section
document
  .getElementById("monitor-engagement-btn")
  .addEventListener("click", function () {
    const engagementContent = `
        <h4>Monitor Engagement</h4>
        <form id="engagement-form">
            <label for="platform-engagement">Social Media Platform:</label><br>
            <input type="text" id="platform-engagement" placeholder="e.g., Twitter, Facebook" required><br><br>
            <label for="engagement-metrics">Engagement Metrics:</label><br>
            <textarea id="engagement-metrics" rows="4" placeholder="Enter metrics like likes, shares, comments..." required></textarea><br><br>
            <button type="submit">Track Engagement</button>
        </form>
        <div id="engagement-list" style="margin-top: 20px;">
            <h5>Engagement Metrics</h5>
            ${
              engagementMetrics.length > 0
                ? engagementMetrics
                    .map(
                      (engagement) =>
                        `<div>
                                      <strong>Platform:</strong> ${engagement.platform}<br>
                                      <strong>Metrics:</strong> ${engagement.metrics}<br>
                                      <hr>
                                  </div>`
                    )
                    .join("")
                : "<p>No engagement data yet.</p>"
            }
        </div>
    `;
    document.getElementById("social-media-content").innerHTML =
      engagementContent;

    // Handle Engagement Tracking
    document
      .getElementById("engagement-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const platform = document.getElementById("platform-engagement").value;
        const metrics = document.getElementById("engagement-metrics").value;

        engagementMetrics.push({ platform, metrics });
        alert("Engagement tracked successfully!");
        document.getElementById("engagement-form").reset();
        document.getElementById("monitor-engagement-btn").click(); // Refresh list
      });
  });

// Data Storage
let pendingReviews = [
  { id: 1, title: "Project Proposal", dueDate: "2024-11-25" },
  { id: 2, title: "Website Wireframe", dueDate: "2024-11-28" },
];
let completedReviews = [];

// View Pending Reviews
document
  .getElementById("pending-reviews-btn")
  .addEventListener("click", function () {
    const pendingContent = `
        <h4>Pending Reviews</h4>
        <ul>
            ${
              pendingReviews.length > 0
                ? pendingReviews
                    .map(
                      (review) =>
                        `<li>
                                      <strong>${review.title}</strong> - Due by ${review.dueDate}
                                      <button onclick="markAsCompleted(${review.id})">Mark as Completed</button>
                                  </li>`
                    )
                    .join("")
                : "<p>No pending reviews.</p>"
            }
        </ul>
    `;
    document.getElementById("qa-content").innerHTML = pendingContent;
  });

// View Completed Reviews
document
  .getElementById("completed-reviews-btn")
  .addEventListener("click", function () {
    const completedContent = `
        <h4>Completed Reviews</h4>
        <ul>
            ${
              completedReviews.length > 0
                ? completedReviews
                    .map(
                      (review) =>
                        `<li>
                                      <strong>${review.title}</strong> - Reviewed on ${review.reviewDate}
                                  </li>`
                    )
                    .join("")
                : "<p>No completed reviews yet.</p>"
            }
        </ul>
    `;
    document.getElementById("qa-content").innerHTML = completedContent;
  });

// Mark as Completed
function markAsCompleted(id) {
  const reviewIndex = pendingReviews.findIndex((review) => review.id === id);
  if (reviewIndex !== -1) {
    const completedReview = {
      ...pendingReviews[reviewIndex],
      reviewDate: new Date().toLocaleDateString(),
    };
    completedReviews.push(completedReview);
    pendingReviews.splice(reviewIndex, 1);
    alert("Review marked as completed!");
    document.getElementById("pending-reviews-btn").click(); // Refresh pending reviews
  }
}

// Data Storage
let qualityStandards = [
  {
    id: 1,
    title: "Code Review Best Practices",
    description: "Ensure all code undergoes peer review before deployment.",
  },
  {
    id: 2,
    title: "Documentation Standards",
    description:
      "Maintain comprehensive and clear documentation for all deliverables.",
  },
];

function displayQualityStandards() {
  const standardsContent = `
        <h4>Quality Standards</h4>
        <ul>
            ${
              qualityStandards.length > 0
                ? qualityStandards
                    .map(
                      (standard) =>
                        `<li>
                                      <strong>${standard.title}</strong>: ${standard.description}
                                  </li>`
                    )
                    .join("")
                : "<p>No quality standards available.</p>"
            }
        </ul>
    `;
  document.getElementById("sg-content").innerHTML = standardsContent;
}

function displayUpdateForm() {
  const updateFormContent = `
        <h4>Update Quality Guidelines</h4>
        <form id="update-guidelines-form">
            <label for="title">Guideline Title:</label>
            <input type="text" id="title" required>
            
            <label for="description">Description:</label>
            <textarea id="description" required></textarea>
            
            <button type="submit">Add/Update</button>
        </form>
    `;
  document.getElementById("sg-content").innerHTML = updateFormContent;

  document
    .getElementById("update-guidelines-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.getElementById("title").value.trim();
      const description = document.getElementById("description").value.trim();

      if (title && description) {
        qualityStandards.push({
          id: qualityStandards.length + 1,
          title,
          description,
        });
        alert("Quality guideline updated successfully!");
        document.getElementById("view-standards-btn").click(); // Refresh standards view
      }
    });
}

// Attach Event Listeners
document
  .getElementById("view-standards-btn")
  .addEventListener("click", displayQualityStandards);
document
  .getElementById("update-guidelines-btn")
  .addEventListener("click", displayUpdateForm);

// Sample data for feedback and reports
let feedbackData = [
  {
    id: 1,
    source: "Client Survey",
    feedback: "Improve response time on support tickets.",
    date: "2024-11-01",
  },
  {
    id: 2,
    source: "Team Member",
    feedback: "Streamline the code review process.",
    date: "2024-11-10",
  },
];

let reportData = [
  {
    id: 1,
    metric: "Average Resolution Time",
    trend: "Improved by 10% last quarter.",
  },
  {
    id: 2,
    metric: "Customer Satisfaction Score",
    trend: "Increased to 87% this month.",
  },
];

function displayFeedback() {
  const feedbackContent = `
        <h4>Feedback & Improvements</h4>
        <ul>
            ${
              feedbackData.length > 0
                ? feedbackData
                    .map(
                      (item) =>
                        `<li>
                                      <strong>${item.source}</strong>: "${item.feedback}" <em>(Date: ${item.date})</em>
                                  </li>`
                    )
                    .join("")
                : "<p>No feedback available.</p>"
            }
        </ul>
    `;
  document.getElementById("qaulity-content").innerHTML = feedbackContent;
}

function displayReports() {
  const reportContent = `
        <h4>Reports & Trends</h4>
        <ul>
            ${
              reportData.length > 0
                ? reportData
                    .map(
                      (report) =>
                        `<li>
                                      <strong>${report.metric}</strong>: ${report.trend}
                                  </li>`
                    )
                    .join("")
                : "<p>No reports available.</p>"
            }
        </ul>
    `;
  document.getElementById("qaulity-content").innerHTML = reportContent;
}

// Attach Event Listeners
document
  .getElementById("view-feedback-btn")
  .addEventListener("click", displayFeedback);
document
  .getElementById("view-reports-btn")
  .addEventListener("click", displayReports);

// Sample Client Data
let clients = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    status: "Inactive",
  },
];

// Function to Display Add New Client Form
function displayAddClientForm() {
  const addClientForm = `
        <h4>Add New Client</h4>
        <form id="add-client-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" required><br>
            
            <label for="status">Status:</label>
            <select id="status" name="status">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select><br>
            
            <button type="submit">Add Client</button>
        </form>
    `;
  document.getElementById("clients-content").innerHTML = addClientForm;

  // Form Submission Event Listener
  document.getElementById("add-client-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newClient = {
      id: clients.length + 1,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      status: e.target.status.value,
    };
    clients.push(newClient);
    alert("New client added successfully!");
    displayClientsList();
  });
}

// Function to Display Update Client Form
function displayUpdateClientForm(clientId) {
  const client = clients.find((c) => c.id === clientId);
  const updateClientForm = `
        <h4>Update Client Information</h4>
        <form id="update-client-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${
              client.name
            }" required><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="${
              client.email
            }" required><br>
            
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value="${
              client.phone
            }" required><br>
            
            <label for="status">Status:</label>
            <select id="status" name="status">
                <option value="Active" ${
                  client.status === "Active" ? "selected" : ""
                }>Active</option>
                <option value="Inactive" ${
                  client.status === "Inactive" ? "selected" : ""
                }>Inactive</option>
            </select><br>
            
            <button type="submit">Update Client</button>
        </form>
    `;
  document.getElementById("clients-content").innerHTML = updateClientForm;

  // Form Submission Event Listener
  document
    .getElementById("update-client-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      client.name = e.target.name.value;
      client.email = e.target.email.value;
      client.phone = e.target.phone.value;
      client.status = e.target.status.value;
      alert("Client information updated successfully!");
      displayClientsList();
    });
}

// Array to store archived clients
let archivedClients = [];

// Function to Archive a Client
function archiveClient(clientId) {
  const clientIndex = clients.findIndex((c) => c.id === clientId);
  if (clientIndex !== -1) {
    const client = clients.splice(clientIndex, 1)[0]; // Remove client from active list
    archivedClients.push(client); // Add client to the archived list
    alert(`Client "${client.name}" has been archived.`);
    displayClientsList();
  }
}

// Function to Display Archived Clients
function displayArchivedClients() {
  const archivedClientsList = `
        <h4>Archived Clients</h4>
        <ul>
            ${
              archivedClients.length > 0
                ? archivedClients
                    .map(
                      (client) =>
                        `<li>
                                      <strong>${client.name}</strong> (${client.status})
                                      <br>Email: ${client.email} | Phone: ${client.phone}
                                      <br>
                                      <button onclick="restoreClient(${client.id})">Restore</button>
                                  </li>`
                    )
                    .join("")
                : "<p>No archived clients available.</p>"
            }
        </ul>
    `;
  document.getElementById("clients-content").innerHTML = archivedClientsList;
}

// Function to Restore a Client from Archives
function restoreClient(clientId) {
  const clientIndex = archivedClients.findIndex((c) => c.id === clientId);
  if (clientIndex !== -1) {
    const client = archivedClients.splice(clientIndex, 1)[0]; // Remove client from archived list
    clients.push(client); // Add client back to the active list
    alert(`Client "${client.name}" has been restored.`);
    displayArchivedClients();
  }
}

// Adding "Archive" Button to the Clients List
function displayClientsList() {
  const clientsList = `
        <h4>All Clients</h4>
        <ul>
            ${
              clients.length > 0
                ? clients
                    .map(
                      (client) =>
                        `<li>
                                      <strong>${client.name}</strong> (${client.status})
                                      <br>Email: ${client.email} | Phone: ${client.phone}
                                      <br>
                                      <button onclick="displayUpdateClientForm(${client.id})">Update</button>
                                      <button onclick="archiveClient(${client.id})">Archive</button>
                                  </li>`
                    )
                    .join("")
                : "<p>No clients available.</p>"
            }
        </ul>
    `;
  document.getElementById("clients-content").innerHTML = clientsList;
}

// Attach Event Listeners to Buttons
document
  .getElementById("add-client-btn")
  .addEventListener("click", displayAddClientForm);
document
  .getElementById("view-clients-btn")
  .addEventListener("click", displayClientsList);
document
  .getElementById("view-archived-clients-btn")
  .addEventListener("click", displayArchivedClients);

// Array to store communication history
let communicationHistory = {
  emails: [],
  meetings: [],
};

// Function to Log an Email
function logEmail(clientId, subject, content, timestamp) {
  communicationHistory.emails.push({
    clientId,
    subject,
    content,
    timestamp,
  });
  alert("Email logged successfully.");
  displayCommunicationHistory(clientId);
}

// Function to Log a Meeting
function logMeeting(clientId, title, notes, date) {
  communicationHistory.meetings.push({
    clientId,
    title,
    notes,
    date,
  });
  alert("Meeting logged successfully.");
  displayCommunicationHistory(clientId);
}

// Function to Display Communication History for a Client
function displayCommunicationHistory(clientId) {
  const clientEmails = communicationHistory.emails.filter(
    (email) => email.clientId === clientId
  );
  const clientMeetings = communicationHistory.meetings.filter(
    (meeting) => meeting.clientId === clientId
  );

  const communicationDetails = `
        <h4>Communication History</h4>
        <h5>Emails</h5>
        <ul>
            ${
              clientEmails.length > 0
                ? clientEmails
                    .map(
                      (email) =>
                        `<li>
                                      <strong>Subject:</strong> ${email.subject} <br>
                                      <strong>Content:</strong> ${email.content} <br>
                                      <strong>Timestamp:</strong> ${email.timestamp}
                                  </li>`
                    )
                    .join("")
                : "<p>No email history available.</p>"
            }
        </ul>
        <h5>Meetings</h5>
        <ul>
            ${
              clientMeetings.length > 0
                ? clientMeetings
                    .map(
                      (meeting) =>
                        `<li>
                                      <strong>Title:</strong> ${meeting.title} <br>
                                      <strong>Notes:</strong> ${meeting.notes} <br>
                                      <strong>Date:</strong> ${meeting.date}
                                  </li>`
                    )
                    .join("")
                : "<p>No meeting history available.</p>"
            }
        </ul>
    `;
  document.getElementById("clients-content").innerHTML = communicationDetails;
}

// Mock Data for Client Analytics
let clientAnalytics = {
  engagement: [],
  feedback: [],
};

// Function to Log Client Engagement Metrics
function logEngagement(
  clientId,
  emailOpenRate,
  responseTime,
  eventParticipation
) {
  clientAnalytics.engagement.push({
    clientId,
    emailOpenRate,
    responseTime,
    eventParticipation,
  });
  alert("Engagement data logged successfully.");
  displayClientAnalytics(clientId);
}

// Function to Log Client Feedback
function logFeedback(clientId, feedbackContent, rating) {
  clientAnalytics.feedback.push({
    clientId,
    feedbackContent,
    rating,
  });
  alert("Feedback logged successfully.");
  displayClientAnalytics(clientId);
}

// Function to Display Analytics for a Client
function displayClientAnalytics(clientId) {
  const engagementData = clientAnalytics.engagement.filter(
    (eng) => eng.clientId === clientId
  );
  const feedbackData = clientAnalytics.feedback.filter(
    (fb) => fb.clientId === clientId
  );

  const analyticsDetails = `
        <h4>Client Analytics</h4>
        <h5>Engagement Rates</h5>
        <ul>
            ${
              engagementData.length > 0
                ? engagementData
                    .map(
                      (eng) =>
                        `<li>
                                      <strong>Email Open Rate:</strong> ${eng.emailOpenRate}% <br>
                                      <strong>Average Response Time:</strong> ${eng.responseTime} hours <br>
                                      <strong>Event Participation:</strong> ${eng.eventParticipation} events
                                  </li>`
                    )
                    .join("")
                : "<p>No engagement data available.</p>"
            }
        </ul>
        <h5>Feedback Summaries</h5>
        <ul>
            ${
              feedbackData.length > 0
                ? feedbackData
                    .map(
                      (fb) =>
                        `<li>
                                      <strong>Feedback:</strong> ${fb.feedbackContent} <br>
                                      <strong>Rating:</strong> ${fb.rating}/5
                                  </li>`
                    )
                    .join("")
                : "<p>No feedback data available.</p>"
            }
        </ul>
    `;
  document.getElementById("analytics-content").innerHTML = analyticsDetails;
}

// Function to Update Profile
function updateProfile() {
  const name = document.getElementById("profile-name").value;
  const email = document.getElementById("profile-email").value;
  const phone = document.getElementById("profile-phone").value;

  // Mock API Call
  if (name && email) {
    alert("Profile updated successfully!");
  } else {
    alert("Please fill out all required fields.");
  }
}

// Password Strength Checker
document.getElementById("new-password").addEventListener("input", function () {
  const password = this.value;
  const strengthMeter = document.getElementById("password-strength");
  if (password.length < 6) {
    strengthMeter.textContent = "Strength: Weak";
    strengthMeter.style.color = "red";
  } else if (password.length < 10) {
    strengthMeter.textContent = "Strength: Moderate";
    strengthMeter.style.color = "orange";
  } else {
    strengthMeter.textContent = "Strength: Strong";
    strengthMeter.style.color = "green";
  }
});

// Function to Change Password
function changePassword() {
  const currentPassword = document.getElementById("current-password").value;
  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!currentPassword || !newPassword || !confirmPassword) {
    alert("Please fill out all fields.");
  } else if (newPassword !== confirmPassword) {
    alert("New passwords do not match!");
  } else {
    alert("Password updated successfully!");
  }
}

// Function to Save Role
function saveRole() {
  const roleName = document.getElementById("role-name").value;
  const roleDescription = document.getElementById("role-description").value;
  const permissions = Array.from(
    document.querySelectorAll(".permissions-list input:checked")
  ).map((input) => input.value);

  if (!roleName) {
    alert("Role name is required.");
    return;
  }

  // Mock API Call to Save Role
  console.log("Role Saved:", { roleName, roleDescription, permissions });
  alert("Role saved successfully!");
}

// Function to Assign Permissions
function assignPermissions() {
  const role = document.getElementById("select-role").value;
  const user = document.getElementById("select-user").value;

  if (!role || !user) {
    alert("Please select both a role and a user.");
    return;
  }

  // Mock API Call to Assign Permissions
  console.log("Permissions Assigned:", { role, user });
  alert("Permissions assigned successfully!");
}

document.getElementById("theme-toggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

function openThemeEditor() {
  alert("Theme editor feature coming soon!");
}

function generateApiKey() {
  const apiKey = "API-" + Math.random().toString(36).substr(2, 16);
  document.getElementById("api-key-container").innerHTML = `
        <p>Your API Key:</p>
        <input type="text" value="${apiKey}" readonly />
        <small>Copy and store this key securely. It will not be shown again.</small>
    `;
}

function showTicketModal(ticketId) {
  // Fetch ticket details via API (mock data used here)
  document.getElementById("ticket-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("ticket-modal").style.display = "none";
}

document
  .getElementById("modal-update-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("modal-update-message").value;
    alert(`Your update has been submitted: ${message}`);
    // Implement API call to save the update in the database
    closeModal();
  });

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

document.getElementById("search-bar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".faq-question, .tutorial h4").forEach((item) => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.closest("li, .tutorial").style.display = "";
    } else {
      item.closest("li, .tutorial").style.display = "none";
    }
  });
});

document.getElementById("open-chat").addEventListener("click", () => {
  document.getElementById("chat-box").style.display = "block";
});

document.getElementById("close-chat").addEventListener("click", () => {
  document.getElementById("chat-box").style.display = "none";
});

document.getElementById("send-message").addEventListener("click", () => {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message) {
    const chatBody = document.querySelector(".chat-body");
    chatBody.innerHTML += `<div class="chat-message user">${message}</div>`;
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulated bot response
    setTimeout(() => {
      chatBody.innerHTML += `<div class="chat-message bot">Thank you for your message. We'll get back to you shortly.</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  }
});

document
  .getElementById("email-support-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Your message has been sent. You will receive a confirmation email shortly."
    );
    e.target.reset();
  });

// Handle "Generate New Report" Form Submission
document
  .getElementById("generateReportForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect Form Data
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const department = document.getElementById("department").value;
    const metrics = Array.from(
      document.getElementById("metrics").selectedOptions
    ).map((option) => option.value);
    const format = document.getElementById("format").value;

    // Log or Send Data to Backend
    console.log({
      startDate,
      endDate,
      department,
      metrics,
      format,
    });

    // Simulate Report Generation
    alert(
      `Report generation started for ${department}. Check your notifications.`
    );
  });

// Handle "Schedule Report" Form Submission
document
  .getElementById("scheduleReportForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect Form Data
    const reportType = document.getElementById("reportType").value;
    const email = document.getElementById("email").value;
    const timezone = document.getElementById("timezone").value;

    // Log or Send Data to Backend
    console.log({
      reportType,
      email,
      timezone,
    });

    // Simulate Scheduling Confirmation
    alert(
      `Report scheduled as ${reportType}. Notifications will be sent to ${email}.`
    );
  });

// script.js

// Sample Data for Reports
const reports = [
  {
    id: 1,
    title: "Monthly Sales Report",
    category: "sales",
    date: "2024-11-01",
    tags: ["monthly", "sales"],
  },
  {
    id: 2,
    title: "Customer Feedback Analysis",
    category: "marketing",
    date: "2024-10-15",
    tags: ["feedback", "marketing"],
  },
  {
    id: 3,
    title: "Development Progress Overview",
    category: "development",
    date: "2024-09-30",
    tags: ["development", "progress"],
  },
];

// Load Reports Initially
document.addEventListener("DOMContentLoaded", loadReports);

// Search Button Event Listener
document
  .getElementById("searchButton")
  .addEventListener("click", filterReports);

function loadReports() {
  const reportList = document.getElementById("reportItems");
  reportList.innerHTML = ""; // Clear existing items

  reports.forEach((report) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>
                <strong>${report.title}</strong>
                <br>
                <small>${report.date} - ${report.category}</small>
            </span>
            <button class="download-btn" onclick="downloadReport(${report.id})">Download</button>
        `;
    reportList.appendChild(listItem);
  });
}

function filterReports() {
  const keyword = document.getElementById("searchKeyword").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const startDate = document.getElementById("startDateFilter").value;
  const endDate = document.getElementById("endDateFilter").value;

  const filteredReports = reports.filter((report) => {
    const matchesKeyword =
      report.title.toLowerCase().includes(keyword) ||
      report.tags.some((tag) => tag.includes(keyword));
    const matchesCategory = category ? report.category === category : true;
    const matchesDate =
      (!startDate || new Date(report.date) >= new Date(startDate)) &&
      (!endDate || new Date(report.date) <= new Date(endDate));

    return matchesKeyword && matchesCategory && matchesDate;
  });

  displayReports(filteredReports);
}

function displayReports(filteredReports) {
  const reportList = document.getElementById("reportItems");
  reportList.innerHTML = ""; // Clear existing items

  if (filteredReports.length > 0) {
    filteredReports.forEach((report) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <span>
                    <strong>${report.title}</strong>
                    <br>
                    <small>${report.date} - ${report.category}</small>
                </span>
                <button class="download-btn" onclick="downloadReport(${report.id})">Download</button>
            `;
      reportList.appendChild(listItem);
    });
  } else {
    reportList.innerHTML = "<li>No reports found.</li>";
  }
}

function downloadReport(reportId) {
  const report = reports.find((r) => r.id === reportId);
  if (report) {
    alert(`Downloading: ${report.title}`);
    // Implement actual download logic here
  } else {
    alert("Report not found!");
  }
}

// script.js

// Sample Data
let users = [
  { username: "admin", email: "admin@example.com", role: "admin" },
  { username: "editor1", email: "editor1@example.com", role: "editor" },
];

let logs = [
  {
    username: "admin",
    activity: "Logged In",
    datetime: "2024-11-18T09:00",
    ip: "192.168.0.1",
  },
  {
    username: "editor1",
    activity: "Edited Post",
    datetime: "2024-11-18T10:30",
    ip: "192.168.0.2",
  },
];

// Display Users
function displayUsers() {
  const userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = ""; // Clear existing data
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
    userTableBody.appendChild(row);
  });
}

// Display Logs
function displayLogs() {
  const logTableBody = document.getElementById("logTableBody");
  logTableBody.innerHTML = ""; // Clear existing data
  logs.forEach((log) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${log.username}</td>
            <td>${log.activity}</td>
            <td>${log.datetime}</td>
            <td>${log.ip}</td>
        `;
    logTableBody.appendChild(row);
  });
}

// Add New User
document.getElementById("createUserBtn").addEventListener("click", () => {
  document.getElementById("userFormContainer").classList.toggle("hidden");
});

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  users.push({ username, email, role });
  displayUsers();
  document.getElementById("userForm").reset();
  document.getElementById("userFormContainer").classList.add("hidden");
});

// Edit User
function editUser(index) {
  const user = users[index];
  document.getElementById("username").value = user.username;
  document.getElementById("email").value = user.email;
  document.getElementById("role").value = user.role;

  users.splice(index, 1); // Remove user temporarily
  document.getElementById("userFormContainer").classList.remove("hidden");
}

// Delete User
function deleteUser(index) {
  users.splice(index, 1);
  displayUsers();
}

// Search Logs
document.getElementById("filterLogsBtn").addEventListener("click", () => {
  const keyword = document.getElementById("searchLogs").value.toLowerCase();
  const dateFilter = document.getElementById("filterDate").value;

  const filteredLogs = logs.filter((log) => {
    const matchesKeyword =
      log.username.toLowerCase().includes(keyword) ||
      log.activity.toLowerCase().includes(keyword) ||
      log.ip.includes(keyword);
    const matchesDate = dateFilter ? log.datetime.startsWith(dateFilter) : true;
    return matchesKeyword && matchesDate;
  });

  displayLogs(filteredLogs);
});

// Initial Load
displayUsers();
displayLogs();

// script.js

// Mock Data for Backup History
let backupHistory = [
  { date: "2024-11-18", time: "09:00 AM", status: "Successful" },
  { date: "2024-11-17", time: "05:00 PM", status: "Successful" },
  { date: "2024-11-16", time: "11:30 AM", status: "Failed" },
];

// Display Backup History
function displayBackupHistory() {
  const tableBody = document.getElementById("backupHistoryTableBody");
  tableBody.innerHTML = ""; // Clear existing rows
  backupHistory.forEach((backup, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${backup.date}</td>
            <td>${backup.time}</td>
            <td>${backup.status}</td>
            <td>
                <button onclick="retryBackup(${index})">Retry</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
}

// Create Backup
document.getElementById("backupBtn").addEventListener("click", () => {
  alert("Backup initiated!");
  // Simulate Backup Success
  setTimeout(() => {
    const newBackup = {
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toLocaleTimeString(),
      status: "Successful",
    };
    backupHistory.push(newBackup);
    displayBackupHistory();
    alert("Backup completed successfully!");
  }, 2000);
});

// Retry Backup
function retryBackup(index) {
  alert(`Retrying backup for ${backupHistory[index].date}...`);
  setTimeout(() => {
    backupHistory[index].status = "Successful";
    displayBackupHistory();
    alert("Backup retried successfully!");
  }, 2000);
}

// Restore Data
document.getElementById("restoreBtn").addEventListener("click", () => {
  alert("Restore functionality coming soon!");
});

// Save System Settings
document.getElementById("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const timeZone = document.getElementById("timeZone").value;
  const language = document.getElementById("language").value;
  const notifications = document.getElementById("notifications").checked;

  alert(`Settings Saved:
    - Time Zone: ${timeZone}
    - Language: ${language}
    - Notifications: ${notifications ? "Enabled" : "Disabled"}`);
});

// Preview Changes
document.getElementById("previewChangesBtn").addEventListener("click", () => {
  const timeZone = document.getElementById("timeZone").value;
  const language = document.getElementById("language").value;
  const notifications = document.getElementById("notifications").checked;

  alert(`Preview Changes:
    - Time Zone: ${timeZone}
    - Language: ${language}
    - Notifications: ${notifications ? "Enabled" : "Disabled"}`);
});

// Initial Display
displayBackupHistory();

// script.js

// Mock Data for Track Changes
const trackChangesLogs = [
  {
    datetime: "2024-11-18 10:15 AM",
    action: "Changed user role",
    admin: "Admin_01",
    priority: "Critical",
  },
  {
    datetime: "2024-11-17 02:30 PM",
    action: "Updated system settings",
    admin: "Admin_02",
    priority: "High",
  },
  {
    datetime: "2024-11-16 11:00 AM",
    action: "Created a new user",
    admin: "Admin_03",
    priority: "Low",
  },
];

// Mock Data for Security Logs
const securityLogs = [
  {
    datetime: "2024-11-18 10:00 AM",
    event: "Failed login attempt",
    status: "Warning",
    details: "3 attempts from IP 192.168.1.1",
  },
  {
    datetime: "2024-11-17 08:45 PM",
    event: "Unauthorized access attempt",
    status: "Critical",
    details: "Attempted access to restricted area",
  },
  {
    datetime: "2024-11-16 05:20 PM",
    event: "Successful login",
    status: "Normal",
    details: "User logged in from IP 10.0.0.5",
  },
];

// Display Track Changes Logs
function displayTrackChanges() {
  const tableBody = document.getElementById("trackChangesTable");
  tableBody.innerHTML = ""; // Clear existing rows
  trackChangesLogs.forEach((log) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${log.datetime}</td>
            <td>${log.action}</td>
            <td>${log.admin}</td>
            <td class="priority-${log.priority.toLowerCase()}">${
      log.priority
    }</td>
        `;
    tableBody.appendChild(row);
  });
}

// Display Security Logs
function displaySecurityLogs() {
  const tableBody = document.getElementById("securityLogsTable");
  tableBody.innerHTML = ""; // Clear existing rows
  securityLogs.forEach((log) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${log.datetime}</td>
            <td>${log.event}</td>
            <td>${log.status}</td>
            <td>${log.details}</td>
        `;
    tableBody.appendChild(row);
  });
}

// Export Logs
document.getElementById("exportLogsBtn").addEventListener("click", () => {
  const logs = [...trackChangesLogs, ...securityLogs];
  const blob = new Blob([JSON.stringify(logs, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "audit_logs.json";
  a.click();
  URL.revokeObjectURL(url);
  alert("Logs exported successfully!");
});

// Initialize Display
displayTrackChanges();
displaySecurityLogs();
