		$(document).ready(function(){

		var barChartData = {
			labels : ["Jan","Feb","Mar","Apr","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					data : [28,48,40,19,96,27,90]
				}
			]
			
		}

	var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
	

	var pieData = [
				{
					value: 30,
					color:"#F38630"
				},
				{
					value : 50,
					color : "#E0E4CC"
				},
				{
					value : 100,
					color : "#69D2E7"
				}
			
			];

	var myPie = new Chart(document.getElementById("canvas2").getContext("2d")).Pie(pieData);


		$('#canvas2').hide();
		$('#nextBtn').click(
			function(){
				$('#canvas').hide();
				$('#canvas2').show();
			}
		);

		$('#prevBtn').click(
			function(){
				$('#canvas2').hide();
				$('#canvas').show();
			}
		);
});