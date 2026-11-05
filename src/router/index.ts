import { createRouter, createWebHistory } from 'vue-router';
import Inicioview from '../views/Inicioview.vue';
import Sesionview from '../views/Sesionview.vue';
import Tiendaview from '../views/Tiendaview.vue';
import Nosotrosview from '../views/Nosotrosview.vue';
import Jugarview from '../views/Jugarview.vue';
import Planesview from '@/views/Planesview.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicioview },
    { path: '/inicio', component: Inicioview },
    { path: '/nosotros', component: Nosotrosview },
    { path: '/jugar', component: Jugarview },
    { path: '/sesion', component: Sesionview },
    { path: '/tienda', component: Tiendaview },
    { path: '/planes/:id', component: Planesview, props: true },
  ],
});

export default router;