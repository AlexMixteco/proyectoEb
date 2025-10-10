import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory} from 'vue-router';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/', name: 'landing', component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
    children: [
    { path: '/', name: 'home', component: HomePage},
    {path: '/cotizaciones', name: 'cotizaciones', component: () => import('@/modules/landing/pages/cotizacionesPage.vue')},
    {path: '/clientes', name: 'clientes', component: () => import('@/modules/landing/pages/clientesPage.vue')},
    {path: '/AgregarCliente', name: 'AgregarCliente', component: () => import('@/modules/landing/pages/AgregarClientes.vue')},
    {path: '/EditarCliente/:id', name: 'EditarCliente', component: () => import('@/modules/landing/pages/EditarClientes.vue')},
    {path: '/proveedores', name: 'proveedores', component: () => import('@/modules/landing/pages/ProveedoresPage.vue')},
    {path: '/AgregarProveedor', name: 'AgregarProveedor', component: () => import('@/modules/landing/pages/AgregarProveedores.vue')},
    {path: '/EditarProveedor/:id', name: 'EditarProveedor', component: () => import('@/modules/landing/pages/EditarProveedores.vue')},
    {path: '/pedidos', name: 'pedidos', component: () => import('@/modules/landing/pages/pedidosPage.vue')},
    {path: '/productos', name: 'productos', component: () => import('@/modules/landing/pages/productosPage.vue')},
    {path: '/catalogo', name: 'catalogo', component: () => import('@/modules/landing/pages/catalogoPage.vue')},
    {path: '/ordenP',name: 'ordenP',component: () => import('@/modules/landing/pages/ordenpPage.vue') },
    {path: '/editarProductos/:id',name: 'EditarProducto',component: () => import('@/modules/landing/pages/editarproductoPage.vue')},
  ]

    },


    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' }, //'/login',
      component: () => import('@/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/auth/pages/LoginPage.vue'),
        },
      ],
    },

      {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: NotFound404,
    },
  ],
});

export default router;


