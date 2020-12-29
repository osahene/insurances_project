<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-center text-gray-500 mb-1 text-lg font-semibold">
            Patient Review
          </h6>
          <h2 class="text-gray-800 uppercase text-xl font-semibold">
            Review by divisions
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="doughnut-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  mounted: function () {
    this.$nextTick(function () {
      let config = {
        type: "doughnut",
        data: {
          labels: [
            "Pediatrics",
            "OPD",
            "Gynaecology",
            "Physiotherapy",            
          ],
          datasets: [
            {              
              backgroundColor: ["#ed64a6", "blue", "yellow","black"],
              borderColor: "white",
              data: [30,20,50,60],
              fill: true,              
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 50,
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              fontColor: "green",
            },
            align: "center",
            position: "bottom",
          },         
        },
      };
      let ctx = document.getElementById("doughnut-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
    });
  },
};
</script>
