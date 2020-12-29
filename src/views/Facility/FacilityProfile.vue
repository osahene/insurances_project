<template>
  <div>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">
        <div class="container justify-center mx-auto px-4">
          <div
            class="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <transition>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">                   
                  <component :is="editCard"> </component>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="relative w-auto pr-4 z-10 float-right  flex-initial">                    
          <button
            class="bg-green-500 active:bg-red-600 hover:shadow-md shadow text-xs px-4 py-2 rounded-full  focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            @click="editCard == 'PatientCardSettings' ? editCard = 'PatientProfileMain' : editCard ='PatientCardSettings' "
            type="button"
          >
          <span style="font-size:25px; color:red;"><i class="far fa-edit fa-lg"></i></span>
            
          </button>
       </div>
      <!-- end edit button -->
      </section>
      <!-- Edit button -->
    </main>
    <footer-component />
  </div>
</template>
<script>
import FooterComponent from "@/components/Footers/Footer.vue";
import PatientProfileMain from "@/components/Patient/PatientCard/PatientProfileMain.vue";
import PatientCardSettings from "@/components/Patient/PatientCard/PatientCardSettings.vue";
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
      editCard: PatientProfileMain
    };
  },
  components: {
    PatientCardSettings,
    PatientProfileMain,
    FooterComponent,
  },
};
</script>
