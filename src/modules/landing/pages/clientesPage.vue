<template>
  <div class="flex items-start justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full mt-8 mx-20 bg-white p-8 rounded-lg shadow-md">

      <!-- Título + Botón Agregar Cliente -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold font-[Inter]">Clientes</h2>
        <router-link to="/AgregarCliente" class="btn btn-active btn-success">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
        </svg>

        </router-link>

      </div>

      <!-- Tabla de clientes -->
      <TablaComponent
        :encabezado="['Núm. de cliente', 'N. de la empresa', 'Impresión','Razón social', 'RFC', 'Email', 'Teléfono','Régimen fiscal', 'CFDI','Estado', 'Colonia','C.p.','Calle','Núm. exterior','Núm. interior']"
        :claves="['num_cliente','nombre_empresa','impresion','razon_social','rfc','email','telefono','regimen','cfdi','estado','colonia','cp','calle','num_ext','num_int']"
        :info="clientes"
        @eliminar="borrarCliente"
        @editar="editarCliente"
      />
    </div>
  </div>
</template>

<script setup>
import TablaComponent from '@/components/TablaComponent.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


const clientes = ref([])


const obtenerClientes = async () => {
  const options = {
    method: 'GET',
    url: 'https://apisprueba.onrender.com/api/buscarTabla/clientes',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios.request(options)
    console.log(response.data)
    clientes.value = response.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
    clientes.value = []
  }
}


const borrarCliente = async (num_cliente) => {
  console.log('Eliminando cliente:', num_cliente)
  const options = {
    method: 'DELETE',
    url: `https://apisprueba.onrender.com/api/clientes/borrar/${num_cliente}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    await axios.request(options)
    console.log(`Cliente con num_cliente ${num_cliente} eliminado`)
    alert('Cliente eliminado correctamente')
    obtenerClientes()
  } catch (error) {
    console.error('Error al eliminar cliente:', error)
    alert('Error al eliminar cliente')
  }
}

const router = useRouter()

const editarCliente = (cliente) => {
  router.push({ name: 'EditarCliente', params: { id: cliente.num_cliente } })
}

obtenerClientes()

</script>

