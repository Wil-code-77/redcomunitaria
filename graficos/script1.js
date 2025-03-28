const xxValues = [
  "Microempresas",
  "Pequeñas empresas",
  "Medianas empresas",
  "Grandes empresas",
];
const yyValues = [54.5, 30, 10, 5];
const xbarColors = ["#0976e4", "#09e0e4", "#09a4e4", "#0583b7", "#0a6fdd"];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xxValues,
    datasets: [
      {
        backgroundColor: xbarColors,
        data: yyValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "El ecosistema emprendedor en Colombia",
    },
  },
});
