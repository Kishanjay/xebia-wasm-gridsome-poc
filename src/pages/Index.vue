<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>

// import fetch from 'cross-fetch';

export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}

const imports = {
    env: {
        abort (msg, file, line, column) {
            console.error('Abort called at index.ts:')
            console.error({ msg, file, line, column })
        }
    }
}

WebAssembly.instantiateStreaming(fetch('/build/optimized.wasm'), imports)
.then(results => {
    console.log({x: results.instance.exports.add(1,55)});
});
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
