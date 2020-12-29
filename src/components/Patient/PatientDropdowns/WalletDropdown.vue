<template>
  <div>
   <router-link
        to="/patient/wallet"
        v-slot="{ href, route, navigate, isActive }"
    >
        <a
        :href="href"
        @click="navigate"
        class="text-xs uppercase py-3 font-bold block"
        :class="[
            isActive
            ? 'text-green-500 hover:text-green-600'
            : 'text-gray-800 hover:text-gray-600',
        ]"
        ref="btnDropdownRef"
        v-on:click="toggleDropdown($event)"
        >
        <i
            class="fas fa-wallet fa-3x mr-2 text-sm"
            :class="[isActive ? 'opacity-75' : 'text-gray-400']"
        ></i>
        Wallet

        <div
            ref="popoverDropdownRef"
            class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            v-bind:class="{
                hidden: !dropdownPopoverShow,
                block: dropdownPopoverShow,
            }"
        >
           <router-link
            to="/patient/wallet"
            class="text-xs py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
            Transactions
          </router-link>
      
        </div>
        </a>
        
    </router-link>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>