<template>
   <div>
        <div v-if="user!==null" class="flex items-center justify-center">
            <router-link to="/auctionadd">
                <button class="hover:bg-green-300 rounded-lg hover:text-green-100 mx-2 px-2 focus:outline-none">
                Add Your Auction
                </button>
            </router-link>
        </div>

        <div v-else class="flex items-center justify-center">
            <router-link to="/login">
                <button class="hover:bg-green-300 rounded-lg hover:text-green-100 mx-2 px-2 focus:outline-none">
                Add Your Auction
                </button>
            </router-link>
        </div>
   </div>
</template>

<script>
 import { mapGetters } from "vuex";
export default {
    name: "AddUrAuctionBtn",
   computed: {
     ...mapGetters(["user"]),
   },
 }
</script>