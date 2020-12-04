<template>
  <div>
      <h1>Sample comparison page</h1>

      <div>
      <input type="range" v-model="n" max="40" /> {{ n }}
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
    }
  },
  created() {
    const imports = {
      env: {
        abort (msg, file, line, column) {
          console.error({ msg, file, line, column })
        }
      }
    }

    WebAssembly.instantiateStreaming(fetch('/build/optimized.wasm'), imports)
    .then(results => {
      this.fib2 = results.instance.exports.fibonacci
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
    }
  }
}

function fibonacci(n) {
  if (n === 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }

  return fibonacci(n-1) + fibonacci(n-2);
}
</script>

<style>

</style>
