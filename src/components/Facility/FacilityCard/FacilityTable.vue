<template>
<div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-gray-800' : 'text-white']"
          >
            Health Records
          </h3>
        </div>
        <!-- Share data model begins -->
    <!-- <div
      class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
    >
      <div class="">
        <button
          class="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
          v-on:click="toggleModal()"
        >
          Share Data
        </button>
        <modal v-if="showModal" v-on:click="toggleModal()">
          <h3 slot="ShareForm">Share Data</h3>
        </modal>
      </div>
    </div> -->
    
        <div>
          <button class="bg-pink-500 text-white active:bg-black-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
          type="button" 
      
          @click="shareDataComponent == false ? shareDataComponent = 'ShareDataForm' : shareDataComponent = false"
          >
            Share Data
          </button>
        </div>
        <transition mode="out-in">
            <div class=" w-full lg:w-4/4 z-10 inset-4 overflow-y-auto px-12 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8" >
                
                <component :is="shareDataComponent"> </component>
                
              </div>
            </div> 
        </transition>
      <!-- Share data model ends -->
        </div>
      </div>
    
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <!-- Table begins -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
             <span style="color: Dodgerblue">
                <i class="fas fa-folder fa-lg "></i>
              </span>
              Doctor ID
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              <span style="color: Dodgerblue">
                <i class="fas fa-user-clock fa-lg "></i>
              </span>
              Category
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
             <span style="color: Dodgerblue">
                <i class="fas fa-notes-medical fa-lg "></i>
             </span>
              Permission Type
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
              <span style="color: Dodgerblue">
                <i class="fas fa-file-medical fa-lg "></i>
              </span>
              File Name
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
            <span style="color: Dodgerblue">
                <i class="fas fa-x-ray fa-lg "></i>
              </span>
              From
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
            <span style="color: Dodgerblue"> 
              <i class="fas fa-prescription fa-lg"></i>
            </span>
              To
            </th>
            <!-- <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            >
            <span style="color: Dodgerblue">
                <i class="fas fa-folder-plus fa-lg "></i>
              </span>
              Detailed report
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"
            > More
            </th> -->
          </tr>
        </thead>
        <!-- Table ends -->
        <tbody> 
          <tr> 
            <th 
              class="border-t-0  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
            > 
              <img 
                :src="bootstrap "
                class="h-12 w-1 2 bg-white rounded-full border"
                alt="..." 
              />
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-gray-700' : 'text-white']"
              >
                001
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              6th March 2000
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <ul>
                <li>
                  <i class="fas fa-ruler-vertical text-pink-500 mr-2"></i> Height : 50
                </li>
                <li>
                  <i class="fas fa-weight text-blue-500 mr-2"></i> Weight : 70 kg
                </li>
                <li>
                  <i class="fas fa-thermometer-three-quarters text-orange-500 mr-2"></i> Temp : 32 deg
                </li>
                <li>
                  <i class="fas fa-tint text-red-500 mr-2"></i> BP : 110/70
                </li>
              </ul>
              
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <div class="flex">
                Fix the lab reports here
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <div class="flex">
                Fix the lab reports here
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <div class="flex">
                Fix the lab reports here
              </div>
            </td>
            <!-- <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2">60%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                  >
                    <div
                      style="width: 60%;"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td> -->
            <!-- <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right"
            >
              <table-dropdown />
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ShareDataForm from "@/components/Patient/Form/ShareDataForm.vue";
// import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";



export default {
  components: { 
    ShareDataForm
    },

  data() {
    return {
     shareDataComponent: false
    };
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
