<template>
  <div class="card">
    <div class="card-header">Vue Axios PUT - BezKoder.com</div>
    <div class="card-body">
      <div class="form-group">
        <input type="text" class="form-control" ref="put_id" placeholder="Id"/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" ref="put_title" placeholder="Title"/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" ref="put_description" placeholder="Description"/>
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" ref="put_published"/>
        <label class="form-check-label" for="put_published">Publish</label>
      </div>
      <button class="btn btn-sm btn-primary" @click="putData">Update Data</button>
      <button class="btn btn-sm btn-warning m1-2" @click="clearPutOutput">Clear</button>

      <div v-if="putResult" class="alert alert-secondary mt-2" role="alert"><pre>{{putResult}}</pre></div>
    </div>
  </div>
</template>

<script>
import http from "../js/http-common";

export default {
  name: "VueAxiosPut",
  data() {
    return {
      putResult: null,
    }
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res, null,2);
    },

    async putData() {
      const { put_id, put_title, put_description, put_published} = this.$refs;
      const id = put_id.value;

      if(id) {
        const putData = {
          title: put_title.value,
          description: put_description.value,
          published: put_published.checked,
        };

        try {
          const res = await http.put(`/tutorials/${id}`, putData, {
            headers: {
              "x-access-token" : "token-value",
            },
          });
          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };
          this.putResult = this.formatResponse(result);
        } catch (err) {
          this.putResult = this.formatResponse(err.response?.data) || err;
        }
      }
    },

    clearPutOutput() {
      this.putResult = null;
    },
  }
}
</script>

<style scoped>

</style>