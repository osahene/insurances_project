<template>
  <!-- Header -->
  <div class="relative bg-green-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <report-stats
              statSubtitle="BODY MASS INDEX"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-green-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <report-stats
              statSubtitle="NEW USERS"
              statTitle="2,356"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Since last week"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <report-stats
              statSubtitle="SALES"
              statTitle="924"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <report-stats
              statSubtitle= "TOTAL MONEY"
              statTitle= "24"
              statArrow= "down"
              statPercent= "20.1"
              statPercentColor="text-green-500"
              statDescripiron="Since last month"
              statIconName="fas fa-percent"
              statIconColor="bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportStats from "@/components/Patient/PatientCard/ReportStats.vue";

export default {
  components: {
    ReportStats,
  },
};
</script>
