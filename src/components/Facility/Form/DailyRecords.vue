<template>
  <div>
      <!-- Projects table -->
      <!-- Table begins -->
      
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
    </div>



    <!-- DUstbin -->
    iv v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-4 z-1 outline-none focus:outline-none justify-center  flex">
          <div class="relative w-auto my-6 mx-auto max-w-sm">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->
              <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 class="text-3xl font-semibold">
                  Modal Title
                </h3>
                <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                  <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <p class="my-4 text-gray-600 text-lg leading-relaxed">
                  I always felt like I could do anything. That’s the main
                  thing people are controlled by! Thoughts- their perception
                  of themselves! They're slowed down by their perception of
                  themselves. If you're taught you can’t do anything, you
                  won’t do anything. I was taught I could do everything.
                </p>
              </div>
              <!--footer-->
              <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                  Close
                </button>
                <button class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>

<script>
export default {

}
</script>

<style>

</style>