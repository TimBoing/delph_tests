const gcharts = () => {

  const emotions = () => {
    console.log("emot");
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
      // legend: 'none',
      legend: {position: 'bottom'},
      colors: ['#6DE3ED', '#48BDCE', '#308593', '#50D0E1'],

    };

    const chart = new google.visualization.PieChart(chartDiv);
    // chart.legend.position = 'bottom';



    chart.draw(data, options);
  }

  const activity = () => {
        console.log("act");


  }

  const sleep = () => {
        console.log("sle");


  }

  const scratching = () => {
        console.log("scr");

  }

  const weight = () => {
        console.log("weighr");

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
    google.charts.load('current', {'packages':['corechart']});
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
