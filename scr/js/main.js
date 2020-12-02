document.addEventListener('DOMContentLoaded' , () => {
    
const Grafica = document.getElementById('miGrafica');
const contexto = Grafica.getContext('2d');
Chart.defaults.global.defaultFontSize = 18;

const configuracion = new Chart(contexto, {
type:'bar',
data:{
    datasets:[{
    label: 'Lluvias',
    data: [3, 4, 3, 5, 7, 10, 12, 15, 12, 10, 7, 5],
    borderColor:'blue'
    
    },{
      label: 'Temperatura',
      data: [40, 60, 110, 70, 20, 15, 10, 15, 90, 120, 80, 50 ],
      borderColor:'red'
  }],
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  },

});
  const grafica = new Chart(contexto, configuracion);



function DataInputs(formTiempo, formTemperatura , formLluvia) {
  return formTiempo[0] != "" && formTemperatura[0] != "" && formLluvia[0] != "" && formTiempo.length === formTemperatura.length && formTiempo.length === formLluvia.length ;
}

const miGrafica = document.getElementById('miGrafica');
const button = document.getElementById('Actualizar');
button.addEventListener('click', () => {
  button.value = "Actualizar";
  let formTiempo = document.getElementById('Tiempo').value.split(',');
  let formTemperatura = document.getElementById('Temperatura').value.split(',');
  let formLluvia = document.getElementById('Lluvia').value.split(',');

  if (DataInputs (formTiempo, formTemperatura, formLluvia)) {
    for (let i = 0; i < formTiempo.length; i++) {
      chart.data.datasets[0].data[formTiempo[i] - 1] = formTiempo[i];
      chart.data.datasets[1].data[formTiempo[i] - 1] = formLluvia[i];
      
    }
    chart.update();
    miGrafica.style.display = "block";

  }else{
    alert('Rellenar datos');
  }


})

});

