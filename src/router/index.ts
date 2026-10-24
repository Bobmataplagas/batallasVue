import { createRouter, createWebHistory } from 'vue-router';
import Inicioview from '../views/Inicioview.vue';
import Sesionview from '../views/Sesionview.vue';
import Tiendaview from '../views/Tiendaview.vue';
import Ayudaview from '../views/Ayudaview.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicioview },
    { path: '/inicio', component: Inicioview },
    { path: '/sesion', component: Sesionview },
    { path: '/tienda', component: Tiendaview },
    { path: '/ayuda', component: Ayudaview },
  ],
});

export default router;