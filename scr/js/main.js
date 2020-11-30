document.addEventListener('DOMContentLoaded' , () => {
    
const miLienzo = document.getElementById('miGrafica')
const contexto = miLienzo.getContext('2d');
// const configuracion= {
//     type:'line',
//     data:{
//         label: [1,2,3,4,5,6,7,8,9,10,11,12],
//         datasets:[{
//             label: 'Temperaturas',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [ 3, 4, 3, 5, 7, 10, 12, 15, 12, 10,7, 5],
//         }],
//         datasets:[{
//             label: 'Lluvias',
//             backgroundColor: 'rgb(255, 100, 13)',
//             borderColor: 'rgb(255, 100, 13)',
//             data: [ 40 , 60 , 110 , 70 , 20 , 15 , 10, 15 , 90 , 120 , 80 , 50 ],
//         }],
//     },
   
// };
// const grafica = new Chart(contexto, configuracion);





Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var serie1 = {
    label: "Temperaturas",
    data: [  3, 4, 3, 5, 7, 10, 12, 15, 12, 10,7, 5],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var serie2 = {
    label: "Lluvias",
    data: [40 , 60 , 110 , 70 , 20 , 15 , 10, 15 , 90 , 120 , 80 , 50 ],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

var tiempo = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [serie1, serie2]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(miGrafica, {
  type: 'bar',
  data: tiempo,
  options: chartOptions
});

});

