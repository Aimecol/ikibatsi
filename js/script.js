document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("toggle-menu");
  const sidebar = document.querySelector(".sidebar");
  const menuItems = document.querySelectorAll(".menu > li > a");
  const sections = document.querySelectorAll(".section");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
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

// Render Gantt Chart
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
