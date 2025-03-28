const xxxValues = [2018, 2019, 2020, 2021, 2022, 2023];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xxxValues,
    datasets: [
      {
        label: "Tecnología",
        data: [300, 700, 2000, 5000, 6000, 7000],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Comercio",
        data: [1600, 1700, 1700, 1900, 2000, 2700],
        borderColor: "green",
        fill: false,
      },
      {
        label: "Gastronomía",
        data: [860, 1140, 1060, 1060, 1070, 1110],
        borderColor: "red",
        fill: false,
      },
      {
        label: "Salud y Bienestar",
        data: [500, 800, 1500, 2500, 3500, 4500],
        borderColor: "purple",
        fill: false,
      },
      {
        label: "Educación",
        data: [400, 600, 1200, 2200, 2800, 3600],
        borderColor: "orange",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Crecimiento del emprendimiento en Colombia por sector (2018-2023)",
        font: {
          size: 18,
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});
