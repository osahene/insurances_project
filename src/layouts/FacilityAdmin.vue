<template>
  <div>
    <facility-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <facility-admin-navbar />
      <facility-header-stats />
      <specified-nav />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <facility-footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import SpecifiedNav from "@/components/Facility/FacilityNavbars/SpecifiedNav.vue";
import FacilityAdminNavbar from "@/components/Facility/FacilityNavbars/FacilityAdminNavbar.vue";
import FacilitySidebar from "@/components/Facility/FacilitySidebar/FacilitySidebar.vue";
import FacilityHeaderStats from "@/components/Facility/FacilityHeaders/FacilityHeaderStats.vue";
import FacilityFooterAdmin from "@/components/Facility/FacilityFooters/FacilityFooterAdmin.vue";
export default {
  name: "facility-admin-layout",
  components: {
    FacilityAdminNavbar,
    FacilitySidebar,
    SpecifiedNav,
    FacilityHeaderStats,
    FacilityFooterAdmin,
  },
};
</script>
