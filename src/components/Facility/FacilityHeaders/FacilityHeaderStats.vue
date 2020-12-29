<template>
  <!-- Header -->
  <div class="relative bg-green-600 md:pt-16 pb-20 pt-20">
    <div class="px-4 md:px-10 mx-auto w-full overflow-auto ">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap space-y-1 pb-4">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-6">
            <GeneralStats
              statSubtitle="Medical Doctors"
              statTitle="2"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-green-500"
              statDescripiron="Since last month"
              statIconName="fas fa-user-md"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle="Pysician Assistant"
              statTitle="10"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Since last week"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle="Midwives"
              statTitle="6"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-baby"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle= "Nurse"
              statTitle= "24"
              statArrow= "down"
              statPercent= "20.1"
              statPercentColor="text-green-500"
              statDescripiron="Since last month"
              statIconName="fas fa-user-nurse"
              statIconColor="bg-red-500"
            />
          </div>


          <!-- New stuff -->

          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle="Patients"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-green-500"
              statDescripiron="Since last month"
              statIconName="fas fa-user-injured"
              statIconColor="bg-blue-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle="Pharmacist"
              statTitle="1"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Since last week"
              statIconName="fas fa-mortar-pestle"
              statIconColor="bg-blue-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle="Accountant"
              statTitle="1"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-chart-line"
              statIconColor="bg-blue-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <GeneralStats
              statSubtitle= "Interns"
              statTitle= "3"
              statArrow= "down"
              statPercent= "20.1"
              statPercentColor="text-green-500"
              statDescripiron="Since last month"
              statIconName="fas fa-user-graduate"
              statIconColor="bg-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralStats from "@/components/Facility/FacilityCard/GeneralStats.vue";

export default {
  components: {
    GeneralStats,
  },
};
</script>
