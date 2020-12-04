<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    id="main-menu"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: menu -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="https://www.linkedin.com/in/kishan-nirghin-83b272149/"
                class="font-medium text-gray-500 hover:text-gray-900"
                >Kishan</a
              >

              <a
                href="https://www.linkedin.com/in/patrick-akil-721b07105/"
                class="font-medium text-gray-500 hover:text-gray-900"
                >Patrick</a
              >

              <a
                href="https://www.linkedin.com/in/jeroenooms/"
                class="font-medium text-gray-500 hover:text-gray-900"
                >Jeroen</a
              >
            </div>
          </nav>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >Product</a
                >

                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >Features</a
                >

                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >Marketplace</a
                >

                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                  >Company</a
                >
              </div>
              <div role="none">
                <a
                  href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  role="menuitem"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>

        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">Gridsome with</span>{{ " " }}
              <span class="block text-indigo-600 xl:inline">Webassembly</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Webassembly versus Javascript
            </p>

            <div
              class="mt-10 sm:mt-10 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="slidecontainer">
                <input type="range" class="slider" v-model="n" max="40" />
                <span class="slider-number">{{ n }}</span>
              </div>
            </div>

            <div
              class="mt-10 sm:mt-10 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  @click="fib"
                >
                  Generate Fibonacci
                </a>
              </div>
            </div>

            <div
              v-if="running"
              class="mt-10 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"
            ></div>

            <div class="mt-10 flex flex-row space-x-4">
              <div class="rounded-md w-1/3 shadow p-5">
                <h2 class="text-2xl text-indigo-600">Javascript</h2>
                <h3 class="mt-2">{{ performanceFib1 || "-" }} milliseconds</h3>
              </div>

              <div class="rounded-md w-1/3 shadow p-5">
                <h2 class="text-2xl text-indigo-600">WebAssembly</h2>
                <h3 class="mt-2">{{ performanceFib2 || "-" }} milliseconds</h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      n: 32,
      fib1: fibonacci,
      fib2: undefined, // lazy-loaded by created lifecycle

      running: false,
      performanceFib1: null,
      performanceFib2: null,
    };
  },
  mounted() {
    const imports = {
      env: {
        abort(msg, file, line, column) {
          console.error({ msg, file, line, column });
        },
      },
    };

    WebAssembly.instantiateStreaming(
      fetch("/build/optimized.wasm"),
      imports
    ).then((results) => {
      this.fib2 = results.instance.exports.fibonacci;
    });
  },
  methods: {
    fib() {
      this.running = true;

      const start = performance.now();
      this.fib1(this.n);
      this.performanceFib1 = (performance.now() - start).toFixed(4);

      const start2 = performance.now();
      this.fib2(this.n);
      this.performanceFib2 = (performance.now() - start2).toFixed(4);

      this.running = false;
    },
  },
};

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
</script>

<style>
.loader {
  border-top-color: #4f46e5;
  -webkit-animation: spinner 1s linear infinite;
  animation: spinner 1s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.slider {
  display: inline-block;
  margin-right: 20px;
  -webkit-appearance: none;
  appearance: none;
  width: 200px;
  height: 10px;
  border-radius: 5px;
  background: #e5e7eb;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #4f46e5;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4f46e5;
  cursor: pointer;
}
</style>
