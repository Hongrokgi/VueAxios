import { createWebHistory, createRouter} from "vue-router";
import VueAxios from "../components/VueAxios.vue";
import VueAxiosPost from "@/components/VueAxiosPost";
import VueAxiosPut from "@/components/VueAxiosPut";
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
    },
    {
        path: "/put",
        name: "AxiosPut",
        component: VueAxiosPut,
    }
];

const index = createRouter({
    history: createWebHistory(),routes
});

export default index;