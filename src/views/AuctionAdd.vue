<template>
  <div>
      <body class="bg-white max-h-screen">
        <Header />
        <NavUser />
        
      <main class="">
          <form @submit.prevent="handleSubmit">
            <div class="flex flex-col items-center justify-center">
              <div class="w-2/3 bg-gray-100 mt-4  h-screen">
                <h1 class="p-2 text-2xl font-sans font-semibold text-gray-500">Fill in the details</h1>
                <hr class="pb-2" />
                <br>
                <div class="w-2/3">
                  
                </div>
              </div>

            </div>
          </form>
      </main>
      </body>
  </div>
</template>

<script>
import Header from "../components/Header"
import NavUser from "../components/NavUser"
export default {
    name: "AuctionAdd",
    components: {
      Header,
      NavUser
    }
}
</script>