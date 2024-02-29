const employees = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "Engineering",
        role: { title: "Frontend Developer", level: "Mid" },
        contact: { email: "john.doe@example.com", phone: "123-456-7890" },
        skills: ["JavaScript", "React", "CSS"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "Design",
        role: { title: "UI/UX Designer", level: "Senior" },
        contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
        skills: ["Figma", "Sketch", "Adobe XD"]
    },
    // Additional employee objects...
];

const tableBody = document.querySelector("#employeeTable tbody");

function generateTable() {
    employees.forEach(employee => {
        const row = document.createElement("tr");

        for (const prop of ["id", "name", "age", "department"]) {
            const cell = document.createElement("td");
            cell.textContent = employee[prop];
            row.appendChild(cell);
        }

        for (const prop of ["title", "level"]) {
            const cell = document.createElement("td");
            cell.textContent = employee.role[prop];
            row.appendChild(cell);
        }

        for (const prop of ["email", "phone"]) {
            const cell = document.createElement("td");
            cell.textContent = employee.contact[prop];
            row.appendChild(cell);
        }

        const skillsCell = document.createElement("td");
        skillsCell.textContent = employee.skills.join(", ");
        row.appendChild(skillsCell);

        tableBody.appendChild(row);
    });
}

generateTable();
