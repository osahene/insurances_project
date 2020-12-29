<template>
  <!-- Navbar -->
  <nav class="left-0 w-full z-50 py-2 mb-3 md:flex-row md:flex-no-wrap md:justify-start flex absolute bg-white ">
      <div class="flex-1 flex items-left sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-left">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">{{navTitle}}</a>
            <a href="#" class="px-12 p-4 "><span style="color: Dodgerblue"><input id="med" name="push_notifications" type="checkbox" class="h-4 w-4 border-4 rounded "></span> <label for="med" class="font-size-2 font-semibold px-2 text-gray-700">Comments</label></a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>   
    </nav>
  <!-- End Navbar -->
</template>

<script>


export default {
  
  props:{
    navTitle: {
      type: String,
      default: "Dashboard",
    },
  },
};
</script>
