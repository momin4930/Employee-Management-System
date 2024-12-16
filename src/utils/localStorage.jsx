// localStorage.clear()

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstname: "Ali",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Create slides for the upcoming meeting",
        date: "2024-11-01",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit report",
        description: "Submit the quarterly financial report",
        date: "2024-10-15",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Code review",
        description: "Review the latest code submission",
        date: "2024-10-20",
        category: "Development",
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 7, failed: 0 },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstname: "Ahmed",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design landing page",
        description: "Create a new design for the landing page",
        date: "2024-11-03",
        category: "Design",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule team meeting",
        description: "Organize a meeting for project updates",
        date: "2024-11-05",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Follow up with the client for feedback",
        date: "2024-10-25",
        category: "Client Relations",
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstname: "Ayesha",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize database",
        description: "Improve query performance",
        date: "2024-11-07",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write API documentation",
        description: "Document the newly created API endpoints",
        date: "2024-10-22",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix server issues",
        description: "Resolve the server downtime issue",
        date: "2024-10-18",
        category: "IT Support",
      },
    ],
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstname: "Sara",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop mobile app prototype",
        description: "Build the first version of the mobile app",
        date: "2024-11-10",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Run marketing campaign",
        description: "Launch the Q4 digital marketing campaign",
        date: "2024-10-29",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Plan content calendar",
        description: "Create a content plan for social media",
        date: "2024-11-04",
        category: "Content",
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstname: "Fatima",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Onboard new hire",
        description: "Assist the new employee with onboarding",
        date: "2024-11-02",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare budget forecast",
        description: "Create the budget forecast for next quarter",
        date: "2024-11-12",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Product demo",
        description: "Conduct a product demo for prospective clients",
        date: "2024-10-28",
        category: "Sales",
      },
    ],
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 },
  },
];
  
  const admin = [
    {
      "id": "admin1",
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  
  export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
    
  }
