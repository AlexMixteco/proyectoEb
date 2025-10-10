<template>
  <div class="flex items-start justify-center min-h-screen bg-gray-100 p-4">
    <form
      class="w-full mt-8 mx-20 bg-white p-8 rounded-lg shadow-md"
      @submit.prevent="guardarCambios"
    >
      <!-- Título -->
      <div class="flex justify-center w-full mb-6">
        <h1 class="text-5xl font-bold text-gray-800 text-center font-[Inter]">
          Editar cliente
        </h1>
      </div>

      <!-- Primera fila -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
        <div class="sm:col-span-1">
          <label for="nombre_empresa" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Nombre de la empresa
          </label>
          <input id="nombre_empresa" type="text" v-model="form.nombre_empresa"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="impresion" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Impresión
          </label>
          <input id="impresion" type="text" v-model="form.impresion"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
      </div>

      <!-- Segunda fila -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 mt-4">
        <div class="sm:col-span-1">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Correo electrónico
          </label>
          <input id="email" type="email" v-model="form.email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="telefono" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Teléfono
          </label>
          <input id="telefono" type="text" v-model="form.telefono"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
      </div>

      <!-- Datos fiscales -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 mt-4">
        <div class="sm:col-span-1">
          <label for="razon_social" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Razón social
          </label>
          <input id="razon_social" type="text" v-model="form.razon_social"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="rfc" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            RFC
          </label>
          <input id="rfc" type="text" v-model="form.rfc"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
         <div class="sm:col-span-1">
          <label class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Régimen fiscal
          </label>
          <select

            v-model="form.regimen"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          >
            <option value="">Selecciona un régimen</option>
            <option value="605-Sueldos y Salarios e Ingresos Asimilados a Salarios">Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
            <option value="606-Arrendamiento">Arrendamiento</option>
            <option value="607-Enajenación o Adquisición de Bienes">Enajenación o Adquisición de Bienes</option>
            <option value="608-Demás Ingresos">Demás Ingresos</option>
            <option value="612-Actividades Empresariales y Profesionales">Actividades Empresariales y Profesionales</option>
            <option value="614-Ingresos por Intereses">Ingresos por Intereses</option>
            <option value="616-Sin Obligaciones Fiscales">Sin Obligaciones Fiscales</option>
            <option value="621-Incorporación Fiscal">Incorporación Fiscal</option>
            <option value="622-Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras">Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
            <option value="623-Opcional para Grupos de Sociedades">Opcional para Grupos de Sociedades</option>
            <option value="624-Coordinados">Coordinados</option>
            <option value="625-Actividades con Ingresos por Plataformas Tecnológicas">Actividades con Ingresos por Plataformas Tecnológicas</option>
            <option value="601-Ley general de personas morales">Ley general de personas morales</option>
            <option value="603-Personas Morales con Fines no Lucrativos">Personas Morales con Fines no Lucrativos</option>
          </select>
        </div>

       <div class="sm:col-span-1">
          <label class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            CFDI
          </label>
          <select

            v-model="form.cfdi"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          >
            <option value="">Selecciona un CFDI</option>
            <option value="G01-Adquisición de mercancias">Adquisición de mercancias</option>
            <option value="G03-Gastos en general">Gastos en general</option>
            <option value="S01-Sin efectos fiscales">Sin efectos fiscales</option>
          </select>
        </div>

      </div>

      <!-- Dirección -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 mt-4">
        <div class="sm:col-span-1">
          <label for="estado" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Estado
          </label>
          <input id="estado" type="text" v-model="form.estado"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="colonia" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Colonia
          </label>
          <input id="colonia" type="text" v-model="form.colonia"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="cp" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            C.P.
          </label>
          <input id="cp" type="text" v-model="form.cp"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
      </div>

      <!-- Calle y números -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 mt-4">
        <div class="sm:col-span-1">
          <label for="calle" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Calle
          </label>
          <input id="calle" type="text" v-model="form.calle"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="num_ext" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Núm. exterior
          </label>
          <input id="num_ext" type="text" v-model="form.num_ext"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
        <div class="sm:col-span-1">
          <label for="num_int" class="block text-gray-700 text-sm font-bold mb-2 font-[Inter]">
            Núm. interior
          </label>
          <input id="num_int" type="text" v-model="form.num_int"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 font-[Inter]"
          />
        </div>
      </div>

      <!-- Botón -->
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">
          Actualizar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const form = reactive({
  nombre_empresa: '',
  impresion: '',
  razon_social: '',
  rfc: '',
  email: '',
  telefono: '',
  regimen: '',
  cfdi: '',
  estado: '',
  colonia: '',
  cp: '',
  calle: '',
  num_ext: '',
  num_int: ''
})


const cargarCliente = async () => {
  try {
    const { id } = route.params
    const res = await axios.get(`https://apisprueba-s4hw.onrender.com/api/clientes/${id}`)

    if (res.data && res.data.length > 0) {
      Object.assign(form, res.data[0])

    } else {
      console.warn('No se encontró el cliente con ese número')
    }
  } catch (error) {
    console.error('Error al cargar cliente:', error)
  }
}


const ActualizarCliente = async (json, num_cliente) => {
  try {
    const res = await axios.put(`https://apisprueba-s4hw.onrender.com/api/clientes/actualizar/${num_cliente}`, json)
    console.log("Cliente actualizado:", res.data)
    alert("Cliente actualizado correctamente")
    router.push('/clientes')
  } catch (error) {
    console.error("Error al actualizar cliente:", error)
  }
}


const guardarCambios = async () => {
  await ActualizarCliente(form, form.num_cliente)
}

cargarCliente()
</script>
