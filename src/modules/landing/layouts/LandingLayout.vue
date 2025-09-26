<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center px-4 border-b border-gray-300 sm:px-6 lg:px-8 bg-black">
      <div>
        <a class="flex items-center gap-2 font-semibold text-white" href="#">
          <img
            alt="Vue logo"
            class="logo object-contain"
            src="@/assets/logoEB.png"
            width="150"
            height="100"
          />
        </a>
      </div>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <router-view />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} GRUPEB, S.A. DE C.V.. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
