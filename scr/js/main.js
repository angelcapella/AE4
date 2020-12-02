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

const Tiempo = {
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

const lineChart = {
  type: 'bar',
  data: Tiempo,
  options: chartOptions
  };

function DataInputs(inputTiempo, inputTemperatura , inputLluvia) {
  return inputTiempo[0] != "" && inputTemperatura[0] != "" && inputLluvia[0] != "" && inputTiempo.length === inputTemperatura.length && inputTiempo.length === inputLluvia.length ;
}

const miGrafica = document.getElementById('miGrafica');
const button = document.getElementById('Actualizar');
button.addEventListener('click', () => {
  button.value = "actualizar";
  let inputTiempo = document.getElementById('Tiempo').value.split(',');
  let inputTemperatura = document.getElementById('Temperatura').value.split(',');
  let inputLluvia = document.getElementById('Lluvia').value.split(',');

  if (DataInputs (inputTiempo, inputTemperatura, inputLluvia)) {
    for (let i = 0; i < inputTiempo.length; i++) {
      chart.data.datasets[0].data[inputTiempo[i] - 1] = inputTiempo[i];
      chart.data.datasets[1].data[inputTiempo[i] - 1] = inputLluvia[i];
      
    }
    chart.update();
    miGrafica.style.display = "block";
    
  }else{
    alert('Rellenar datos');
  }


})

});

