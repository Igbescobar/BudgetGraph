// onwindows load
window.onload = function() {
  function getIncomeValues() {
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var incomeValues = [];

    for (var i = 0; i < months.length; i++) {
      incomeValues.push(document.getElementById(months[i] + 'Income').value);
    }
    return incomeValues;
  }
  function getExpenseValues() {
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var expenseValues = [];

    for (var i = 0; i < months.length; i++) {
      expenseValues.push(document.getElementById(months[i] + 'Expense').value);
    }

    return expenseValues;
  }
// bart chart with chart.js
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: 'Income',
            data: getIncomeValues(),
            backgroundColor: [
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(0, 255, 0, 0.5)',
            ],
            borderColor: [
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
              'rgba(75, 192, 192,1)',
            ],
            borderWidth: 1
        },
        {
          label: 'Expense',
          data: getExpenseValues(),
          backgroundColor: [
              
              'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
          ],
          borderColor: [
             
              'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
                'rgba(255,99,132,0.5)',
          ],
          borderWidth: 1
      }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    // beginAtZero:true
                    min: 0,
                    max: 20,
                    stepSize: 5
                }
            }]
        }
    }
});

// download function
document.getElementById('download').addEventListener('click', function() {
  //get the canvas
  var canvas = document.getElementById('myChart');
  //get the image URI
  var imageURI = canvas.toDataURL("image/jpg");
  //create a new anchor element
  var a = document.createElement('a');
  //assign imageURI to href
  a.href = imageURI;
  //set anchor title
  a.download = 'myChart.jpg';
  //append the anchor to the body
  document.body.appendChild(a);
  //click the anchor
  a.click();
});

// update the values of the chart when the tab with id chart-tab is clicked
document.getElementById('chart-tab').addEventListener('click', function() {
  myChart.data.datasets[0].data = getIncomeValues();
  myChart.data.datasets[1].data = getExpenseValues();
  myChart.update();
});
}