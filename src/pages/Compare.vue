<template>
  <div>
      <h1>Sample comparison page</h1>

      <div>
      <input type="range" v-model="n" max="10" /> {{ n }}
      </div>
      <button @click="fib">
          Run 1
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 10,
      fib1: fibonacci,
      fib2: undefined, // lazy-loaded by created lifecycle
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
      console.log({x: results.instance.exports.fibonacci(this.n)});
      console.log({y: this.jsfib(this.n)});
    });
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
