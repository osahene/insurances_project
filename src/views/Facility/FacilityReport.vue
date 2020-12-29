<template>
    <!--  new repairs -->
  <div>
    <facility-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <facility-admin-navbar 
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
              <facility-report-table />
            </div>
          </div>
          <!-- table insert end -->
          
        <facility-footer-admin />
      </div>
    </div>
  </div>
  <!-- End repairs -->
</template>
<script>
import FacilityReportTable from "@/components/Facility/FacilityCard/FacilityReportTable.vue";
import FacilityAdminNavbar from "@/components/Facility/FacilityNavbars/FacilityAdminNavbar.vue";
import FacilitySidebar from "@/components/Facility/FacilitySidebar/FacilitySidebar.vue";
import FacilityFooterAdmin from "@/components/Facility/FacilityFooters/FacilityFooterAdmin.vue";

export default {
  components: {  
    FacilitySidebar,
    FacilityReportTable,
    FacilityAdminNavbar,
    FacilityFooterAdmin
  },
};
</script>