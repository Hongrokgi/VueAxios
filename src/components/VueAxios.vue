<template>
  <div id="app" class="container">
    <div class="card">

      <div class="card-header">Vue Axios GET - BezKoder.com</div>
      <div class="card-body">
        <div class="input-group input-group-sm">
          <button class="btn btn-sm btn-primary" @click="getAllData">Get All</button>

          <input type="text" ref="get_id" class="form-control m1-2" placeholder="Id"/>
          <div class="input-group-append">
            <button class="btn btn-sm btn-primary" @click="getDataById">Get by Id</button>
          </div>

          <input type="text" ref="get_title" class="form-control m1-2" placeholder="Title"/>
          <div class="input-group-append">
            <button class="btn btn-sm btn-primary" @click="getDataByTitle">Find By Title</button>
          </div>

          <button class="btn btn-sm btn-warning m1-2" @click="clearGetOutput">Clear</button>
        </div>

        <div v-if="getResult" class="alert alert-secondary mt-2" role="alert"><pre>{{getResult}}</pre></div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../js/http-common";

export default {
  name: "VueAxios",
  data() {
    return {
      getResult: null,
    }
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res,null,2);
    },

    async getAllData() {
      try {
        const res = await http.get("/tutorials");

        const result = {
          status : res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        this.getResult = this.formatResponse(result);
      } catch (error) {
        this.getResult = this.formatResponse(error.response?.data) || error;
      }
    },

    async getDataById() {
      const id = this.$refs.get_id.value;

      if(id) {
        try {
          const res = await http.get(`/tutorials/${id}`);

          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };

          this.getResult = this.formatResponse(result);
        } catch (err) {
          this.getResult = this.formatResponse(err.response?.data) || err;
        }
      }
    },

    async getDataByTitle() {
      const title = this.$refs.get_title.value;

      if(title) {
        try {
          const res = await http.get("/tutorials", {
            params : {
              title: title
            },
          });

          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };
          this.getResult = this.formatResponse(result);
        } catch (err) {
          this.getResult = this.formatResponse(err.response?.data) || err;
        }
      }
    },

    clearGetOutput() {
      this.getResult = null;
    },
  }
}
</script>

<style scoped>

</style>