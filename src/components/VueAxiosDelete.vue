<template>
  <div class="card">
    <div class="card-header">Vue Axios DELETE - BezKoder.com</div>
    <div class="card-body">
      <div class="input-group input-group-sm">
        <button class="btn btn-sm btn-danger" @click="deleteAllData">Delete All</button>

        <input type="text" ref="delete_id" class="form-control m1-2" placeholder="Id"/>
        <div class="input-group-append">
          <button class="btn btn-sm btn-danger" @click="deleteDataById">Delete by Id</button>
        </div>

        <button class="btn btn-sm btn-warning m1-2" @click="clearDeleteOutput">Clear</button>
      </div>

      <div v-if="deleteResult" class="alert alert-secondary mt-2" role="alert"><pre>{{deleteResult}}</pre></div>
    </div>
  </div>
</template>

<script>
import http from "../js/http-common";
export default {
  name: "VueAxiosDelete",
  data() {
    return {
      putResult: null,
      deleteResult: null,
    }
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    async deleteAllData() {
      try {
        const res = await http.delete("/tutorials");

        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        this.deleteResult = this.formatResponse(result);
      } catch (err) {
        this.deleteResult = this.formatResponse(err.response?.data) || err;
      }
    },

    async deleteDataById() {
      const id = this.$refs.delete_id.value;

      if(id) {
        try {
          const res = await http.delete(`/tutorials/${id}`);

          const result = {
            status: res.status + "=" + res.statusText,
            headers: res.headers,
            data: res.data,
          };

          this.deleteResult = this.formatResponse(result);
        } catch (err) {
          this.deleteResult = this.formatResponse(err.response?.data) || err;
        }
      }
    },

    clearDeleteOutput() {
      this.deleteResult = null;
    }
  }
}
</script>

<style scoped>

</style>