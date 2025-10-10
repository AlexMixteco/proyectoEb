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
          id="underline_select"
          class="block py-2.5 px-3 w-xs text-sm text-gray-500 bg-gray-50 border border-gray-300 rounded-md appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
        >
          <option selected>Selecciona un cliente</option>
          <option
            value="cliente.num_cliente"
            v-for="cliente in clientes"
            :key="cliente.num_cliente"
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
                <input type="text" class="input w-full" placeholder="Impresión" />
              </div>
              <div>
                <label class="label">Razón social</label>
                <input type="text" class="input w-full" placeholder="Razón social" />
              </div>
              <div>
                <label class="label">RFC</label>
                <input type="text" class="input w-full" placeholder="RFC" />
              </div>
              <div>
                <label class="label">Email</label>
                <input type="text" class="input w-full" placeholder="Email" />
              </div>
              <div>
                <label class="label">Teléfono</label>
                <input type="text" class="input w-full" placeholder="Teléfono" />
              </div>
              <div>
                <label class="label">Régimen fiscal</label>
                <input type="text" class="input w-full" placeholder="Régimen fiscal" />
              </div>
              <div>
                <label class="label">Estado</label>
                <input type="text" class="input w-full" placeholder="Estado" />
              </div>
              <div>
                <label class="label">Colonia</label>
                <input type="text" class="input w-full" placeholder="Colonia" />
              </div>
              <div>
                <label class="label">C.p.</label>
                <input type="text" class="input w-full" placeholder="C.p." />
              </div>
              <div>
                <label class="label">Calle</label>
                <input type="text" class="input w-full" placeholder="Calle" />
              </div>
              <div>
                <label class="label">Núm. exterior</label>
                <input type="text" class="input w-full" placeholder="Núm. exterior" />
              </div>
              <div>
                <label class="label">Núm. interior</label>
                <input type="text" class="input w-full" placeholder="Núm. interior" />
              </div>
            </div>
          </fieldset>

          <!-- Número de pedido y fecha -->
          <div class="bg-gray-100 rounded-lg shadow-md w-full md:w-64 p-4 border border-gray-300">
            <label class="label">Número de pedido</label>
            <input type="text" class="input w-full" placeholder="Número de pedido" />

            <label class="label mt-4">Fecha</label>
            <input type="date" class="input w-full" :value="fechaActual" />
          </div>
        </div>

        <fieldset class="bg-gray-100 rounded-lg shadow-md w-full p-4 border border-gray-300">
          <legend class="fieldset-legend text-lg font-semibold">Detalles pedido</legend>

          <div class="flex flex-nowrap gap-2 overflow-x-auto">
            <div class="flex-1 min-w-[100px]">
              <label class="label">Cantidad</label>
              <input type="text" class="input w-full" placeholder="Cantidad" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Producto</label>
              <input type="text" class="input w-full" placeholder="Producto" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Medidas</label>
              <input type="text" class="input w-full" placeholder="Medidas" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Tintas</label>
              <input type="text" class="input w-full" placeholder="Tintas" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Material</label>
              <input type="text" class="input w-full" placeholder="Material" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Color</label>
              <input type="text" class="input w-full" placeholder="Color" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Flauta</label>
              <input type="text" class="input w-full" placeholder="Flauta" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">ETC</label>
              <input type="text" class="input w-full" placeholder="ETC" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Precio Unitario</label>
              <input type="text" class="input w-full" placeholder="Precio Unitario" />
            </div>
            <div class="flex-1 min-w-[100px]">
              <label class="label">Importe</label>
              <input type="text" class="input w-full" placeholder="Importe" />
            </div>
          </div>
        </fieldset>
        <!-- ============================================================================================================================== -->
        <fieldset class="bg-gray-100 rounded-lg shadow-md w-full p-4 border border-gray-300 mt-3">
          <legend class="fieldset-legend text-lg font-semibold"></legend>
          <div class="flex space-x-6 mt-4">
            <!-- Columna izquierda: Observaciones + Fieldset -->
            <div class="w-[1400px] flex flex-col">
              <!-- Observaciones -->
              <div>
                <label class="label block font-semibold mb-1">Observaciones</label>
                <textarea
                  class="border border-gray-300 rounded-md px-2 py-1 h-24 text-sm w-full bg-white leading-tight"
                  placeholder="Escribe tus observaciones aquí..."
                ></textarea>
              </div>

              <!-- Fieldset debajo con margen superior -->
              <fieldset class="border border-gray-300 rounded p-2 mb-4 mt-2 bg-white w-[1300px]">
                <div class="grid grid-cols-8 gap-4 justify-items-center items-center">
                  <div class="flex-1 min-w-[100px]">
                    <label class="label">Anticipo por $</label>
                    <input type="number" class="input border border-black w-full" />
                  </div>
                  <div class="flex-1 min-w-[100px]">
                    <label class="label">Cheque no.</label>
                    <input type="text" class="input border border-black w-full" />
                  </div>
                  <div class="flex-1 min-w-[100px]">
                    <label class="label">Banco</label>
                    <input type="text" class="input border border-black w-full" />
                  </div>
                  <div class="flex-1 min-w-[100px]">
                    <label class="label">Entregar en:</label>
                    <input type="text" class="input border border-black w-full" />
                  </div>
                  <div class="flex-1 w-[150px]">
                    <label class="label"> Condiciones de pago</label>
                    <input type="text" class="input border border-black w-full" />
                  </div>
                </div>
              </fieldset>
            </div>

            <!-- Tabla de totales -->
            <div class="w-[600px] bg-gray-100 rounded-lg shadow-md p-4 border border-gray-300">
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
                    <td class="py-2 pr-3 text-right font-medium">IVA:</td>
                    <td class="py-2">
                      <input
                        :value="iva.toFixed(2)"
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
import { ref, computed } from 'vue'
import axios from 'axios'

const clientes = ref([])

const fechaActual = new Date().toISOString().substring(0, 10)

const obtenerClientes = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/api/buscarTabla/clientes',
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

obtenerClientes()

const subtotal = ref(0)
const anticipo = ref(0)

// Cálculos reactivos
const iva = computed(() => subtotal.value * 0.16)
const total = computed(() => subtotal.value + iva.value)
const saldo = computed(() => total.value - anticipo.value)
</script>
