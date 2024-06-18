document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('purityTestForm');
    const questionsContainer = document.getElementById('questions');
    const questions = [
        "Have you ever held hands romantically?",
        // Add more questions here
    ];

    // Generate questions dynamically
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = question;
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = `question${index}`;
        div.appendChild(label);
        div.appendChild(input);
        questionsContainer.appendChild(div);
    });

    // Load existing data if available
    const nameInput = document.getElementById('name');
    nameInput.addEventListener('blur', loadData);

    form.addEventListener('submit', saveData);

    function loadData() {
        const name = nameInput.value;
        if (!name) return;
        
        // Replace with actual code to read CSV
        fetch('data.csv')
            .then(response => response.text())
            .then(csvText => {
                const parsedData = Papa.parse(csvText, { header: true }).data;
                const userData = parsedData.find(row => row.name === name);
                if (userData) {
                    questions.forEach((_, index) => {
                        form.elements[`question${index}`].checked = userData[`question${index}`] === 'true';
                    });
                }
            });
    }

    function saveData(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value === 'on';
        });
        
        // Replace with actual code to save to CSV
        // Convert data to CSV and save it
        const csvRow = [nameInput.value, ...questions.map((_, index) => data[`question${index}`])].join(',');
        // Append this row to your CSV file
    }
});
