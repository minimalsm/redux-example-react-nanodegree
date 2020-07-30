const wait = (ms) => {
  return new Promise((resolve) => {
    console.log('THIS', this)
    window.setTimeout(function() {
      resolve()
    }, ms)
  })

}

wait(10000).then(console.log('finished'))