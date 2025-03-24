

const xValues = ["Medellin", "Sabaneta", "Envigado", "Bello", "Caldas", "la Estrella"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#f3ad0b", 
  "#eec514",
  "#ebd644",
  "#faf203",
  "#e3e901",
  "#c1e409"
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
      title: {
      display: true,
      text: "Territorios con mayor numero de mepresas lideradas por mujeres"
    }
  }
});




