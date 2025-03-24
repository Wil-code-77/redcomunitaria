const xxValues = ["Estetica y belleza","Comidas rapidas","Restaurantes", "Servicios","Comercializacion"];
const yyValues = [55, 49, 44, 24, 15];
const xbarColors = [
  "#0976e4",
  "#09e0e4",
  "#09a4e4",
  "#0583b7",
  "#0a6fdd"
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xxValues,
    datasets: [{
      backgroundColor: xbarColors,
      data: yyValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
