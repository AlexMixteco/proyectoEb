<template>
  <div class="flex justify-center items-center min-h-screen p-6 bg-gray-50">
    <!-- Contenedor flex que ocupa todo el ancho -->
    <div class="flex w-full justify-evenly items-center">

      <router-link to="/cotizaciones" class="group flex flex-col items-center">
        <img
          src="@/assets/cotizaciones.png"
          alt="Cotizaciones"
          class="w-24 md:w-32 h-24 md:h-32 object-contain cursor-pointer transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
        <p class="text-center mt-2 font-semibold">Cotizaciones</p>
      </router-link>

      <router-link to="/pedidosManual" class="group flex flex-col items-center">
        <img
          src="@/assets/pedidos.png"
          alt="Pedidos"
          class="w-24 md:w-32 h-24 md:h-32 object-contain cursor-pointer transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
        <p class="text-center mt-2 font-semibold">Pedidos</p>
      </router-link>

      <router-link to="/clientes" class="group flex flex-col items-center">
        <img
          src="@/assets/clientes.png"
          alt="Clientes"
          class="w-24 md:w-32 h-24 md:h-32 object-contain cursor-pointer transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
        <p class="text-center mt-2 font-semibold">Clientes</p>
      </router-link>

      <router-link to="/catalogo" class="group flex flex-col items-center">
        <img
          src="@/assets/productos.png"
          alt="Productos"
          class="w-24 md:w-32 h-24 md:h-32 object-contain cursor-pointer transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
        <p class="text-center mt-2 font-semibold">Productos</p>
      </router-link>

      <router-link to="/proveedores" class="group flex flex-col items-center">
        <img
          src="@/assets/proveedores.png"
          alt="Proveedores"
          class="w-24 md:w-32 h-24 md:h-32 object-contain cursor-pointer transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
        <p class="text-center mt-2 font-semibold">Proveedores</p>
      </router-link>

      <router-link to="/Configuraciones" class="group flex flex-col items-center">
        <img
          src="@/assets/configuraciones.png"
          alt="Configuraciones"
          class="w-24 md:w-32 h-24 md:h-32 object-contain cursor-pointer transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
        />
        <p class="text-center mt-2 font-semibold">Configuraciones</p>
      </router-link>

    </div>
  </div>
</template>
