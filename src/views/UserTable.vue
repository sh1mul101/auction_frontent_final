<template>

    <div>
        <Header />
        <Nav />
        <section class="flex w-full"> 
            <div class="m-auto">User CRUD
                <!-- <table class="table-auto">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>E-mail</th>
                            <th>Account Type</th>
                            <th>Nid No</th>
                            <th>Nid Front Image</th>
                            <th>Nid Back Image</th>
                            <th>Vat No</th>
                            <th>Vat Image</th>
                            <th>Author</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="users in user.data" :key="users.id">
                            <td>{{users.id}}</td>
                            <td>{{users.name}}</td>
                            <td>{{users.mobile_no}}</td>
                            <td>{{users.email}}</td>
                            <td>{{users.acc_type}}</td>
                            <td>{{users.nid_no}}</td>
                            <td>{{users.nid_ft}}</td>
                            <td>{{users.nid_bk}}</td>
                            <td>{{users.vat_no}}</td>
                            <td>{{users.vat_img}}</td>
                            <td>{{users.created_at}}</td>
                            <td>{{users.updated_at}}</td>
                        </tr>
                    </tbody>
                </table> -->
            </div>
        </section>
    </div>
  
</template>

<script>

import Header from "../components/Header";
import Nav from "../components/Nav";
import axios from "axios";
import { onMounted } from "vue";

export default {
    name: "UserTable",
    components: {
        Header,
        Nav
    },

    setup() {
        onMounted(() => {
            axios.get("user");
        });
    },

   /** mounted(){
    //API Call
    axios
    .get("user")
    .then((res)=>
    {
      this.user = res.data;
     
    })
  },
   data() {
        return {
            user:[]
        }
    }, **/

}
</script>
