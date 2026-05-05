import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
//import JobListing from "@/components/JobListing.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddJobView from "@/views/AddJobView.vue";
import JobsView from "@/views/JobsView.vue";
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/jobs',
        name:'jobs',
        component: JobsView
    },
    {
        path:'/:catchAll(.*)',
        name:'not-found',
        component:NotFoundView
    },
    {
        path:'/jobs/add',
        name:'add-job',
        component:AddJobView
    },
    {
        path:'/job/:id',
        name:'job',
        component:JobView
    }

]
})
export default router;