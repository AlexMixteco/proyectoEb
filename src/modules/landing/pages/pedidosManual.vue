<template>
  <div class="flex items-start justify-center min-h-screen bg-gray-100 p-4">
    <div class="w-full mt-8 mx-20 bg-white p-8 rounded-lg shadow-md">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold font-[Inter]">Pedidos</h2>
      </div>
      <!-- Formulario de pedido -->
      <form>
        <label for="underline_select" class="sr-only">Cliente</label>
        <select
                    v-model="selectedEmpresa"
                    class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-57 bg-white text-black leading-tight"
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
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Detalles cliente -->
          <fieldset
            class="bg-gray-100 rounded-lg shadow-md w-full md:flex-1 p-4 border border-gray-300"
          >
            <legend class="fieldset-legend text-lg font-semibold">Detalles cliente</legend>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="label">Impresión</label>
                <input type="text" class="input w-full" placeholder="Impresión" :value="clienteSeleccionado.impresion" />
              </div>
              <div>
                <label class="label">Razón social</label>
                <input type="text" class="input w-full" placeholder="Razón social" :value="clienteSeleccionado.razon_social" />
              </div>
              <div>
                <label class="label">RFC</label>
                <input type="text" class="input w-full" placeholder="RFC" :value="clienteSeleccionado.rfc" />
              </div>
              <div>
                <label class="label">Email</label>
                <input type="text" class="input w-full" placeholder="Email" :value="clienteSeleccionado.email" />
              </div>
              <div>
                <label class="label">Teléfono</label>
                <input type="text" class="input w-full" placeholder="Teléfono" :value="clienteSeleccionado.telefono" />
              </div>
              <div>
                <label class="label">Régimen fiscal</label>
                <input type="text" class="input w-full" placeholder="Régimen fiscal" :value="clienteSeleccionado.regimen" />
              </div>
              <div>
                <label class="label">Estado</label>
                <input type="text" class="input w-full" placeholder="Estado" :value="clienteSeleccionado.estado" />
              </div>
              <div>
                <label class="label">Colonia</label>
                <input type="text" class="input w-full" placeholder="Colonia" :value="clienteSeleccionado.colonia" />
              </div>
              <div>
                <label class="label">C.p.</label>
                <input type="text" class="input w-full" placeholder="C.p." :value="clienteSeleccionado.cp" />
              </div>
              <div>
                <label class="label">Calle</label>
                <input type="text" class="input w-full" placeholder="Calle" :value="clienteSeleccionado.calle" />
              </div>
              <div>
                <label class="label">Núm. exterior</label>
                <input type="text" class="input w-full" placeholder="Núm. exterior" :value="clienteSeleccionado.num_ext" />
              </div>
              <div>
                <label class="label">Núm. interior</label>
                <input type="text" class="input w-full" placeholder="Núm. interior" :value="clienteSeleccionado.num_int" />
              </div>
              <div>
                <label class="label"> CFDI</label>
                <input type="text" class="input w-full" placeholder="CFDI" :value="clienteSeleccionado.cfdi" />
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
              <div class="flex flex-nowrap gap-2 overflow-x-auto">
                <!-- Cantidad pequeño -->
                <div class="flex-1 min-w-[80px]">
                  <label class="label">Cantidad</label>
                  <input type="text" class="input w-full"/>
                </div>

      <!-- Producto amplio -->
                <div class="flex-1 min-w-[200px]">
                  <label class="label">Producto</label>
                  <select
                    v-model="selectedProducto"
                    class="input w-full"
  :disabled="cargandoProductos || !productos.length"
>
  <option disabled value="">Seleccione un producto</option>
  <option v-if="cargandoProductos" disabled>Cargando productos...</option>
  <option
                    v-for="p in productos"
                    :key="p.identificador"
                    :value="p.identificador"
                    >
                    {{ p.producto }}
                    </option>
                    </select>

                </div>


      <!-- Medidas amplio -->
      <div class="flex-1 min-w-[180px]">
        <label class="label">Medidas</label>
        <input type="text" class="input w-full" :value="medidasProducto" />
      </div>

      <!-- Tintas amplio -->
      <div class="flex-1 min-w-[200px]">
        <label class="label">Tintas</label>
        <input
          type="text"
          class="input w-full"
          :value="nombresTintas"
          readonly
        />
      </div>

      <!-- Tipo material amplio -->
      <div class="flex-1 min-w-[150px]">
        <label class="label">Tipo material</label>
        <input type="text" class="input w-full" :value="materialProducto.tipo" readonly />
      </div>

      <!-- Material mediano -->
      <div class="flex-1 min-w-[120px]">
        <label class="label">Material</label>
        <input type="text" class="input w-full" :value="materialProducto.material" readonly />
      </div>

      <!-- Flauta pequeño -->
      <div class="flex-1 min-w-[70px]">
        <label class="label">Flauta</label>
        <input type="text" class="input w-full" :value="materialProducto.flauta" readonly />
      </div>

      <!-- ETC pequeño -->
      <div class="flex-1 min-w-[70px]">
        <label class="label">ETC</label>
        <input type="text" class="input w-full" :value="materialProducto.resistencia" readonly />
      </div>

      <!-- Calibre pequeño -->
      <div class="flex-1 min-w-[70px]">
        <label class="label">Calibre</label>
        <input type="text" class="input w-full" :value="materialProducto.calibre" readonly />
      </div>

      <!-- Peso pequeño -->
      <div class="flex-1 min-w-[70px]">
        <label class="label">Peso</label>
        <input type="text" class="input w-full" :value="materialProducto.peso" readonly />
      </div>

      <!-- Precio Unitario mediano -->
      <div class="flex-1 min-w-[100px]">
        <label class="label">P/Unitario</label>
        <input type="text" class="input w-full"  />
      </div>

      <!-- Importe mediano -->
      <div class="flex-1 min-w-[100px]">
        <label class="label">Importe</label>
        <input type="text" class="input w-full"  />
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
  <div class="grid grid-cols-8 gap-4 items-center">
    <div>
      <label class="label">Anticipo por $</label>
      <input type="number" class="input border border-black w-full" v-model.number="anticipo" />
    </div>
    <div>
      <label class="label">Cheque no.</label>
      <input type="text" class="input border border-black w-full" />
    </div>
    <div>
      <label class="label">Banco</label>
      <input type="text" class="input border border-black w-full" />
    </div>
    <div>
      <label class="label">Entregar en:</label>
      <input type="text" class="input border border-black w-full" />
    </div>
    <div>
      <label class="label">Condiciones de pago</label>
      <input type="text" class="input border border-black w-full" />
    </div>
    <!-- Si quieres más celdas vacías para que no se vea tan pegado -->
    <div></div>
    <div></div>
    <div></div>
  </div>
              </fieldset>

            </div>


            <!-- Tabla de totales -->
          <div class="w-1/5 bg-gray-100 rounded-lg shadow-md p-4 border border-gray-300 ml-auto">
  <table class="table-auto w-full">
    <tbody>
      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">Sub-total:</td>
        <td class="py-2">
          <input
            v-model.number="subtotal"
            type="number"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
            placeholder="0.00"
          />
        </td>
      </tr>

      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">IVA (%):</td>
        <td class="py-2">
          <input
            :value="ivaPorcentaje"
            type="number"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50"
            readonly
          />
        </td>
      </tr>

      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">Total:</td>
        <td class="py-2">
          <input
            :value="total.toFixed(2)"
            type="number"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm bg-gray-50"
            readonly
          />
        </td>
      </tr>

      <tr class="border-b border-gray-300">
        <td class="py-2 pr-3 text-right font-medium">Anticipo:</td>
        <td class="py-2">
          <input
            v-model.number="anticipo"
            type="number"
            class="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
            placeholder="0.00"
          />
        </td>
      </tr>

      <tr>
        <td class="py-2 pr-3 text-right font-medium">Saldo:</td>
        <td class="py-2">
          <input
            :value="saldo.toFixed(2)"
            type="number"
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
import axios from 'axios'


const fechaActual = new Date().toISOString().split('T')[0]

const productos = ref([])
const clientes = ref([])
const selectedEmpresa = ref('')
const selectedProducto = ref('')
const cargandoProductos = ref(false)
const tintasProducto = ref([])
const cargandoTintas = ref(false)
const materialProducto = ref({})
const cargandoMaterial = ref(false)

const subtotal = ref(0)
const anticipo = ref(0)
const ivaPorcentaje = ref(16)

const obtenerClientes = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/clientes')
    clientes.value = res.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
  }
}

const clienteSeleccionado = computed(() =>
  clientes.value.find(c => c.num_cliente === selectedEmpresa.value) || {}
)



watch(selectedEmpresa, async (nuevoCliente) => {
  productos.value = []
  selectedProducto.value = ''

  if (!nuevoCliente) return

  cargandoProductos.value = true
  try {
    const res = await axios.get(
      `http://localhost:3000/api/productos/por-cliente/${nuevoCliente}`
    )
    productos.value = res.data
    console.log('Productos recibidos:', res.data)
  } catch (error) {
    console.error('Error al obtener productos del cliente:', error)
  } finally {
    cargandoProductos.value = false
  }
})

watch(selectedProducto, async (idProducto) => {
  tintasProducto.value = [] // limpiar tintas anteriores

  if (!idProducto) return

  cargandoTintas.value = true
  try {
    const res = await axios.get(`http://localhost:3000/api/productos/tintas/${idProducto}`)
    tintasProducto.value = res.data
    console.log('Tintas cargadas:', res.data)
  } catch (err) {
    console.error('Error al obtener tintas:', err)
  } finally {
    cargandoTintas.value = false
  }
})

watch(selectedProducto, async (idProducto) => {
  materialProducto.value = {}

  if (!idProducto) return

  const clave = productoSeleccionado.value.clave_material
  if (!clave) return

  cargandoMaterial.value = true
  try {
    const res = await axios.get(`http://localhost:3000/api/materiales/${clave}`)
    // Como tu endpoint devuelve un array, tomamos el primer elemento
    materialProducto.value = res.data[0] || {}
    console.log('Material cargado:', materialProducto.value)
  } catch (err) {
    console.error('Error al obtener material:', err)
  } finally {
    cargandoMaterial.value = false
  }
})



const productoSeleccionado = computed(() => {
  return productos.value.find(p => p.identificador === selectedProducto.value) || {}
})

const nombresTintas = computed(() => {
  return tintasProducto.value
    .map(t => `${t.gcmi} ${t.nombre_tinta}`)
    .join(', ')
})



const medidasProducto = computed(() => {
  const p = productoSeleccionado.value
  if (!selectedProducto.value || !p.identificador) return ''

  const largo = p.largo_int || 0
  const ancho = p.ancho_int || 0
  const alto = p.alto_int || 0

  return `${largo} * ${ancho} * ${alto}`
})



const ivaDecimal = computed(() => ivaPorcentaje.value / 100)


// watch(productos, () => {
//   subtotal.value = productos.value.reduce((acc, p) => {
//     const cantidad = Number(p.cantidad) || 0
//     const precio = Number(p.precio_final) || 0
//     return acc + cantidad * precio
//   }, 0)
// }, { deep: true })


const iva = computed(() => subtotal.value * ivaDecimal.value)
const total = computed(() => subtotal.value + iva.value)
const saldo = computed(() => total.value - anticipo.value)

obtenerClientes()
</script>
