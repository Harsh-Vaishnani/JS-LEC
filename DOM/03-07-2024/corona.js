document.addEventListener("DOMContentLoaded", function () {
    fetch('https://data.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
            const casesTimeSeries = data.cases_time_series;

            const tableBody = document.getElementById('covidTableBody');

            casesTimeSeries.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${entry.date}</td>
                <td>${entry.dailyconfirmed}</td>
                <td>${entry.dailydeceased}</td>
                <td>${entry.dailyrecovered}</td>
                <td>${entry.totalconfirmed}</td>
                <td>${entry.totaldeceased}</td>
                <td>${entry.totalrecovered}</td>
            `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});