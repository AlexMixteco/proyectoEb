<template>
  <div class="min-h-screen w-full p-4 bg-gray-100 flex justify-center items-start">
    <div class="w-full max-w-[1700px] bg-white p-6 rounded shadow mt-8">
      <h2 class="text-2xl font-bold font-[Inter]">Cotizaciones</h2>

     <div class="flex justify-between gap-6">

  <div class="flex justify-between gap-6 w-full">
 <div class="flex gap-4"> <!-- Contenedor horizontal: imagen + inputs -->

  <!-- Imagen -->
  <div>
    <img
      src="@/assets/disenoCaja.png"
      alt="Diseño de caja"
      class="w-[600px] h-auto rounded-lg shadow-md"
    />


<!-- Contenedor de inputs -->
<!-- Contenedor de inputs desplazado a la derecha -->
<div class="flex mt-2" style="margin-left: 5rem;"> <!-- ajusta 4rem según lo necesites -->

  <!-- Primer input -->
  <div class="mr-19">
    <input :value="largoUno" class="w-14 px-1 py-0.5 border rounded" />
  </div>

  <!-- Segundo input -->
  <div class="mr-17">
    <input :value="anchoUno" class="w-14 px-1 py-0.5 border rounded" />
  </div>

  <!-- Tercer input -->
  <div class="mr-18">
    <input :value="largoDos" class="w-14 px-1 py-0.5 border rounded" />
  </div>

  <!-- Cuarto input -->
  <div class="mr-9">
    <input :value="anchoDos" class="w-14 px-1 py-0.5 border rounded" />
  </div>

  <!-- Quinto input -->
  <div class="mr-10">
    <input v-model.number="ceja" class="w-14 px-1 py-0.5 border rounded" />
  </div>

</div>

<!-- Input sumaLargo alineado debajo del primero -->
<div class="mt-3" style="margin-left: 21rem;">
  <input :value="sumaLargo" class="w-14 px-1 py-0.5 border rounded" />
</div>


  </div>

  <!-- Inputs laterales a la derecha de la imagen -->
  <div class="flex flex-col gap-14 mt-16">
    <input class="w-14 px-1 py-0.5 border rounded" :value="marcaUno" />
    <input class="w-14 px-1 py-0.5 border rounded" :value="altoTotal" />
    <input class="w-14 px-1 py-0.5 border rounded" :value="marcaDos" />
  </div>


  <div class="flex items-start mt-37">
    <input class="w-14 px-1 py-0.5 border rounded" :value="sumaAlto" />
  </div>

</div>


  <!-- Columna derecha: fieldsets más angostos -->
  <div class="flex flex-col w-[25%] gap-2 text-xs">
    <!-- Fieldset medidas internas -->
    <fieldset class="bg-gray-50 rounded p-2 border border-gray-300 shadow-sm">
      <legend class="px-1 text-sm font-semibold">Medidas internas</legend>
      <table class="w-full border border-gray-300 mt-2 rounded text-xs">
        <thead>
          <tr class="bg-gray-200 text-center">
            <th class="p-1 border">Largo</th>
            <th class="p-1 border">Ancho</th>
            <th class="p-1 border">Alto</th>
            <th class="p-1 border">Ceja</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="p-1 border"><input class="w-full px-1 py-0.5 border rounded" v-model="largo" /></td>
            <td class="p-1 border"><input class="w-full px-1 py-0.5 border rounded" v-model="ancho" /></td>
            <td class="p-1 border"><input class="w-full px-1 py-0.5 border rounded" v-model="alto" /></td>
            <td class="p-1 border"><input class="w-full px-1 py-0.5 border rounded" v-model.number="ceja" /></td>
          </tr>
        </tbody>
      </table>
    </fieldset>

    <!-- Fieldset marcas -->
    <fieldset class="bg-gray-50 rounded p-2 border border-gray-300 shadow-sm">
  <legend class="px-1 text-sm font-semibold">Marcas</legend>

  <!-- Contenedor centrado -->
  <div class="flex justify-center items-center gap-2">
    <input
      class="w-50 px-1 py-1 border rounded text-center"
      :value="concatenado"
    />
    <span class="text-sm font-medium text-gray-700">mm</span>
  </div>
</fieldset>


    <!-- Fieldset área total -->
    <fieldset class="bg-gray-50 rounded p-2 border border-gray-300 shadow-sm mt-2">
  <legend class="px-1 text-sm font-semibold">Área total</legend>

  <div class="flex justify-center items-center gap-2 mt-1">
    <input
      class="w-1/2 px-1 py-1 border rounded text-center"
      :value="areaTotal"
    />
    <span class="text-sm font-medium text-gray-700">m²</span>
  </div>
</fieldset>

  </div>

</div>



    </div>



      <!-- Div para la tabla de material -->
      <div class="mt-8 max-w-full">
      <fieldset class="bg-gray-100 rounded-lg shadow-md w-full p-4 border border-gray-300">
    <legend class="fieldset-legend text-lg font-semibold">Detalles</legend>

   <!-- Contenedor flex que ocupa todo el fieldset -->
<div class="flex gap-2 w-full">

  <!-- Fecha -->
  <div class="flex-none min-w-[100px] p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Fecha</div>
    <input
      type="date"
      :value="fechaActual"
      readonly
      class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
    />
  </div>

  <!-- Empresa -->
  <div class="flex-none min-w-[120px] p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Empresa</div>
    <select
      v-model="selectedEmpresa"
      class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full bg-white text-black leading-tight"
    >
      <option value="">Seleccione una empresa</option>
      <option
        v-for="cliente in clientes"
        :key="cliente.num_cliente"
        :value="cliente.num_cliente"
      >
        {{ cliente.nombre_empresa }}
      </option>
    </select>
  </div>
  <div class="flex-none p-1 flex items-center">
 <button
    type="button"
    @click="irAgregarCliente"
    class="btn btn-active btn-success h-8 px-3"
  >
    +
  </button>
  </div>

  <!-- Materiales -->
  <div class="flex-none min-w-[120px] p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Materiales</div>
    <select
      v-model="selectedMaterial"
      class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full bg-white text-black leading-tight"
    >
      <option value="">Seleccione la clave</option>
      <option
        v-for="material in materiales"
        :key="material.clave"
        :value="material.clave"
      >
        {{ material.clave }}
      </option>
    </select>
  </div>

  <!-- Tipo -->
  <div class="flex-none min-w-[100px] p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Tipo</div>
    <input
      type="text"
      :value="tipo"
      readonly
      class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
    />
  </div>

  <!-- Material -->
  <div class="flex-none min-w-[120px] p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Material</div>
    <input
      type="text"
      :value="material"
      readonly
      class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
    />
  </div>

  <!-- Precio -->
  <div class="flex-none min-w-[100px] p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Precio</div>
    <input
      type="text"
      :value="precio"
      readonly
      class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
    />
  </div>

  <!-- Botón agregar -->
  <div class="flex-none p-1 flex items-center">
    <button type="button" @click="openModal" class="btn btn-active btn-success h-8 px-3">
      +
    </button>
  </div>

</div>


      </fieldset>
      </div>

      <!--Div cotizar-->
      <div class="mt-8 max-w-full">
      <fieldset class="bg-gray-100 rounded-lg shadow-md w-full p-4 border border-gray-300">
        <legend class="fieldset-legend text-lg font-semibold">Cotizar</legend>


          <div class="flex gap-2 w-full overflow-x-auto p-2  rounded">
    <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Cantidad</div>
    <input type="number" v-model="cantidad" min="0" class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>
  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Cartón</div>
    <input type="text" :value="totalCarton" class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

<div class="flex-none w-fit p-2 border border-gray-300 rounded">
  <div class="text-center text-xs font-semibold mb-1">Tintas</div>

  <div class="flex items-center justify-center gap-2">
    <input
      type="number"
      v-model="tintas"
      min="0"
      class="border rounded-md px-1 py-1 h-8 w-16 text-sm text-center flex-shrink-0"
      placeholder="Cant."
    />
    <input
      type="text"
      :value="precioTintas"
      class="border rounded-md px-1 py-1 h-8 w-20 text-sm text-center bg-gray-50 flex-shrink-0"
      placeholder="Precio"
      readonly
    />
  </div>
</div>


  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Maquina</div>
    <input type="text" :value="precioMaquina" readonly class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Pegado</div>
    <input type="text" v-model="pegado" class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Fijos</div>
    <input type="text" v-model="fijos" class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Utilidad</div>
    <input type="text" v-model="utilidad"  class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Otros</div>
    <input type="text" v-model="otros" class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Envio</div>
    <input type="text" v-model="envio"  class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Precio venta</div>
    <input type="text" :value="precioVenta" class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>

  <div class="flex-none w-35 p-1 border border-gray-300 rounded">
    <div class="text-center text-xs font-semibold mb-1">Precio final</div>
    <input type="text"  class="border rounded-md px-1 py-1 h-8 w-full text-sm text-center" />
  </div>
          </div>


      </fieldset>
      </div>



      <!-- Modal (se mantiene tal cual) -->
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50">
  <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
    <h3 class="text-lg font-semibold mb-4">Agregar material</h3>

    <form @submit.prevent="guardarMaterial" class="space-y-4">
      <div>
        <label for="clave" class="block mb-1 text-sm font-medium">Clave</label>
        <input id="clave" type="text" v-model="claveModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="tipo" class="block mb-1 text-sm font-medium">Tipo</label>
        <input id="tipo" type="text" v-model="tipoModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="material" class="block mb-1 text-sm font-medium">Material</label>
        <input id="material" type="text" v-model="materialModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="resistencia" class="block mb-1 text-sm font-medium">Resistencia</label>
        <input id="resistencia" type="text" v-model="resistenciaModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="flauta" class="block mb-1 text-sm font-medium">Flauta</label>
        <input id="flauta" type="text" v-model="flautaModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="tipo_material" class="block mb-1 text-sm font-medium">Tipo de material</label>
        <input id="tipo_material" type="text" v-model="tipo_materialModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="calibre" class="block mb-1 text-sm font-medium">Calibre</label>
        <input id="calibre" type="text" v-model="calibreModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="peso" class="block mb-1 text-sm font-medium">Peso</label>
        <input id="peso" type="text" v-model="pesoModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div>
        <label for="precio" class="block mb-1 text-sm font-medium">Precio</label>
        <input id="precio" type="text" v-model="precioModal" class="border border-gray-300 rounded-md px-2 h-7 w-full" />
      </div>

      <div class="flex justify-end gap-2">
        <button type="button" @click="closeModal" class="px-4 py-2 rounded border">Cancelar</button>
        <button type="submit" class="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800">Guardar</button>
      </div>
    </form>
  </div>
      </div>


    </div>
  </div>


</template>

<script setup>
import { ref, onMounted, computed} from 'vue'
import { useRouter } from 'vue-router'


import axios from 'axios'

const fechaActual = new Date().toISOString().substring(0, 10)

const router = useRouter()

const irAgregarCliente = () => {
  router.push('/AgregarCliente')
}

const largo = ref()
const ancho = ref ()
const alto = ref ()
const ceja = ref(3.5)

const tintas = ref()

const pegado = ref ()
const fijos = ref ()
const utilidad = ref ()
const otros = ref ()
const envio = ref ()
const cantidad = ref ()





const largoUno = computed(() => ((parseFloat(largo.value || 0) + 0.5)).toFixed(1))
const largoDos = computed(() => ((parseFloat(largo.value || 0) + 0.5)).toFixed(1))
const anchoUno = computed(() => ((parseFloat(ancho.value || 0) + 0.5)).toFixed(1))
const anchoDos = computed(() => ((parseFloat(ancho.value || 0) + 0.3)).toFixed(1))
const altoTotal = computed(() => ((parseFloat(alto.value || 0) + 0.5)).toFixed(1))
const marcaUno = computed(() => (((parseFloat(ancho.value || 0) / 2) + 0.3)).toFixed(1))
const marcaDos = computed(() => (((parseFloat(ancho.value || 0) / 2) + 0.3)).toFixed(1))
const sumaLargo = computed(() => {

  return (
    parseFloat(largoUno.value) +
    parseFloat(largoDos.value) +
    parseFloat(anchoUno.value) +
    parseFloat(anchoDos.value) +
    +ceja.value

  ).toFixed(1)
})

const sumaAlto = computed(() => {

  return (
    parseFloat(altoTotal.value) +
    parseFloat(marcaUno.value) +
    parseFloat(marcaDos.value)
  ).toFixed(1)
})

const areaTotal = computed(() => {
  return ((parseFloat(sumaLargo.value) * parseFloat(sumaAlto.value)) / 10000).toFixed(4)
})


const concatenado = computed(() => {
  return `${marcaUno.value * 10}**${altoTotal.value * 10}**${marcaDos.value *10}`
})

const totalCarton = computed(() => {
  const area = parseFloat(areaTotal.value || 0)
  const precioUnit = parseFloat(precio.value || 0)
  const cantidadNum = parseInt(cantidad.value || 0)


  const totalBase = area * precioUnit


  let porcentajeExtra = 0
  if (cantidadNum < 1000) {
  porcentajeExtra = 1.15
} else if (cantidadNum >= 1000 && cantidadNum < 3000) {
  porcentajeExtra = 1.10
} else if (cantidadNum >= 3000 && cantidadNum < 5000) {
  porcentajeExtra = 1.05
} else if (cantidadNum >= 5000 && cantidadNum < 10000) {
  porcentajeExtra = 1.03
} else if (cantidadNum >= 10000) {
  porcentajeExtra = 1.02
}

  const totalFinal = totalBase * porcentajeExtra

  return totalFinal.toFixed(2)
})

const precioTintas = computed(() => {
  const cantidadTintas = parseInt(tintas.value || 0)
  const cantidadNum = parseInt(cantidad.value || 0)
  let precio = 0

  if (cantidadNum < 1000) {
    precio = 2
  } else if (cantidadNum >= 1000 && cantidadNum < 3000) {
    precio = 1
  } else if (cantidadNum >= 3000 && cantidadNum < 5000) {
    precio = 0.8
  } else if (cantidadNum >= 5000 && cantidadNum < 10000) {
    precio = 0.6
  } else if (cantidadNum >= 10000){
    precio = 0.5
  }


  const total = cantidadTintas * precio

  return total.toFixed(2)
})

const precioMaquina = computed(() => {
  const cantidadNum = parseInt(cantidad.value || 0)    // cantidad total usada para rangos
  let precio = 0

    if (cantidadNum < 1000) {
    precio = 1.4
  } else if (cantidadNum >= 1000 && cantidadNum < 3000) {
    precio = .7
  } else if (cantidadNum >= 3000 && cantidadNum < 5000) {
    precio = 0.5
  } else if (cantidadNum >= 5000 && cantidadNum < 10000) {
    precio = 0.3
  } else if (cantidadNum >= 10000){
    precio = 0.2
  }

  const total = precio

  return total.toFixed(2)
})



const precioVenta = computed(() => {
  return (
    parseFloat(totalCarton.value || 0) +
    parseFloat(tintas.value || 0) +
    parseFloat(precioMaquina.value || 0) +
    parseFloat(pegado.value || 0) +
    parseFloat(fijos.value || 0) +
    parseFloat(utilidad.value || 0) +
    parseFloat(otros.value || 0) +
    parseFloat(envio.value || 0)
  ).toFixed(2)
})



const materiales = ref([])
const selectedMaterial = ref('')

const isModalOpen = ref(false)
const claveModal = ref('')
const tipoModal = ref('')
const materialModal = ref('')
const resistenciaModal = ref('')
const flautaModal = ref('')
const tipo_materialModal = ref('')
const calibreModal = ref('')
const pesoModal = ref('')
const precioModal = ref('')

const clientes = ref([])


const openModal = () => { isModalOpen.value = true }
const closeModal = () => {
  isModalOpen.value = false
  claveModal.value = ''
  tipoModal.value = ''
  materialModal.value = ''
  resistenciaModal.value = ''
  flautaModal.value = ''
  tipo_materialModal.value = ''
  calibreModal.value = ''
  pesoModal.value = ''
  precioModal.value = ''

}





const guardarMaterial = async () => {
  const nuevoMaterial = {
    clave: claveModal.value,
    tipo: tipoModal.value,
    material: materialModal.value,
    resistencia: resistenciaModal.value,
    flauta: flautaModal.value,
    tipo_material: tipo_materialModal.value,
    calibre: calibreModal.value,
    peso: pesoModal.value,
    precio: precioModal.value,
  }
  try {
    await axios.post('http://localhost:3000/api/materiales/insertar', nuevoMaterial)
    materiales.value.push(nuevoMaterial)

    closeModal()
    alert('Material guardado correctamente')
  } catch (error) {
    console.error('Error al guardar material:', error)
  }
}


const obtenerMateriales = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/materiales')
    materiales.value = res.data
    console.log('Materiales cargados:', materiales.value)
  } catch (error) {
    console.error('Error al obtener materiales:', error)
  }
}

const obtenerClientes = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/clientes')
    clientes.value = res.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
  }
}



const tipo = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.tipo : ''
})

const material = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.material : ''
})



const precio = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.precio : ''
})










onMounted(() => {
  obtenerMateriales()
  obtenerClientes()
})






</script>
