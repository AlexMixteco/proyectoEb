<template>
  <div class="flex items-start justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full mt-8 mx-20 bg-white p-8 rounded-lg shadow-md">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold font-[Inter]">Pedidos</h2>
      </div>
      <!-- Formulario de pedido -->
      <form>
        <label for="underline_select" class="sr-only">Cliente</label>
       <input type="text" class="input w-60" placeholder="Nombre del cliente" v-model="cliente.nombre_empresa" />
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Detalles cliente -->
          <fieldset
            class="bg-gray-100 rounded-lg shadow-md w-full md:flex-1 p-4 border border-gray-300"
          >
            <legend class="fieldset-legend text-lg font-semibold">Detalles cliente</legend>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="label">Impresión</label>
                <input type="text" class="input w-full" placeholder="Impresión" v-model="cliente.impresion" />
              </div>
              <div>
                <label class="label">Razón social</label>
                <input type="text" class="input w-full" placeholder="Razón social" v-model="cliente.razon_social" />
              </div>
              <div>
                <label class="label">RFC</label>
                <input type="text" class="input w-full" placeholder="RFC" v-model="cliente.rfc" />
              </div>
              <div>
                <label class="label">Email</label>
                <input type="text" class="input w-full" placeholder="Email" v-model="cliente.email" />
              </div>
              <div>
                <label class="label">Teléfono</label>
                <input type="text" class="input w-full" placeholder="Teléfono" v-model="cliente.telefono" />
              </div>
              <div>
                <label class="label">Régimen fiscal</label>
                <input type="text" class="input w-full" placeholder="Régimen fiscal" v-model="cliente.regimen" />
              </div>
              <div>
                <label class="label">Estado</label>
                <input type="text" class="input w-full" placeholder="Estado" v-model="cliente.estado" />
              </div>
              <div>
                <label class="label">Colonia</label>
                <input type="text" class="input w-full" placeholder="Colonia" v-model="cliente.colonia" />
              </div>
              <div>
                <label class="label">C.p.</label>
                <input type="text" class="input w-full" placeholder="C.p." v-model="cliente.cp" />
              </div>
              <div>
                <label class="label">Calle</label>
                <input type="text" class="input w-full" placeholder="Calle" v-model="cliente.calle" />
              </div>
              <div>
                <label class="label">Núm. exterior</label>
                <input type="text" class="input w-full" placeholder="Núm. exterior" v-model="cliente.num_ext" />
              </div>
              <div>
                <label class="label">Núm. interior</label>
                <input type="text" class="input w-full" placeholder="Núm. interior" v-model="cliente.num_int" />
              </div>
              <div>
                <label class="label"> CFDI</label>
                <input type="text" class="input w-full" placeholder="CFDI" v-model="cliente.cfdi" />
              </div>
            </div>
          </fieldset>

          <!-- Número de pedido y fecha -->
          <div class="bg-gray-100 rounded-lg shadow-md w-full md:w-64 p-4 border border-gray-300">
            <label class="label mt-4">Fecha</label>
            <input type="date" class="input w-full" :value="fechaActual" />
          </div>
        </div>

        <fieldset class="bg-gray-100 rounded-lg shadow-md w-full p-4 border border-gray-300">
  <legend class="fieldset-legend text-lg font-semibold">Detalles pedido</legend>

  <div class="flex flex-col gap-2">
    <div
      class="flex flex-nowrap gap-2 overflow-x-auto"
      v-for="(producto, index) in productos"
      :key="producto.id"
    >
      <!-- Cantidad pequeño -->
      <div class="flex-1 min-w-[80px]">
        <label class="label">Cantidad</label>
        <input type="text" class="input w-full" v-model="producto.cantidad" />
      </div>

      <!-- Producto amplio -->
      <div class="flex-1 min-w-[200px]">
        <label class="label">Producto</label>
        <input type="text" class="input w-full" :value="producto.producto" readonly />
      </div>

      <!-- Medidas amplio -->
      <div class="flex-1 min-w-[160px]">
        <label class="label">Medidas</label>
        <input type="text" class="input w-full" :value="producto.medidas" readonly />
      </div>

      <!-- Tintas amplio -->
      <div class="flex-1 min-w-[200px]">
        <label class="label">Tintas</label>
        <input
          type="text"
          class="input w-full"
          :value="producto.tintas.map(t => `${t.gcmi}-${t.nombre_tinta}`).join(', ')"
          readonly
        />
      </div>

      <!-- Tipo material amplio -->
      <div class="flex-1 min-w-[150px]">
        <label class="label">Tipo material</label>
        <input type="text" class="input w-full" :value="producto.material_tipo" readonly />
      </div>

      <!-- Material mediano -->
      <div class="flex-1 min-w-[110px]">
        <label class="label">Material</label>
        <input type="text" class="input w-full" :value="producto.material_nombre" readonly />
      </div>

      <!-- Flauta pequeño -->
      <div class="flex-1 min-w-[60px]">
        <label class="label">Flauta</label>
        <input type="text" class="input w-full" :value="producto.material_flauta" readonly />
      </div>

      <!-- ETC pequeño -->
      <div class="flex-1 min-w-[60px]">
        <label class="label">ETC</label>
        <input type="text" class="input w-full" :value="producto.resistencia" readonly />
      </div>

      <!-- Calibre pequeño -->
      <div class="flex-1 min-w-[60px]">
        <label class="label">Calibre</label>
        <input type="text" class="input w-full" :value="producto.calibre" readonly />
      </div>

      <!-- Peso pequeño -->
      <div class="flex-1 min-w-[60px]">
        <label class="label">Peso</label>
        <input type="text" class="input w-full" :value="producto.peso" readonly />
      </div>

      <!-- Precio Unitario mediano -->
      <div class="flex-1 min-w-[100px]">
        <label class="label">P/Unitario</label>
        <input type="text" class="input w-full" v-model="producto.precio_final" />
      </div>

      <!-- Importe mediano -->
      <div class="flex-1 min-w-[120px]">
        <label class="label">Importe</label>
        <input type="text" class="input w-full" :value="formatoMoneda(producto.cantidad * producto.precio_final)" readonly />
      </div>

      <div class="flex-none flex items-center justify-center p-1">
    <button
      type="button"
      class="flex items-center self-center text-white bg-red-700 hover:bg-red-800 font-medium rounded-md text-sm px-3 py-2"
      @click="eliminarProducto(index)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
    </svg>
    </button>
  </div>
    </div>
  </div>
</fieldset>


        <!-- ============================================================================================================================== -->
        <fieldset class="bg-gray-100 rounded-lg shadow-md w-full p-4 border border-gray-300 mt-3">
          <legend class="fieldset-legend text-lg font-semibold"></legend>
          <div class="flex space-x-6 mt-4">
            <!-- Columna izquierda: Observaciones + Fieldset -->
            <div class="w-2/3 flex flex-col">
              <!-- Observaciones -->
              <div>
                <label class="label block font-semibold mb-1">Observaciones</label>
                <textarea
                  class="border border-gray-300 rounded-md px-2 py-1 h-24 text-sm w-full bg-white leading-tight"
                  placeholder="Escribe tus observaciones aquí..."
                ></textarea>
              </div>

              <!-- Fieldset debajo con margen superior -->
              <fieldset class="border border-gray-300 rounded p-2 mb-4 mt-2 bg-white w-full">
              <div class="grid grid-cols-8 gap-4 items-start">
              <!-- Forma de pago -->
              <div class="col-span-2 flex flex-col">
                <label class="label mb-1">Forma de pago</label>
                <select
                  v-model="formaPago"
                  class="border border-black w-full rounded-md px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Anticipo">Anticipo</option>
                  <option value="Abono">Abono</option>
                  <option value="Liquidación">Liquidación</option>
                </select>
              </div>

              <!-- Anticipo / Abono / Liquidación -->
              <div class="col-span-2 flex flex-col">
                <div v-if="formaPago === 'Anticipo'" class="flex flex-col">
                  <label class="label mb-1">Anticipo por $</label>
                  <input
                    type="number"
                    class="input border border-black w-full"
                    v-model.number="anticipo"
                    @input="validarAnticipo"
                  />
                  <p v-if="mensajeError" class="text-red-600 text-xs mt-1">{{ mensajeError }}</p>
                </div>

                <div v-else-if="formaPago === 'Abono'" class="flex flex-col">
                  <label class="label mb-1">Abono por $</label>
                  <input type="number" class="input border border-black w-full" v-model.number="abono" />
                </div>

                <div v-else-if="formaPago === 'Liquidación'" class="flex flex-col">
                  <label class="label mb-1">Monto a liquidar $</label>
                  <input type="number" class="input border border-black w-full" :value="saldo" readonly />
                </div>
              </div>

              <!-- Método de pago -->
              <div class="col-span-2 flex flex-col">
                <label class="label mb-1">Método de pago</label>
                <input
                  list="metodos"
                  v-model="metodoPago"
                  class="border border-black w-full rounded-md px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Selecciona o escribe un método"
                />
                <datalist id="metodos">
                  <option value="Transferencia"></option>
                  <option value="Efectivo"></option>
                  <option value="Tarjeta"></option>
                  <option value="Cheque"></option>
                  <option value="Otro"></option>
                </datalist>
              </div>

  <!-- Entregar en -->
  <div class="col-span-2 flex flex-col">
    <label class="label mb-1">Entregar en:</label>
    <select
      v-model="entrega"
      class="border border-black w-full rounded-md px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Selecciona una opción</option>
      <option value="Local">Local</option>
      <option value="Paquetería">Paquetería</option>
      <option value="Cliente recoge">Cliente recoge</option>
    </select>
  </div>

  <!-- Condiciones de pago -->
  <div class="col-span-2 flex flex-col">
    <label class="label mb-1">Condiciones de pago</label>
    <select
      v-model="condicionPago"
      class="border border-black w-full rounded-md px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="Contado">Contado</option>
      <option value="Crédito">Crédito</option>
    </select>
  </div>
</div>


              </fieldset>

            </div>


            <!-- Tabla de totales -->
          <div class="w-1/5 bg-gray-100 rounded-lg shadow-md p-4 border border-gray-300 ml-auto">
  <table class="table-auto w-full">
    <tbody>
      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">Subtotal:</td>
        <td class="py-2">
          <input
            :value="formatoMoneda(subtotal)"
            type="text"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
            placeholder="0.00"
            readonly
          />
        </td>
      </tr>

      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">IVA:</td>
        <td class="py-2">
          <input
  :value="formatoMoneda(iva)"
  type="text"
  class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50"
  readonly
/>

        </td>
      </tr>

      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">Total:</td>
        <td class="py-2">
          <input
            :value="formatoMoneda(total)"
            type="text"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50"
            readonly
          />
        </td>
      </tr>

      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">Anticipo:</td>
        <td class="py-2">
         <input
          type="number"
          class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
          v-model.number="anticipo"

         />

        </td>
      </tr>

      <tr>
        <td class="py-2 pr-3 text-right font-medium">Saldo:</td>
        <td class="py-2">
          <input
            :value="formatoMoneda(saldo)"
            type="text"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50"
            readonly
          />
        </td>
      </tr>
    </tbody>
  </table>
          </div>

          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'



const route = useRoute()

const condicionPago = ref('Contado')
const formaPago = ref('Anticipo')
const cotizacion = ref(null)
const productos = ref([])
const cliente = ref({
  nombre_empresa: '',
  impresion: '',
  razon_social: '',
  rfc: '',
  email: '',
  telefono: '',
  regimen: '',
  estado: '',
  colonia: '',
  cp: '',
  calle: '',
  num_ext: '',
  num_int: '',
  cfdi: ''
})

const eliminarProducto = (index) => {
  productos.value.splice(index, 1)
  console.log("Producto eliminado en el índice:", index)
}


const cargarDatos = async () => {
  try {
    const idCotizacion = route.params.id
    if (!idCotizacion) {
      console.error("No se recibió id de cotización en la ruta")
      return
    }

    // Obtener la cotización
    const { data: cot } = await axios.get(
      `https://apisprueba.onrender.com/api/buscarTabla/cotizaciones/${idCotizacion}`
    )

    if (!cot) {
      console.warn("No se encontró la cotización con id:", idCotizacion)
      return
    }

    cotizacion.value = cot  // ¡ya es un objeto!
    console.log("Cotización cargada:", cotizacion.value)

    // Obtener los productos de la cotización
    const { data: det } = await axios.get(
  `https://apisprueba.onrender.com/api/detalleCotizaciones/${idCotizacion}`
    )
    productos.value = det
    console.log("Productos cargados:", productos.value)


    // Validar num_cliente
    const numCliente = String(cotizacion.value.num_cliente || "").trim()
    if (!numCliente) {
      console.error("num_cliente no definido en la cotización:", cotizacion.value)
      return
    }

    // Obtener el cliente asociado a la cotización
    const { data: cli } = await axios.get(`https://apisprueba.onrender.com/api/clientes/${numCliente}`)

    if (cli && cli.length > 0) {
      cliente.value = cli[0]
      console.log("Cliente cargado:", cliente.value)
    } else {
      console.warn("No se encontró el cliente con num_cliente:", numCliente)
    }
  } catch (error) {
    console.error("Error al cargar datos de cotización o cliente:", error)
  }



}


const fechaActual = new Date().toISOString().substring(0, 10)

const formatoMoneda = (valor) => {
  const numero = Number(valor)
  if (isNaN(numero)) return ''
  return numero.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  })
}


const cargarIva = async () => {
  try {
    const res = await axios.get('https://apisprueba.onrender.com/api/buscarTabla/iva');
    const data = res.data;

    ivaPorcentaje.value = parseFloat(data.find(d => d.id === 1)?.porcentaje || 0);
    console.log('IVA cargado:', ivaPorcentaje.value);

  } catch (error) {
    console.error('Error al obtener IVA:', error);
    return null;
  }
};




const subtotal = ref(0)
const anticipo = ref(0)
const abono = ref(0)


const ivaPorcentaje = ref(0);


const ivaDecimal = computed(() => Number(ivaPorcentaje.value) / 100);

const iva = computed(() => {
  return Number(subtotal.value) * ivaDecimal.value;
});





watch(productos, () => {
  subtotal.value = productos.value.reduce((acc, p) => {
    const cantidad = Number(p.cantidad) || 0
    const precio = Number(p.precio_final) || 0
    return acc + cantidad * precio
  }, 0)
}, { deep: true })





const total = computed(() => subtotal.value + iva.value)
const saldo = computed(() => {
  if (formaPago.value === 'Anticipo') {
    return total.value - anticipo.value
  } else if (formaPago.value === 'Abono') {
    return total.value - abono.value
  } else if (formaPago.value === 'Liquidación') {
    return 0
  }
  return total.value
})



const mensajeError = ref('')
const validarAnticipo = () => {
  const minimo = total.value * 0.4
  if (anticipo.value < minimo) {
    mensajeError.value = `El anticipo no puede ser menor al 40% del total (${minimo.toFixed(2)})`
  } else {
    mensajeError.value = ''
  }
}



cargarDatos()
cargarIva()
</script>
