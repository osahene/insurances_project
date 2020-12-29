<template>
  <div>
    <patient-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <patient-admin-navbar />
      <patient-header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <patient-footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import PatientAdminNavbar from "@/components/Patient/Navbars/PatientAdminNavbar.vue";
import PatientSidebar from "@/components/Patient/PatientSidebar/PatientSidebar.vue";
import PatientHeaderStats from "@/components/Patient/Headers/PatientHeaderStats.vue";
import PatientFooterAdmin from "@/components/Patient/Footers/PatientFooterAdmin.vue";
export default {
  name: "patient-admin-layout",
  components: {
    PatientAdminNavbar,
    PatientSidebar,
    PatientHeaderStats,
    PatientFooterAdmin,
  },
};
</script>
