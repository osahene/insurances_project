<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base align-middle text-gray-800">
            {{ transTitle }}
          </h3>
        </div>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button
            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            See all
          </button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              {{ transId }}
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              {{ productName }}
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              {{ transType }}
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              {{ transDate }}
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              {{ transAmount }}
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              {{ transStatus }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
            >
              {{ transIdRep }}
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ productNameRep }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              {{ transTypeRep }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <!-- <i class="fas fa-arrow-up text-green-500 mr-4"></i> -->
              {{ transDateRep }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <!-- <i class="fas fa-arrow-up text-green-500 mr-4"></i> -->
              {{ transAmountRep }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <!-- <i class="fas fa-arrow-up text-green-500 mr-4"></i> -->
              {{ transStatusRep }}
            </td>


          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "trans-stats",
  props: {
    transTitle: {
      type: String,
      default: "Transactions",
    },
    transId: {
      type: String,
      default: "ID",
    },
    // can be any of the text color utilities
    // from tailwindcss
    productName: {
      type: String,
      default: "Product",
    },
    transType: {
      type: String,
      default: "Type",
    },
    transDate: {
      type: String,
      default: "Date",
    },
    transAmount: {
      type: String,
      default: "Amount",
    },
     transStatus: {
      type: String,
      default: "Status",
    },
    // Transaction responses
    transRep: {
      type: String,
      default: "Emergency service",
    },
    transIdRep: {
      type: String,
      default: "500",
    },
    productNameRep: {
      type: String,
      default: "paracetamol",
    },
    transTypeRep: {
      type: String,
      default: "emergency",
    },
    transDateRep: {
      type: String,
      default: "5th November 2020",
    },
    transAmountRep: {
      type: String,
      default: "20",
    },
    transStatusRep: {
      type: String,
      default: "covered",
    },
  },
};
</script>
