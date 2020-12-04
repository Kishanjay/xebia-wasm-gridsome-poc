<template>
  <div>
    <h1>Sample comparison page</h1>

    <div class="slidecontainer">
      <input type="range" class="slider" v-model="n" max="40" /> {{ n }}
    </div>
    <button @click="fib">
      Run 1
    </button>

    {{ performanceFib1 }}
    {{ performanceFib2 }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 10,
      fib1: fibonacci,
      fib2: undefined, // lazy-loaded by created lifecycle

      running: false,
      performanceFib1: null,
      performanceFib2: null,
    };
  },
  created() {
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
      this.performanceFib1 = performance.now() - start;

      const start2 = performance.now();
      this.fib2(this.n);
      this.performanceFib2 = performance.now() - start2;

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
.slidecontainer {
  width: 200px;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
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
  background: #4caf50;
  cursor: pointer;
}
</style>
