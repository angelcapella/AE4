document.addEventListener('DOMContentLoaded' , () => {
    
const miLienzo = document.getElementById('myChart')
const contexto = miLienzo.getContext('2d');
const configuracion= {
    type:'line',
    data:{
        label: ['Enero', 'Febrero', 'Marzo'],
        datasets:[{
            label: 'ventas',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [44443, 23450, 50300],
        }],



    },
};
const grafica = new Chart(contexto, configuracion);
});