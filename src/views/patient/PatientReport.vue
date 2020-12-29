<template>
    <!--  new repairs -->
  <div>
    <patient-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <patient-admin-navbar 
        navTitle = "Health Records"
      />
      <!-- cards insert begin -->
        <div class="relative bg-green-600 md:pt-32 pb-32 pt-12">
          <div class="px-4 md:px-10 mx-auto w-full">
            <br>
            <br>
            <br>
            <br>
          </div>
        </div>
        <!-- card insert end -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <!-- care givers insert begin -->
        <div class="flex flex-wrap mt-4">
            <div class="w-full mb-12 px-4">
              <report-table />
            </div>
          </div>
          <!-- table insert end -->
          
        <patient-footer-admin />
      </div>
    </div>
  </div>
  <!-- End repairs -->
</template>
<script>
import ReportTable from "@/components/Patient/PatientCard/ReportTable.vue";
import PatientAdminNavbar from "@/components/Patient/Navbars/PatientAdminNavbar.vue";
import PatientSidebar from "@/components/Patient/PatientSidebar/PatientSidebar.vue";
import PatientFooterAdmin from "@/components/Patient/Footers/PatientFooterAdmin.vue";

export default {
  components: {  
    PatientSidebar,
    ReportTable,
    PatientAdminNavbar,
    PatientFooterAdmin
  },
};
</script>