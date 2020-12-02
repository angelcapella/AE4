document.addEventListener('DOMContentLoaded' , () => {
    
  
Chart.defaults.global.defaultFontSize = 18;

const serie1 = {
    label: "Temperaturas",
    data: [3, 4, 3, 5, 7, 10, 12, 15, 12, 10, 7, 5],
    borderColor: 'red'
  };

const serie2 = {
    label: "Lluvias",
    data: [40, 60, 110, 70, 20, 15, 10, 15, 90, 120, 80, 50 ],
    borderColor: 'blue'
  };

const tiempo = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [serie1, serie2]
};

const chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

const lineChart = new Chart(miGrafica, {
  type: 'bar',
  data: tiempo,
  options: chartOptions
});

});

