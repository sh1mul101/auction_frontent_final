<template>
  <div>
      
        <div v-if="user!==null" class="pl-2">
          <div class="relative">
            <button
              @click="isOpen = !isOpen"
              class="flex items-center justify-center relative z-10 focus:outline-none"
            >
              <i class="material-icons">menu</i>
            </button>
            <button
              v-if="isOpen"
              @click="isOpen = false"
              class="fixed inset-0 bg-black opacity-50 cursor-default h-full w-full"
            ></button>
            <!-- top-0 left-0 right-0 bottom-0 can be written as inset-0 inset-x-0 also for left right inset-y-0 top/bottom -->
          </div>
          <div
            v-if="isOpen"
            class="rounded-lg py-2 bg-gray-100 w-38 mt-1 shadow-xl absolute right-2"
          >
            <router-link
              to="/userprofile"
              class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
            >
              Profile
            </router-link>
            <router-link
              to="/"
              class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
            >
              Your Auctions</router-link
            >
            <router-link
              to="/"
              class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
            >
              Report a Problem
            </router-link>
            <div class="">
              <a
                href="javascript:void(0)"
                @click="handleClick"
                class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
              >
                Log Out</a
              >
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "ThreeDotUser",

    
    methods: {
        handleClick() {
            localStorage.removeItem('token');
            this.$store.dispatch('user', null);
            this.$router.push('/login')
        }
    },

    data() {
        return {
        isOpen: false,
        };
    },

}
</script>