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
    }
  },
  methods: {
    async fib () {
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
      });
    }
  }
}
</script>

<style>

</style>