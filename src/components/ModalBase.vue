<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-40 z-50"
  >
    <div class="bg-white rounded-lg shadow-lg w-[90%] max-w-xl max-h-[90vh] flex flex-col">

      <!-- Título -->
      <h2 class="text-xl font-semibold p-4 border-b">{{ titulo }}</h2>

      <!-- Contenido dinámico con scroll -->
      <div class="p-4 flex-1 overflow-y-auto">
        <slot name="contenido" />
      </div>

      <!-- Botones fijos al pie -->
      <div class="flex justify-end gap-3 p-4 border-t">
        <button
          @click="$emit('cancelar')"
          class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          @click="$emit('confirmar')"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  titulo: {
    type: String,
    default: 'Modal'
  }
})

defineEmits(['cancelar', 'confirmar'])
</script>
