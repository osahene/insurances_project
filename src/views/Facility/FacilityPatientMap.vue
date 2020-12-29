<template>
    <!--  new repairs -->
  <div>
    <patient-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <patient-admin-navbar 
        navTitle = "Health History"
      />
      <!-- cards insert begin -->
        <div class="relative bg-green-600 md:pt-32 pb-32 pt-12">
          <div class="px-4 md:px-10 mx-auto w-full">
            <br>
            <br>
            <br>
            <br>
          <div>
            <!-- Card stats -->
                <!-- <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <report-stats
                      statSubtitle="PERMISSIONS GIVEN"
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
              </div> -->
            </div>
          </div>
        </div>
        <!-- card insert end -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <!-- care givers insert begin -->
        <div class="flex flex-wrap mt-4">
            <div class="w-full mb-12 px-4">
              <patient-card-page-visits 
                transTitle="Health Providers"
                transId = "Name of Health Provider"
                productName = "Care provider ID"
                transType = "Treated ailment"
                transDate = "Date of Last Visit"
                transAmount = "Prescriptions"
                transStatus = "Status"
                />
            </div>
          </div>
          <!-- table insert end -->
          <!-- map insert begins -->
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >
              <map-history />
            </div>
          <!-- map insert ends -->
        <patient-footer-admin />
      </div>
    </div>
  </div>
  <!-- End repairs -->
</template>
<script>
import MapHistory from "@/components/Patient/Maps/MapHistory.vue";
import PatientCardPageVisits from "@/components/Patient/PatientCard/PatientCardPageVisits.vue";
import PatientAdminNavbar from "@/components/Patient/Navbars/PatientAdminNavbar.vue";
// import ReportStats from "@/components/Patient/PatientCard/ReportStats.vue";
import PatientSidebar from "@/components/Patient/PatientSidebar/PatientSidebar.vue";
import PatientFooterAdmin from "@/components/Patient/Footers/PatientFooterAdmin.vue";

export default {
  components: {
    MapHistory,
    PatientCardPageVisits,
    // ReportStats,
    PatientSidebar,
    PatientAdminNavbar,
    PatientFooterAdmin
  },
};
</script>
