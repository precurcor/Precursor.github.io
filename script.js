document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('purityTestForm');
    const questionsContainer = document.getElementById('questions');
    const resultContainer = document.getElementById('result');
    const questions = [
        "Held hands romantically?",
        "Been on a date?",
        "Been in a relationship?",
        "Danced without leaving room for Jesus?",
        "Kissed a non-family member?"
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
        let checkedCount = 0;

        formData.forEach((value, key) => {
            data[key] = value === 'on';
            if (value === 'on') checkedCount++;
        });

        // Calculate purity percentage
        const totalQuestions = questions.length;
        const purityPercentage = ((totalQuestions - checkedCount) / totalQuestions) * 100;

        // Display result
        resultContainer.textContent = `Your purity score is ${purityPercentage.toFixed(2)}%`;

        // Convert data to CSV and save it
        const csvRow = [nameInput.value, ...questions.map((_, index) => data[`question${index}`])].join(',');
        // Code to append this row to your CSV file
    }
});
