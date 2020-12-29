<template>
  <div>
    <div class="flex flex-wrap py-imbalance">
      <div class="w-full xl:w-4/12 mb-12 xl:mb-0 px-2">      
        <facility-patient />
      </div>
      <div class="w-full xl:w-4/12 px-2">
        <facility-department />
      </div>
      <div class="w-full xl:w-4/12 px-2">
        <facility-review />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <facility-card-page-visits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <facility-card-social-traffic />
      </div>
    </div>
  </div>
</template>
<script>
import FacilityPatient from "@/components/Facility/FacilityCard/FacilityPatient.vue";
import FacilityDepartment from "@/components/Facility/FacilityCard/FacilityDepartment.vue";
import FacilityReview from "@/components/Facility/FacilityCard/FacilityReview.vue";
import FacilityCardPageVisits from "@/components/Facility/FacilityCard/FacilityCardPageVisits.vue";
import FacilityCardSocialTraffic from "@/components/Facility/FacilityCard/FacilityCardSocialTraffic.vue";

export default {
  name: "facility-dashboard-page",
  components: {
    FacilityPatient,
    FacilityReview,
    FacilityDepartment,
    FacilityCardPageVisits,
    FacilityCardSocialTraffic,
  },
};
</script>