<template>
  <form @submit.prevent="guardarProducto">
    <div class="min-h-screen w-full p-4 bg-gray-100 flex justify-center items-start">
      <div class="w-full max-w-[1700px] bg-gray p-6 rounded shadow mt-8">
        <h2 class="font-bold mb-4 text-center text-lg">Editar producto</h2>

        <!-- Contenedor principal con flex -->
        <div class="flex items-start gap-4">
          <!-- Columna de inputs -->
          <div class="flex flex-col gap-2 w-full">
            <!-- Primera fila -->
            <div class="table w-full border-separate border-spacing-2">
              <div class="table-row">
                <!-- Empresa -->
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <select v-model="form.empresa" class="border-none rounded-md p-1 w-full text-sm">
                    <option value="">Seleccione una empresa</option>
                    <option value="Empresa A">Empresa A</option>
                    <option value="Empresa B">Empresa B</option>
                  </select>
                </div>

                <!-- Impresión -->
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <input
                    type="text"
                    v-model="form.producto"
                    placeholder="Impresión"
                    class="border-none rounded-md p-1 w-full text-sm"
                  />
                </div>

                <!-- Descripción -->
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <input
                    type="text"
                    v-model="form.descripcion"
                    placeholder="Descripción"
                    class="border-none rounded-md p-1 w-full text-sm"
                  />
                </div>

                <!-- Tipo de caja -->
                <div class="table-cell p-1 w-40 border border-gray-300 rounded">
                  <select v-model="form.tipo_carton" class="border-none rounded-md p-1 w-full">
                    <option value="">Tipo de caja</option>
                    <option value="Cartón Corrugado">Cartón Corrugado</option>
                    <option value="Cartón Simple">Cartón Simple</option>
                  </select>
                </div>

                <!-- Campos pequeños -->
                <div class="table-cell p-1 border w-20 border-gray-300 rounded">
                  <input
                    type="text"
                    v-model="form.guia"
                    placeholder="Guía"
                    class="border-none rounded-md p-1 w-full text-xs"
                  />
                </div>
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <input
                    type="number"
                    v-model.number="form.ancho_int"
                    placeholder="Ancho"
                    class="border-none rounded-md p-1 w-full text-xs"
                  />
                </div>
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <input
                    type="number"
                    v-model.number="form.largo_int"
                    placeholder="Largo"
                    class="border-none rounded-md p-1 w-full text-xs"
                  />
                </div>
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <input
                    type="number"
                    v-model.number="form.alto_int"
                    placeholder="Alto"
                    class="border-none rounded-md p-1 w-full text-xs"
                  />
                </div>
                <div class="table-cell p-1 border border-gray-300 rounded">
                  <input
                    type="number"
                    v-model.number="form.ceja"
                    placeholder="Ceja"
                    class="border-none rounded-md p-1 w-full text-xs"
                  />
                </div>
              </div>
            </div>

            <!-- Segunda fila -->
            <div class="table w-full border-separate border-spacing-2">
              <div class="table-row">
                <div class="table-cell p-1 w-10 border border-gray-300 rounded">
                  <select v-model="form.materiales_clave" class="border-none rounded-md p-1 w-full">
                    <option value="">Material</option>
                    <option value="M001">M001</option>
                    <option value="M002">M002</option>
                  </select>
                </div>
                <div class="table-cell p-1 w-10 border border-gray-300 rounded">
                  <select v-model="form.clave" class="border-none rounded-md p-1 w-full">
                    <option value="">Clave</option>
                    <option value="CL001">CL001</option>
                    <option value="CL002">CL002</option>
                  </select>
                </div>
                <div class="table-cell p-1 border w-40 border-gray-300 rounded">
                  <div class="flex justify-between gap-2">
                    <input
                      type="number"
                      v-model.number="form.ancho_carton"
                      placeholder="Ancho carton"
                      class="border-none rounded-md p-1 w-1/2 text-xs"
                    />
                    <input
                      type="number"
                      v-model.number="form.largo_carton"
                      placeholder="Largo"
                      class="border-none rounded-md p-1 w-1/2 text-xs"
                    />
                  </div>
                </div>
                <div class="table-cell p-1 w-10 border border-gray-300 rounded">
                  <input
                    v-model="form.suajes_num_suaje"
                    type="number"
                    placeholder="Suaje"
                    class="border-none rounded-md p-1 w-full text-xs"
                  />
                </div>
                <div class="table-cell p-1 border w-10 border-gray-300 rounded">
                  <input
                    type="text"
                    v-model="form.grabados_idgrabados"
                    placeholder="Grabado"
                    class="border-none rounded-md p-1 w-full text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Cajón Imagen 1 -->
          <div
            class="w-[200px] h-[200px] border border-gray-300 rounded flex justify-center items-center shadow-md relative"
          >
            <label
              class="flex items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
            >
              <span v-if="!imageData1" class="text-xs text-gray-500 text-center">Imagen 1</span>
              <img v-if="imageData1" :src="imageData1" class="w-full h-full object-contain" />
              <input type="file" accept="image/*" @change="onFileChange1" class="hidden" />
            </label>
            <button
              v-if="imageData1"
              @click.prevent="removeImage1"
              class="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
            >
              X
            </button>
          </div>
        </div>

        <!-- Cajón Imagen 2 (imagenFinal) -->
        <div class="flex justify-center mt-6">
          <div
            class="p-2 border border-b-black rounded flex justify-center items-center w-[620px] h-[420px] relative shadow-md"
          >
            <label
              class="flex items-center justify-center w-100 h-90 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
            >
              <span v-if="!imageData2" class="text-xs text-gray-500 text-center">Imagen Final</span>
              <img v-if="imageData2" :src="imageData2" class="w-full h-full object-contain" />
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

        <!-- Cajones Imagen 3 y 4 -->
        <div class="flex justify-between mt-6 w-full">
          <!-- Imagen 3 -->
          <div
            class="p-2 border border-gray-300 rounded flex justify-center items-center w-[620px] h-[420px] relative shadow-md"
          >
            <label
              class="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
            >
              <span v-if="!imageData3" class="text-xs text-gray-500 text-center">Imagen 3</span>
              <img v-if="imageData3" :src="imageData3" class="w-full h-full object-contain" />
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

          <!-- Imagen 4 -->
          <div
            class="p-2 border border-gray-300 rounded flex justify-center items-center w-[620px] h-[420px] relative shadow-md"
          >
            <label
              class="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-500 overflow-hidden"
            >
              <span v-if="!imageData4" class="text-xs text-gray-500 text-center">Imagen 4</span>
              <img v-if="imageData4" :src="imageData4" class="w-full h-full object-contain" />
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

        <!-- Botones de envío y cancelar -->
        <div class="mt-6 text-right flex justify-end gap-2">
          <button
            type="submit"
            class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>

          <button
            type="button"
            @click="router.push('/catalogo')"
            class="bg-gray-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const identificador = route.params.identificador

const form = ref({
  empresa: '',
  producto: '',
  descripcion: '',
  tipo_carton: '',
  guia: '',
  ancho_int: 0,
  largo_int: 0,
  alto_int: 0,
  ceja: 0,
  materiales_clave: '',
  clave: '',
  ancho_carton: 0,
  largo_carton: 0,
  suajes_num_suaje: 0,
  grabados_idgrabados: '',
})

const imageData1 = ref(null)
const imageData2 = ref(null) // imagenFinal
const imageData3 = ref(null)
const imageData4 = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(`https://apisprueba.onrender.com/api/productos/${identificador}`)
    Object.assign(form.value, data[0])
    // imagenFinal será la segunda imagen
    imageData2.value = data[0].imagenFinal || null
    imageData1.value = data[0].imagen1 || null
    imageData3.value = data[0].imagen3 || null
    imageData4.value = data[0].imagen4 || null
  } catch (err) {
    console.error('Error cargando producto:', err)
  }
})

// Funciones para las imágenes
function readFile(e, refVar) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => (refVar.value = reader.result)
  reader.readAsDataURL(file)
}
function onFileChange1(e) {
  readFile(e, imageData1)
}
function onFileChange2(e) {
  readFile(e, imageData2)
}
function onFileChange3(e) {
  readFile(e, imageData3)
}
function onFileChange4(e) {
  readFile(e, imageData4)
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

// Guardar cambios
async function guardarProducto() {
  try {
    const payload = {
      ...form.value,
      imagenFinal: imageData2.value, // <- corrección importante
      imagen1: imageData1.value,
      imagen3: imageData3.value,
      imagen4: imageData4.value,
    }

    await axios.put(`https://apisprueba.onrender.com/api/productos/${identificador}`, payload)
    alert('Producto actualizado correctamente')
    router.push('/catalogo')
  } catch (err) {
    console.error('Error al guardar producto:', err)
    alert('Error al guardar producto')
  }
}
</script>
