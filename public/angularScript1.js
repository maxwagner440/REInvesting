

var app = angular.module('myApp', []);
   app.controller('myCtrl', function($scope, $window) {
					$scope.change = function(){
					const values = {expenseNameOne: $scope.firstEx,
									expenseNameTwo: $scope.secondEx,
									expenseNameThree:$scope.thirdEx,
									expenseNameFour:$scope.fourthEx,
									expenseNameFive:$scope.fifthEx
									}
					const names = {	name1: $scope.name1,
									name2: $scope.name2,
									name3:$scope.name3,
									name4:$scope.name4,
									name5:$scope.name5
									}
					var grossIncome = calcIncome($scope.income1, $scope.income2, $scope.income3)
					var totExpenses = calcExpenses($scope.firstEx, $scope.secondEx, $scope.thirdEx, $scope.fourthEx, $scope.fifthEx)
					$scope.NetIncome =  grossIncome - totExpenses
					createTheShit(values, names)
					CreateTheDonut(grossIncome, totExpenses)
                   }  
				})

  
window.onload = function() {
	createTheShit(values,names)
}

var calcIncome = function(income1, income2, income3){
	if(income1==null) income1 = 0
	if(income2==null) income2 = 0
	if(income3==null) income3 = 0
	return income1 + income2 + income3
}

var calcExpenses = function(ex1, ex2, ex3, ex4, ex5){
	if(ex1==null) ex1 = 0
	if(ex2==null) ex2 = 0
	if(ex3==null) ex3 = 0
	if(ex4==null) ex4 = 0
	if(ex5==null) ex5 = 0
	return ex1 + ex2 + ex3 + ex4 + ex5

}
var createTheShit = function(values, names){
if(!one){var one = 1}
if(!two){var two = 1}
if(!three){var three = 1}
if(!four){var four = 1}
if(!five){var five = 1}
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Amt In Dollars');
	data.addRows([
	  [names.name1, values.expenseNameOne],
	  [names.name2, values.expenseNameTwo],
	  [names.name3, values.expenseNameThree],
	  [names.name4, values.expenseNameFour],
	  [names.name5, values.expenseNameFive]
	]);

	// Set chart options
	var options = {'title':'MY EXPENSES',
				   'width':800,
				   'height':500};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	chart.draw(data, options);
  }
}




var CreateTheDonut = function(income, expenses){
	if(income==null)income=0
	if(expenses==null)expenses=0
	const incomeVar = income
	const expensesVar = expenses
	const net = income - expenses
	google.charts.load("current", {packages:["corechart"]});
	google.charts.setOnLoadCallback(drawChart);
	function drawChart() {
	  var data = google.visualization.arrayToDataTable([
		['Type of Amount', 'Amount'],
		['Expenses', expensesVar],
		['Gross Income', incomeVar],
		['Net Income', net]
	  ]);

	  var options = {
		title: 'Income vs Expenses',
		pieHole: 0.4,
	  };

	  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
	  chart.draw(data, options);
	}
}
