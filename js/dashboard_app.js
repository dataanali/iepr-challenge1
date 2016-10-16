



drawGraphic = function() {
	StandaloneDashboard(function(db){
	

		db.setDashboardTitle ($('select#graphs option:selected').text());

		var iepr_chart = new ChartComponent();

		iepr_chart.setDimensions (12, 10);	
		iepr_chart.setYAxis($('#xAxis').attr('value'));
		var serverEndPoint = $('#endPoint').attr('value');
		var nFields = $('#nFields').attr('value');
		var yAxisField = $('#yField').attr('value');
		var graphType = $('select#graphType option:selected').attr('value');
		var nCohort = $('#cohorte').attr('value');
		nCohort = parseInt(nCohort);
		iepr_chart.lock();

		$.getJSON(serverEndPoint , function (data) {
			// This function is executed when the ajax request is successful.

			var nCtr=1;
			var aLabels = [];
			$.each(data, function(index, value){
					if (nCtr++ <= nCohort) {

					$.each(value, function(idx, val){
						if (idx == yAxisField)
							aLabels.push( val );
					});
					}
			});

			iepr_chart.setLabels(aLabels);
			$( "select#fields option:selected" ).each(function() {
				dataSerie = $( this ).attr('value');

				var nCtrVals = 0;
				var aSeries = [];
				nCtr = 1;
				$.each(data, function(index, value){
					
					if (nCtr++ <= nCohort ) {
					$.each(value, function(idx, val){
						if (idx == dataSerie)
							aSeries.push( val );
					});
					}
							
				});
				
				var dataSerieLabel = (dataSerie.substr(0,1).toUpperCase() + dataSerie.substr(1,dataSerie.length));
				iepr_chart.addSeries(dataSerie, dataSerieLabel, aSeries, {
					seriesDisplayType: graphType
				});

			});

			iepr_chart.unlock();
		});

	db.addComponent(iepr_chart);


});
};
