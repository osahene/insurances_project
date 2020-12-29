<template>
  <div>
    <!-- Wallet inset here -->
    <patient-sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <patient-admin-navbar
        navTitle = "Patient Wallet"
       />
      <!-- cards insert begin -->
        <div class="relative bg-green-600 md:pt-32 pb-32 pt-12">
          <div class="px-4 md:px-10 mx-auto w-full">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <report-stats
                  statSubtitle="AMOUNT AVAILABLE"
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
        <!-- card insert end -->
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <!-- table insert begin -->
        <div class="flex flex-wrap">
          <div class="w-full xl:w-4/12 px-4">
              <patient-card-pie-chart />
          </div>
          <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <patient-card-line-chart />
          </div>  
        </div>
            <div class="flex flex-wrap mt-4">
              <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                <patient-card-page-visits />
              </div>
              <!-- <div class="w-full xl:w-4/12 px-4">
                <patient-card-social-traffic />
              </div> -->
            </div>
          <!-- table insert end -->
        <patient-footer-admin />
      </div>
    </div>
    <!-- wallet insert ends -->  
  </div>
</template>
<script>
import PatientAdminNavbar from "@/components/Patient/Navbars/PatientAdminNavbar.vue";
import ReportStats from "@/components/Patient/PatientCard/ReportStats.vue";
import PatientCardLineChart from "@/components/Patient/PatientCard/PatientCardLineChart.vue";
import PatientCardPieChart from "@/components/Patient/PatientCard/PatientCardPieChart.vue";
import PatientCardPageVisits from "@/components/Patient/PatientCard/PatientCardPageVisits.vue";
import PatientSidebar from "@/components/Patient/PatientSidebar/PatientSidebar.vue";
// import PatientCardSocialTraffic from "@/components/Patient/PatientCard/PatientCardSocialTraffic.vue";
import PatientFooterAdmin from "@/components/Patient/Footers/PatientFooterAdmin.vue";

export default {
  name: "dashboard-page",
  components: {
    PatientAdminNavbar,
    PatientCardLineChart,
    PatientCardPieChart,
    PatientCardPageVisits,
    PatientSidebar,
    ReportStats,
    PatientFooterAdmin
    // PatientCardSocialTraffic,
  },
  props:{

  },
};
</script>
