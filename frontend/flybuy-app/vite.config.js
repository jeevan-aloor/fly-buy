module.exports = {
    build: {
      outDir: 'build'
    },
    server: {
      port: 3000
    },
    esbuild: {
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment'
    }
  }