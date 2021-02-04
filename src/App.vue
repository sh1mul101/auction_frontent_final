<template>
  <div>
    <div id="">
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {
  },
  
  async created() {
      const response = await axios.get('user');
      this.$store.dispatch('user', response.data);
  },
};
</script>