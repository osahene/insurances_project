<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <patient-card-line-chart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <patient-card-bar-chart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <patient-card-page-visits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <patient-card-social-traffic />
      </div>
    </div>
  </div>
</template>
<script>
import PatientCardLineChart from "@/components/Patient/PatientCard/PatientCardLineChart.vue";
import PatientCardBarChart from "@/components/Patient/PatientCard/PatientCardBarChart.vue";
import PatientCardPageVisits from "@/components/Patient/PatientCard/PatientCardPageVisits.vue";
import PatientCardSocialTraffic from "@/components/Patient/PatientCard/PatientCardSocialTraffic.vue";
export default {
  name: "dashboard-page",
  components: {
    PatientCardLineChart,
    PatientCardBarChart,
    PatientCardPageVisits,
    PatientCardSocialTraffic,
  },
};
</script>
