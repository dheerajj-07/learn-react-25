const employees = [
  {
    "id": 1,
    "name": "Amit",
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update client database",
        "description": "Add new client information to the CRM system.",
        "date": "2025-11-12",
        "category": "Data Entry",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare sales report",
        "description": "Compile sales data for the previous quarter.",
        "date": "2025-11-10",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Discuss project progress and next milestones.",
        "date": "2025-11-15",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya",
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve authentication issue in the web app.",
        "date": "2025-11-11",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code review",
        "description": "Review code submitted by teammates.",
        "date": "2025-11-13",
        "category": "Code Quality",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write documentation",
        "description": "Update internal documentation for new API endpoints.",
        "date": "2025-11-09",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Rahul",
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design homepage banner",
        "description": "Create a new promotional banner for the homepage.",
        "date": "2025-11-14",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update brand assets",
        "description": "Revise the logo and typography for social media.",
        "date": "2025-11-10",
        "category": "Branding",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Feedback review",
        "description": "Collect and analyze customer feedback forms.",
        "date": "2025-11-08",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "name": "Sneha",
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Server maintenance",
        "description": "Perform scheduled server updates and security patches.",
        "date": "2025-11-12",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Network diagnostics",
        "description": "Identify and resolve connectivity issues in office network.",
        "date": "2025-11-13",
        "category": "Networking",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Backup verification",
        "description": "Ensure all daily backups are running successfully.",
        "date": "2025-11-11",
        "category": "Data Management",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Karan",
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "title": "Client onboarding",
        "description": "Guide the new client through initial setup and access.",
        "date": "2025-11-12",
        "category": "Customer Success",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Invoice generation",
        "description": "Prepare and send invoices for the previous month.",
        "date": "2025-11-10",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Payment follow-up",
        "description": "Contact clients with pending payments.",
        "date": "2025-11-15",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];


const admin=[ {
      "id": 1,
      "email": "admin@company.com",
      "password": "123"
    }
];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))

    return{employees, admin}
}