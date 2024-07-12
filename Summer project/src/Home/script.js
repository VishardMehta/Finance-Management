document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('analytics-chart').getContext('2d');
    const analyticsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    label: 'Income',
                    data: [30000, 35000, 32000, 40000, 45000, 38000, 42000, 43000],
                    backgroundColor: '#36a2eb',
                },
                {
                    label: 'Outcome',
                    data: [20000, 25000, 22000, 30000, 35000, 28000, 32000, 33000],
                    backgroundColor: '#ff6384',
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
