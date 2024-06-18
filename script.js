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

    form.addEventListener('submit', calculatePurity);

    function calculatePurity(event) {
        event.preventDefault();
        const formData = new FormData(form);
        let checkedCount = 0;

        formData.forEach((value) => {
            if (value === 'on') checkedCount++;
        });

        // Calculate purity percentage
        const totalQuestions = questions.length;
        const purityPercentage = ((totalQuestions - checkedCount) / totalQuestions) * 100;

        // Display result
        resultContainer.textContent = `Your purity score is ${purityPercentage.toFixed(2)}%`;
    }
});
