
<template>
 <div class="fixed z-40 border-4 border-red bg-orange-200 inset-0 overflow-y-auto">
  <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-left sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0  bg-gray-500 opacity-75"></div>
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
     
      <div class="mt-10 sm:mt-0  ">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg text-center font-medium leading-6 text-red">Share Data with Doctor</h3>
              <p class="bg-red-700 text-lg text-center text-red-600">
                Ensure that you have selected the right personnel 
                <br>
                that you are sending the information to.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <!-- Start Category -->
                    <div>
                      <label for="category" class="block h-8 uppercase overflow-hidden">
                        Category
                      </label>
                      <select name="category" class="w-full border-2 border-gray-500  py-2">
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Doctor 1</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">NHIS</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Prescription</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Reports</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Dummy Texts</option>
                      </select>
                    </div>
                    <!-- end Category -->
                    <div class="mt-4 col-span-6 sm:col-span-3">
                      <label for="hospital" class="block h-8 uppercase overflow-hidden">
                        Hospital
                      </label>
                      <select name="hospital" class="w-full border-2 border-gray-500  py-2">
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Doctor 1</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">NHIS</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Prescription</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Reports</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Dummy Texts</option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <div class="mt-4 col-span-6 sm:col-span-3">
                      <label for="doctor" class="block h-8 uppercase overflow-hidden">
                        doctor
                      </label>
                      <select name="doctor" class="w-full border-2 border-gray-500  py-2">
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Doctor 1</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">NHIS</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Prescription</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Reports</option>
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Dummy Texts</option>
                      </select>
                    </div>

                    </div>

                    <div class="col-span-6 sm:col-span-3">
                     <div class="mt-4 col-span-6 sm:col-span-3">
                      <label for="rights" class="block h-8 uppercase overflow-hidden">
                        permission
                      </label>
                      <select name="rights" class="w-full border-2 border-gray-500  py-2">
                        <option href="#" class="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">Read only</option>              
                      </select>
                    </div>

                    </div>

                    <div class="col-span-6">
                     <div class="mt-4 col-span-6 sm:col-span-3">
                      <label for="hospital" class="block h-8 uppercase overflow-hidden">
                        From
                      </label>
                      <input type="text" name="from" id="from" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">                      
                    </div>
                    </div>

                    <div class="col-span-6">
                     <div class="mt-4 col-span-6 sm:col-span-3">
                      <label for="hospital" class="block h-8 uppercase overflow-hidden">
                        to
                      </label>
                      <input type="text" name="to" id="to" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">                      
                    </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="button" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Save
                  </button>
                </div> -->
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="button" class="w-full  justify-center uppercase rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    agree
                  </button>
                  <button type="button" class="mt-3 w-full inline-flex justify-center uppercase rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
     open: false
    };
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
