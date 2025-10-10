<template>
  <form @submit.prevent="insertarProducto">

    <div class="min-h-screen w-full p-4 bg-gray-100 flex justify-center items-start">

      <div class="w-full max-w-[1700px] bg-white p-6 rounded shadow mt-8">
        <h2 class="font-bold mb-4 text-center text-lg">Agregar producto</h2>

        <!-- Contenedor principal con flex -->
        <div class="flex items-start justify-between gap-4">
          <!-- Columna de inputs -->
          <div class="flex flex-col gap-2 w-full">
            <!-- Primera fila -->
            <div class="table w-full border-separate border-spacing-2">
              <div class="table-row">
                <!-- Campo Empresa -->
                <div class="table-cell p-1 border border-gray-300 rounded">
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
                <div class="table-cell p-1 border border-gray-300 rounded">
                <div class="text-center text-xs font-semibold mb-1">Impresión</div>
                <!-- Impresión -->
                <input
                type="text"
                placeholder="Impresión"
                class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
                :value="impresion"
                readonly
                />
                </div>
                <!-- Descripción -->
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <div class="text-center text-xs font-semibold mb-1">Descripción</div>
                  <input
                    type="text"
                    placeholder="Descripción"
                    class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
                    v-model="form.descripcion"
                  />
                </div>

                <!-- Tipo de caja -->
                <div class="table-cell p-1 w-40 border border-gray-300 rounded">
                  <div class="text-center text-xs font-semibold mb-1">Tipo de caja</div>
                  <select
                    class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full bg-white leading-tight" v-model="form.tipo"
                  >
                    <option value="">Tipo de caja</option>
                    <option value="Ranurada">Ranurada</option>
                    <option value="Ranurada con suaje">Ranurada con suaje</option>
                    <option value="Ranurada con suaje y división">Ranurada con suaje y división</option>
                    <option value="Ranurada con suaje con división separador">Ranurada con suaje con división separador</option>
                    <option value="División separador">División separador</option>
                    <option value="Separador">Separador</option>
                    <option value="División">División</option>
                  </select>
                </div>

                <!-- Producto -->
                 <div class="table-cell p-1 border w-20 border-gray-300 rounded">
                  <div class="text-center text-xs font-semibold mb-1">Producto</div>
                  <input
                    type="text"
                    placeholder="Producto"
                    class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-full leading-tight"
                    v-model="form.producto"
                  />
                </div>




                <!-- Guía -->
                <div class="table-cell p-1 border w-20 border-gray-300 rounded">
                  <div class="text-center text-xs font-semibold mb-1">Guía</div>
                  <input
                    type="text"
                    placeholder="Guía"
                    class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-full leading-tight"
                    v-model="form.guia"
                  />
                </div>

               <div class="table-cell p-1 border border-gray-300 rounded w-2/6">
               <div class="text-center text-xs font-semibold mb-1">Medidas internas</div>
               <div class="flex justify-between gap-2">
               <input type="number" placeholder="Largo" class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/4 leading-tight" v-model="form.largoInt"/>
               <input type="number" placeholder="Ancho" class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/4 leading-tight" v-model="form.anchoInt"/>
               <input type="number" placeholder="Alto"  class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/4 leading-tight" v-model="form.altoInt"/>
               <input type="number" placeholder="Ceja"  class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/4 leading-tight" v-model="form.ceja"/>
               </div>
               </div>


              </div>
            </div>

            <!-- Segunda fila -->
<div class="table w-full table-fixed border-separate border-spacing-2">
  <!-- ================== Fila 1 ================== -->
  <div class="table-row">
    <!-- Materiales -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[12%]">
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
    <div class="table-cell p-1 border border-gray-300 rounded w-[11%]">
      <div class="text-center text-xs font-semibold mb-1">Tipo</div>
      <input
        type="text"
        :value="tipo"
        readonly
        placeholder="Tipo"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>


    <!-- Material -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[12%]">
      <div class="text-center text-xs font-semibold mb-1">Material</div>
      <input
        type="text"
        :value="material"
        readonly
        placeholder="Material"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>

    <!-- Resistencia -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[11%]">
      <div class="text-center text-xs font-semibold mb-1">Resistencia</div>
      <input
        type="text"
        :value="resistencia"
        readonly
        placeholder="Resistencia"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>

    <!-- Flauta -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[11%]">
      <div class="text-center text-xs font-semibold mb-1">Flauta</div>
      <input
        type="text"
        :value="flauta"
        readonly
        placeholder="Flauta"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>

    <!-- Tipo material -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[12%]">
      <div class="text-center text-xs font-semibold mb-1">Tipo material</div>
      <input
        type="text"
        :value="tipo_material"
        readonly
        placeholder="Tipo material"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>

    <!-- Calibre -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[11%]">
      <div class="text-center text-xs font-semibold mb-1">Calibre</div>
      <input
        type="text"
        :value="calibre"
        readonly
        placeholder="Calibre"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>

    <!-- Peso -->
    <div class="table-cell p-1 border border-gray-300 rounded w-[11%]">
      <div class="text-center text-xs font-semibold mb-1">Peso</div>
      <input
        type="text"
        :value="peso"
        readonly
        placeholder="Peso"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-sm w-full leading-tight"
      />
    </div>
  </div>

<!-- ================== Fila 2 ================== -->
<div class="table-row">
  <!-- Dimensiones Cartón -->
  <div class="table-cell p-1 border border-gray-300 rounded w-[25%]">
    <div class="text-center text-xs font-semibold mb-1">Dimensiones Cartón</div>
    <div class="flex justify-between gap-2">
      <input
        type="number"
        v-model="form.largoCarton"
        placeholder="largo"
        class="border border-gray-300 rounded-md px-2 h-7 text-xs w-1/2 leading-tight"
      />
      <input
        type="number"
        v-model="form.anchoCarton"
        placeholder="ancho"
        class="border border-gray-300 rounded-md px-2 h-7 text-xs w-1/2 leading-tight"
      />
    </div>
  </div>

  <!-- Marcas -->
  <div class="table-cell p-1 border border-gray-300 rounded w-[20%]">
    <div class="text-center text-xs font-semibold mb-1">Marcas</div>
    <input
      type="text"
      v-model="form.marcas"
      placeholder="Marcas"
      class="border border-gray-300 rounded-md px-2 h-7 text-sm w-full leading-tight"
    />
  </div>

  <!-- Pegado -->
  <div class="table-cell p-1 border border-gray-300 rounded w-[20%]">
    <div class="text-center text-xs font-semibold mb-1">Pegado</div>
    <input
      type="text"
      v-model="form.pegado"
      placeholder="Pegado"
      class="border border-gray-300 rounded-md px-2 h-7 text-sm w-full leading-tight"
    />
  </div>


<!-- Tintas -->
<div class="w-full mb-2">
  <div class="text-center text-xs font-semibold mb-1">Tintas</div>

  <div class="grid gap-2 w-full" style="grid-template-columns: repeat(4, minmax(180px, 1fr)) auto;">
    <select v-model="tinta1" class="border border-gray-300 rounded-md px-2 h-8 text-sm w-full">
      <option value="">Seleccionar tinta</option>
      <option v-for="t in tintas" :key="t.id_tinta" :value="t.id_tinta" :title="`${t.gcmi} - ${t.nombre_tinta}`">
        {{ t.gcmi }} - {{ t.nombre_tinta }}
      </option>
    </select>

    <select v-model="tinta2" class="border border-gray-300 rounded-md px-2 h-8 text-sm w-full">
      <option value="">Seleccionar tinta</option>
      <option v-for="t in tintas" :key="t.id_tinta" :value="t.id_tinta" :title="`${t.gcmi} - ${t.nombre_tinta}`">
        {{ t.gcmi }} - {{ t.nombre_tinta }}
      </option>
    </select>

    <select v-model="tinta3" class="border border-gray-300 rounded-md px-2 h-8 text-sm w-full">
      <option value="">Seleccionar tinta</option>
      <option v-for="t in tintas" :key="t.id_tinta" :value="t.id_tinta" :title="`${t.gcmi} - ${t.nombre_tinta}`">
        {{ t.gcmi }} - {{ t.nombre_tinta }}
      </option>
    </select>

    <select v-model="tinta4" class="border border-gray-300 rounded-md px-2 h-8 text-sm w-full">
      <option value="">Seleccionar tinta</option>
      <option v-for="t in tintas" :key="t.id_tinta" :value="t.id_tinta" :title="`${t.gcmi} - ${t.nombre_tinta}`">
        {{ t.gcmi }} - {{ t.nombre_tinta }}
      </option>
    </select>

    <button type="button" @click="openModal" class="btn btn-active btn-success h-8 px-3">
      +
    </button>
  </div>
</div>




    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <h3 class="text-lg font-semibold mb-4">Nueva tinta</h3>

        <form @submit.prevent="guardarTinta" class="space-y-4">
          <div>
            <label for="gcmi" class="block mb-1 text-sm font-medium">GCMI</label>
            <input
              id="gcmi"
              type="text"
              v-model="gcmi"
              placeholder="GCMI"
              class="border border-gray-300 rounded-md px-2 h-7 w-full"
              required
            />
          </div>

          <div>
            <label for="nombre_tinta" class="block mb-1 text-sm font-medium">Nombre de la tinta</label>
            <input
              id="nombre_tinta"
              type="text"
              v-model="nombreTinta"
              placeholder="Nombre de la tinta"
              class="border border-gray-300 rounded-md px-2 h-7 w-full"
              required
            />
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

<!--Aqui termina la segunda fila  -->
</div>

    <!-- Contenedor de los inputs -->
    <div class="flex flex-col gap-4 w-[350px]">
      <!-- Fecha -->
      <div class="table-cell p-1 border border-gray-300 rounded">
        <label for="fecha" class="block text-sm font-medium text-gray-700">Fecha</label>
        <input type="date" id="fecha" name="fecha" :value="fechaActual"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm">

      </div>

      <!-- Identificador -->
      <div class="table-cell p-1 border border-gray-300 rounded">
        <label for="identificador" class="block text-sm font-medium text-gray-700">Identificador</label>
        <input type="text" id="identificador" name="identificador" placeholder="Ingresa el ID" v-model="form.identificador"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm">
      </div>

      <!-- Clave -->
      <div class="table-cell p-1 border border-gray-300 rounded">
        <label for="clave" class="block text-sm font-medium text-gray-700">Clave</label>
        <input type="text" id="clave" name="clave" placeholder="Ingresa tu clave" v-model="form.clave"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm">
      </div>

      <!-- Imagen 1 -->
      <div class="w-[200px] h-[200px] border border-gray-300 rounded flex justify-center items-center shadow-md relative mx-auto">
        <label
          class="flex items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden">
          <span v-if="!imageData1" class="text-xs text-gray-500 text-center">Imagen final</span>
          <img v-if="imageData1" :src="imageData1.preview" class="w-full h-full object-contain" />
          <input type="file" accept="image/*" @change="onFileChange1" class="hidden" />
        </label>
        <button v-if="imageData1" @click.prevent="removeImage1"
          class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded">X</button>
      </div>
    </div>


        </div>

        <!-- Cajón Imagen 2 -->
        <div class="flex justify-center mt-6">
          <div
            class="p-2 border border-b-black rounded flex justify-center items-center w-[620px] h-[420px] relative shadow-md"
          >
            <label
              class="flex items-center justify-center w-100 h-90 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
            >
              <span v-if="!imageData2" class="text-xs text-gray-500 text-center">Imagen medidas</span>
              <img v-if="imageData2" :src="imageData2.preview" class="w-full h-full object-contain" accept="image/*" />
              <input type="file" accept="image/*" @change="onFileChange2" class="hidden" />
            </label>
            <button
              v-if="imageData2"
              @click.prevent="removeImage2"
              class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
            >
              X
            </button>
          </div>
        </div>

        <hr class="my-4 border-t border-gray-300" />

        <!-- Contenedor principal de la fila -->
        <div class="flex mt-6 w-full justify-between">

        <!-- Bloque izquierdo: Imagen 3 + Número de grabado -->
            <div class="flex flex-col gap-2 items-start">
    <!-- Número de grabado -->
    <div class="table-cell p-2 border border-gray-300 rounded w-[300px]">
      <div class="text-center text-xs font-semibold mb-1">Número de grabado</div>
      <input
        type="text"
        placeholder="Número de grabado"
        class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-full text-center"
        v-model="form.grabado"
      />
    </div>

    <!-- Imagen 3 -->
    <div
      class="p-2 border border-gray-300 rounded flex justify-center items-center w-[620px] h-[420px] relative shadow-md"
    >
      <label
        class="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
      >
        <span v-if="!imageData3" class="text-xs text-gray-500 text-center">Master gráfico</span>
        <img v-if="imageData3" :src="imageData3.preview" class="w-full h-full object-contain" />
        <input type="file" accept="image/*" @change="onFileChange3" class="hidden" />
      </label>
      <button
        v-if="imageData3"
        @click.prevent="removeImage3"
        class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
      >
        X
      </button>
    </div>
            </div>

        <!-- Bloque derecho: Imagen 4 + Número de Suaje + Medidas + Separadores -->
            <div class="flex flex-col gap-2 items-center">
    <!-- Campos arriba de la imagen 4 -->
    <div class="flex gap-4">
      <!-- Número de Suaje -->
      <div class="table-cell p-2 border border-gray-300 rounded w-[200px]">
        <div class="text-center text-xs font-semibold mb-1">Número de Suaje</div>
        <input
          type="text"
          placeholder="Número de Suaje"
          class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-full text-center"
          v-model="form.suajesNumsuaje"
        />
      </div>

      <!-- Medidas de suaje -->
      <div class="table-cell p-2 border border-gray-300 rounded w-[200px]">
        <div class="text-center text-xs font-semibold mb-1">Medidas Suaje</div>
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Ancho"
            class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/2 text-center"
            v-model="form.ancho_suaje"
          />
          <input
            type="text"
            placeholder="Largo"
            class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/2 text-center"
            v-model="form.largo_suaje"
          />
        </div>
      </div>

      <!-- Separadores -->
      <div class="table-cell p-2 border border-gray-300 rounded w-[200px]">
        <div class="text-center text-xs font-semibold mb-1">Separadores</div>
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Corto"
            class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/2 text-center"
            v-model="form.corto_sep"
          />
          <input
            type="text"
            placeholder="Largo"
            class="border border-gray-300 rounded-md px-2 py-1 h-8 text-xs w-1/2 text-center"
            v-model="form.largo_sep"
          />
        </div>
      </div>
    </div>

    <!-- Imagen 4 -->
    <div
      class="p-2 border border-gray-300 rounded flex justify-center items-center w-[620px] h-[420px] relative shadow-md"
    >
      <label
        class="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
      >
        <span v-if="!imageData4" class="text-xs text-gray-500 text-center">Imagen suaje</span>
        <img v-if="imageData4" :src="imageData4.preview" class="w-full h-full object-contain" />
        <input type="file" accept="image/*" @change="onFileChange4" class="hidden" />
      </label>
      <button
        v-if="imageData4"
        @click.prevent="removeImage4"
        class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
      >
        X
      </button>
    </div>
            </div>

        </div>

        <!-- Botón de envío -->
        <div class="mt-6 text-right">
            <button
          class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          type="submit"
        >
          Insertar
            </button>
        </div>
      </div>

    </div>

  </form>
</template>

<script setup>
import { ref, onMounted, computed, reactive} from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const fechaActual = new Date().toISOString().substring(0, 10)

const form = reactive({
  identificador: '',
  grabado: '',
  num_cliente: '',
  clave_material: '',
  suajesNumsuaje: '',
  clave: '',
  fecha: fechaActual,
  descripcion: '',
  tipo: '',
  producto: '',
  guia: '',
  anchoInt: '',
  largoInt: '',
  altoInt: '',
  ceja: '',
  anchoCarton: '',
  largoCarton: '',
  marcas: '',
  pegado: '',
  ancho_suaje: '',
  largo_suaje: '',
  corto_sep: '',
  largo_sep: '',
});



async function insertarProducto() {

  const formData = new FormData();

  // Campos de texto
  Object.keys(form).forEach(key => {
    formData.append(key, form[key] || '');
  });

  // Cliente y material seleccionados
  formData.set('num_cliente', selectedEmpresa.value || '');
  formData.set('clave_material', selectedMaterial.value || '');

  // Tintas
  const tintasArray = [tinta1.value, tinta2.value, tinta3.value, tinta4.value].filter(Boolean);
  formData.append('tintas', JSON.stringify(tintasArray));

  // Imágenes con nombres que reconoce el backend
  if (imageData1.value?.valueFile) formData.append('imagenFinal', imageData1.value.valueFile);
  if (imageData2.value?.valueFile) formData.append('imagenGrabado', imageData2.value.valueFile);
  if (imageData3.value?.valueFile) formData.append('imagen', imageData3.value.valueFile);
  if (imageData4.value?.valueFile) formData.append('imagenSuaje', imageData4.value.valueFile);

  try {
    const response = await axios.post(
      'http://localhost:3000/api/productos/insertar',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    if (response.data.message) {
      alert('Producto insertado correctamente');
      router.push('/catalogo');
    }
  } catch (error) {
    console.error('Error al insertar producto:', error);
    alert('Error al insertar producto');
  }
}

const imageData1 = ref(null)
const imageData2 = ref(null)
const imageData3 = ref(null)
const imageData4 = ref(null)

const isModalOpen = ref(false)
const gcmi = ref('')
const nombreTinta = ref('')

const clientes = ref([])
const materiales = ref([])
const tintas = ref([])
const tinta1 = ref('')
const tinta2 = ref('')
const tinta3 = ref('')
const tinta4 = ref('')
const selectedEmpresa = ref('')
const selectedMaterial = ref('')

const openModal = () => { isModalOpen.value = true }
const closeModal = () => {
  isModalOpen.value = false
  gcmi.value = ''
  nombreTinta.value = ''
}


const guardarTinta = async () => {
  try {
    const res = await axios.post('http://localhost:3000/api/tintas/insertar', {
      gcmi: gcmi.value,
      nombre_tinta: nombreTinta.value
    })


    tintas.value.push(res.data)


    closeModal()
    alert('Tinta guardada correctamente')
  } catch (err) {
    console.error(err)
    alert('Error al guardar la tinta')
  }
}

// Función para traer clientes
const obtenerClientes = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/clientes')
    clientes.value = res.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
  }
}


const obtenerTintas = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/tintas')
    tintas.value = res.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
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

const tipo = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.tipo : ''
})

const material = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.material : ''
})

const resistencia = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.resistencia : ''
})

const flauta = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.flauta : ''
})
const calibre = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.calibre : ''
})
const peso = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.peso : ''
})
const tipo_material = computed(() => {
  const material = materiales.value.find(c => c.clave === selectedMaterial.value)
  return material ? material.tipo_material : ''
})


const impresion = computed(() => {
  const cliente = clientes.value.find(c => c.num_cliente === selectedEmpresa.value)
  return cliente ? cliente.impresion : ''
})




onMounted(() => {
  obtenerClientes()
  obtenerTintas()
  obtenerMateriales()
})





function onFileChange1(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    imageData1.value = {
      preview: reader.result,
      valueFile: file
    }
  }
  reader.readAsDataURL(file)
}

function onFileChange2(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    imageData2.value = {
      preview: reader.result,
      valueFile: file
    }
  }
  reader.readAsDataURL(file)
}

function onFileChange3(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    imageData3.value = {
      preview: reader.result,
      valueFile: file
    }
  }
  reader.readAsDataURL(file)
}

function onFileChange4(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    imageData4.value = {
      preview: reader.result,
      valueFile: file
    }
  }
  reader.readAsDataURL(file)
}

function removeImage1() {
  imageData1.value = null
}
function removeImage2() {
  imageData2.value = null
}
function removeImage3() {
  imageData3.value = null
}
function removeImage4() {
  imageData4.value = null
}

</script>
