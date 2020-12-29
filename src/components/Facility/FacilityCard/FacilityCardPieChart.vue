<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 chartcolor"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-gray-200 mb-1 text-xs font-semibold">
            Overview
          </h6>
          <h2 class="text-white text-xl font-semibold">
            Spendings
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="pie-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

export default {
  mounted: function () {
    this.$nextTick(function () {
      var config = {
        type: "pie",
        data: {
          labels: [
            "Lab",
            "Pres Med",
            "OTC Drugs",
            "Services",
          ],
          datasets: [
            {
              label: "ab",
              backgroundColor: ["#fff","red","yellow","green","Brown"],
              borderColor: "#4c51bf",
              data: [65, 78, 66, 44],
              fill: false,
            },
            // {
            //   label: new Date().getFullYear() - 1,
            //   fill: false,
            //   backgroundColor: "#fff",
            //   borderColor: "#fff",
            //   data: [40, 68, 86, 74, 56, 60, 87],
            // },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "black",
          },
          legend: {
            labels: {
              fontColor: "black",
            },
            align: "start",
            position: "right",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          // scales: {
          //   xAxes: [
          //     {
          //       ticks: {
          //         fontColor: "rgba(255,255,255,.7)",
          //       },
          //       display: true,
          //       scaleLabel: {
          //         display: false,
          //         labelString: "Spendings",
          //         fontColor: "white",
          //       },
          //       gridLines: {
          //         display: false,
          //         borderDash: [2],
          //         borderDashOffset: [2],
          //         color: "rgba(33, 37, 41, 0.3)",
          //         zeroLineColor: "rgba(0, 0, 0, 0)",
          //         zeroLineBorderDash: [2],
          //         zeroLineBorderDashOffset: [2],
          //       },
          //     },
          //   ],
          //   yAxes: [
          //     {
          //       ticks: {
          //         fontColor: "rgba(255,255,255,.7)",
          //       },
          //       display: true,
          //       scaleLabel: {
          //         display: false,
          //         labelString: "Value",
          //         fontColor: "white",
          //       },
          //       gridLines: {
          //         borderDash: [3],
          //         borderDashOffset: [3],
          //         drawBorder: false,
          //         color: "rgba(255, 255, 255, 0.15)",
          //         zeroLineColor: "rgba(33, 37, 41, 0)",
          //         zeroLineBorderDash: [2],
          //         zeroLineBorderDashOffset: [2],
          //       },
          //     },
          //   ],
          // },
        },
      };
      var ctx = document.getElementById("pie-chart").getContext("2d");
      window.myPie = new Chart(ctx, config);
    });
  },
};
</script>
<style scoped>
.chartcolor{
  background-color: transparent;
}
h6{
  color: black;
}

</style>