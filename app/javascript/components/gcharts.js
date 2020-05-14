const gcharts = () => {

  const emotions = () => {
    const data = google.visualization.arrayToDataTable([
              ['Emotion', 'Percentage'],
              ['Stress', 40],
              ['Happy',  30],
              ['Fear', 20],
              ['Plotting', 10]
            ]);

    const options = {
      // title: 'Emotions',
      is3D: true,
      animation: {"startup": true, duration: 500},
      // legend: 'none',
      legend: {position: 'bottom'},
      colors: ['#6DE3ED', '#48BDCE', '#308593', '#50D0E1'],

    };

    const chart = new google.visualization.PieChart(chartDiv);
    chart.draw(data, options);
  }

  const activity = () => {
    const data = google.visualization.arrayToDataTable([
             ['Days', 'Steps', { role: 'style' }],
             ['Monday', 5000, '#6DE3ED'],
             ['Tuesday', 4000, '#6DE3ED'],
             ['Wednesday', 10000, '#6DE3ED'],
             ['Thursday', 2000, '#6DE3ED'],
             ['Friday', 15000, '#6DE3ED'],
             ['Saturday', 6000, '#6DE3ED'],
             ['today', 7000, '#6DE3ED'],
          ]);

    const options = {
          // title: 'Emotions',
          // is3D: true,
          // legend: 'none',
          animation: {"startup": true, duration: 500},
          legend: {position: 'none'},
          // colors: ['#6DE3ED', '#48BDCE', '#308593', '#50D0E1'],

        };


    const chart = new google.visualization.ColumnChart(chartDiv);
    chart.draw(data, options);


  }

  const sleep = () => {
    const data = google.visualization.arrayToDataTable([
             ['Days', 'Hours', { role: 'style' }],
             ['Monday', 10, '#6DE3ED'],
             ['Tuesday', 4, '#6DE3ED'],
             ['Wednesday', 6, '#6DE3ED'],
             ['Thursday', 12, '#6DE3ED'],
             ['Friday', 15, '#6DE3ED'],
             ['Saturday', 2, '#6DE3ED'],
             ['Last Night', 4, '#6DE3ED'],
          ]);

    const options = {
          // title: 'Emotions',
          // is3D: true,
          // legend: 'none',
          animation: {"startup": true, duration: 500},
          legend: {position: 'none'},
          // colors: ['#6DE3ED', '#48BDCE', '#308593', '#50D0E1'],

        };


    const chart = new google.visualization.BarChart(chartDiv);
    chart.draw(data, options);


  }

  const scratching = () => {
    const data = google.visualization.arrayToDataTable([
      ['ID', 'X', 'Y', 'Temperature'],
      ['',   80,  167,      120],
      ['',   79,  136,      130],
      ['',   78,  184,      50],
      ['',   72,  278,      230],
      ['',   81,  200,      210],
      ['',   72,  170,      100],
      ['',   68,  477,      80]
    ]);

    const options = {
      colorAxis: {colors: ['yellow', 'red']}
    };

    const chart = new google.visualization.BubbleChart(chartDiv);
    chart.draw(data, options);


  }

  const weight = () => {

    const data = google.visualization.arrayToDataTable([
              ['Label', 'Value'],
              ['weight', 80],
            ]);

    const options = {
      width: '100%', height: '100%',
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    const chart = new google.visualization.Gauge(chartDiv);
    chart.draw(data, options);

    setInterval(function() {
      data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 2000);

  }

  const breathing = () => {
        console.log("bre");

  }

  const butt_licking = () => {
    console.log("bl");

  }

  const plotting = () => {
    console.log("pl");

  }

  const kick_plants = () => {
    console.log("kp");

  }


  const chartDiv = document.getElementById('chart_div');

  if(!chartDiv){
    return;
  } else if(chartDiv.dataset.chart === "emotions"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(emotions);

  } else if(chartDiv.dataset.chart === "activity"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(activity);

  }else if(chartDiv.dataset.chart === "sleep"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(sleep);

  }else if(chartDiv.dataset.chart === "scratching"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(scratching);

  }else if(chartDiv.dataset.chart === "weight"){
    google.charts.load('current', {packages: ['gauge']});
    google.charts.setOnLoadCallback(weight);

  }else if(chartDiv.dataset.chart === "breathing"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(breathing);
  }else if(chartDiv.dataset.chart === "butt_licking"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(butt_licking);
  }else if(chartDiv.dataset.chart === "plotting"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(plotting);
  }else if(chartDiv.dataset.chart === "kick_plants"){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(kick_plants);
  }


}


export{gcharts};
