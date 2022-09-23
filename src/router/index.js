import { createWebHistory, createRouter} from "vue-router";
import VueAxios from "../components/VueAxios.vue";
import VueAxiosPost from "@/components/VueAxiosPost";
const routes = [
    {
        path: "/",
        name: "Axios",
        component: VueAxios,
    },
    {
        path: "/post",
        name: "AxiosPost",
        component: VueAxiosPost,
    }
];

const index = createRouter({
    history: createWebHistory(),routes
});

export default index;