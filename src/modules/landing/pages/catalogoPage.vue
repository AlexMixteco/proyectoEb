<template>
  <div class="min-h-screen w-full p-4 bg-gray-100 flex justify-center items-start">
    <div class="w-full max-w-[1700px] bg-white p-6 rounded shadow mt-8">

      <!-- Título + Botón Agregar Producto -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold font-[Inter]">Catálogo</h2>
        <router-link to="/productos" class="btn btn-active btn-success">
          Agregar Producto
        </router-link>
      </div>

      <!-- Barra de búsqueda -->
      <div class="flex justify-center items-center mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar producto..."
          class="border rounded-md p-2 w-1/3 shadow-sm text-sm"
        />
      </div>

      <!-- Lista de productos -->
      <div v-if="loading" class="text-center text-gray-500">Cargando productos...</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="producto in productosFiltrados"
          :key="producto.producto"
          class="border rounded shadow-md p-4 flex flex-col gap-2 bg-gray-50"
        >
          <!-- Imagen -->
          <div class="flex justify-center">
            <img
              v-if="producto.imagen_final_base64"
              :src="`data:image/png;base64,${producto.imagen_final_base64}`"
              alt="Imagen producto"
              class="w-40 h-40 object-contain border rounded"
            />
            <div
              v-else
              class="w-40 h-40 border border-dashed flex items-center justify-center text-gray-400 text-xs"
            >
              Sin imagen
            </div>
          </div>

          <!-- Información -->
          <div class="flex flex-col text-sm">
            <span><strong>Empresa:</strong> {{ producto.nombre_empresa }}</span>
            <span><strong>Impresión:</strong> {{ producto.impresion }}</span>
            <span><strong>Producto:</strong> {{ producto.producto }}</span>
            <span><strong>Descripción:</strong> {{ producto.descripcion }}</span>
            <span><strong>Tipo:</strong> {{ producto.tipo }}</span>
            <span>
              <strong>Dimensiones:</strong> {{ producto.ancho_int }} x {{ producto.largo_int }} x
              {{ producto.alto_int }}
            </span>
            <span><strong>Material:</strong> {{ producto.material_tipo }}</span>
            <span><strong>Fecha:</strong> {{ producto.fecha }}</span>
          </div>

          <!-- Acciones -->
          <div class="flex justify-end gap-2 mt-2">
            <button
              class="bg-neutral-950 text-white px-3 py-1 rounded text-xs hover:bg-yellow-500"
              @click="editarProducto(producto.identificador)"
            >
              Editar
            </button>
            <button
              class="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
              @click="eliminarProducto(producto.identificador)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const searchQuery = ref('')
const productos = ref([])
const loading = ref(true)

// 🔹 Traer todos los productos desde la API
onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/producto/catalogo')
    productos.value = data
    console.log('Productos cargados:', productos.value)
  } catch (error) {
    console.error('Error al cargar productos:', error)
  } finally {
    loading.value = false
  }
})

// 🔹 Filtrado en tiempo real
const productosFiltrados = computed(() =>
  productos.value.filter(
    (p) =>
      p.producto?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.descripcion?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.nombre_empresa?.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// 🔹 Editar producto
const editarProducto = (id) => {
  if (!id) {
    console.warn('Identificador inválido')
    return
  }
  console.log('Navegando a editar producto con id:', id)
  router.push({ name: 'EditarProducto', params: { id } })
}


const eliminarProducto = async (identificador) => {
  if (!identificador) {
    console.warn('Identificador inválido para eliminar')
    return
  }
  try {
    await axios.delete(`http://localhost:3000/api/productos/${identificador}`)
    productos.value = productos.value.filter((p) => p.identificador !== identificador)
    console.log('Producto eliminado:', identificador)
  } catch (error) {
    console.error('Error al eliminar producto:', error)
  }
}
</script>
