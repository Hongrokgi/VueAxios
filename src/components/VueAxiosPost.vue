<template>
  <div class="card">
    <div class="card-header">Vue Axios POST - BezKoder.com</div>
    <div class="card-body">
      <div class="form-group">
        <input type="text" class="form-control" ref="post_title" placeholder="Title"/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" ref="post_description" placeholder="Description"/>
      </div>
      <button class="btn btn-sm btn-primary" @click="postData">Post Data</button>
      <button class="btn btn-sm btn-warning m1-2" @click="clearPostOutput">Clear</button>

      <div v-if="postResult" class="alert alert-secondary mt-2" role="alert"><pre>{{postResult}}</pre></div>
    </div>
  </div>
</template>

<script>
import http from "../js/http-common";

export default {
  name: "VueAxiosPost",
  data() {
    return {
      postResult: null,
    }
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res,null, 2);
    },

    async postData() {
      const postData = {
        title: this.$refs.post_title.value,
        description: this.$refs.post_description.value,
      };
      try {
        const res = await http.post("/tutorials", postData, {
          headers: {
            "x-access-token": "token-value",
          },
        });

        const result = {
          status: res.status + "-" + res.statusText,
          headers : res.headers,
          data: res.data,
        };
        this.postResult = this.formatResponse(result);
      } catch (err) {
        this.postResult = this.formatResponse(err.response?.data)
      }
    },

    clearPostOutput() {
      this.postResult = null;
    },
  }
}
</script>

<style scoped>

</style>