<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th v-for="etiqueta in encabezado" :key="etiqueta" class="font-bold">
            {{ etiqueta }}
          </th>

        </tr>
      </thead>

      <!-- body -->
      <tbody>
        <tr v-for="inf in info" :key="inf.id" class="hover">
          <!-- datos de la cotización -->
          <td v-for="c in claves" :key="c">
            {{ inf[c] }}
          </td>

          <!-- botones de acción -->
          <td>
           <div class="flex gap-2">
  <!-- Botón eliminar -->
  <button
    class="flex items-center justify-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-3 focus:ring-red-300 font-medium rounded-md text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    @click="eliminar(inf.id)"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
    </svg>
  </button>

  <!-- Botón hacer pedido -->
  <button
    class="flex items-center justify-center focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-3 focus:ring-yellow-300 font-medium rounded-md text-sm px-3 py-2 dark:focus:ring-yellow-900"
    @click="hacerPedido(inf)"
  >
    Hacer pedido
  </button>
</div>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { encabezado, info, claves } = defineProps(['encabezado', 'info', 'claves'])
const emit = defineEmits(['eliminar', 'hacerPedido'])

const eliminar = (id) => emit('eliminar', id)
const hacerPedido = (inf) => emit('hacerPedido', inf)
</script>
