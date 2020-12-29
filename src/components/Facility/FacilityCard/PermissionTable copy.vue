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
            Health Record
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
        <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
          Open small modal
        </button>
        <daily-records />
      </div>
    <!-- Share data model ends -->
      </div>
    </div>
    
    
  </div>
</template>
<script>
import DailyRecords from "@/components/Patient/Form/DailyRecords.vue";
// import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";



export default {
  components: { 
    DailyRecords
    },
  data() {
    return {
     showModal:false
    };
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    }
  },
  // components: {
  //   TableDropdown,
  // },
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
