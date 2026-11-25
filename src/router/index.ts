import { createRouter, createWebHistory } from 'vue-router';
import Inicioview from '../views/Inicioview.vue';
import Sesionview from '../views/Sesionview.vue';
import Tiendaview from '../views/Tiendaview.vue';
import Nosotrosview from '../views/Nosotrosview.vue';
import Jugarview from '../views/Jugarview.vue';
import Planesview from '@/views/Planesview.vue';
import TiendaDetalleview from '@/views/TiendaDetalleview.vue';
import JugarDetalleview from '@/views/JugarDetalleview.vue';
import Calendarview from '@/views/Calendarview.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicioview },
    { path: '/inicio', component: Inicioview },
    { path: '/nosotros', component: Nosotrosview },
    { path: '/calendar', component: Calendarview },
    { path: '/jugar', component: Jugarview},
    { path: '/jugar/last', component: JugarDetalleview, props: true },
    { path: '/jugar/random', component: JugarDetalleview, props: true },
    { path: '/jugar/:id', component: JugarDetalleview, props: true },
    { path: '/sesion', component: Sesionview },
    { path: '/tienda/', component: Tiendaview },
    { path: '/tienda/:id', component: TiendaDetalleview, props: true },
    { path: '/planes/:id', component: Planesview, props: true },
  ],
});

export default router;