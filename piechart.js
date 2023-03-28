document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Toys & Games'],
            datasets: [{
                data: [1000, 1500, 800, 1200],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Sales by Product Category'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
});
