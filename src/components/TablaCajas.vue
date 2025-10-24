<template>
  <div class="overflow-x-auto">
    <table class="table w-full">

      <thead>
        <tr>
          <th v-for="etiqueta in encabezado" :key="etiqueta" class="font-bold">
            {{ etiqueta }}
          </th>

        </tr>
      </thead>


      <tbody>
        <tr v-for="inf in info" :key="inf.id" class="hover">

          <td v-for="c in claves" :key="c">
            {{ inf[c] }}
          </td>

          <!-- botones de acción -->
          <td>
            <div class="flex gap-2">


           <!-- Botón editar -->
           <button
           class="flex items-center justify-center focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-3 focus:ring-yellow-300 rounded-md text-sm px-3 py-2 dark:focus:ring-yellow-900"
           @click="editar(inf)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
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
const emit = defineEmits(['editar'])


const editar = (inf) => emit('editar', inf)
</script>
