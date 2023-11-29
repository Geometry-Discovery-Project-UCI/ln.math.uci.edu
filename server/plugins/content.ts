export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replace(/\\(\[|\])/g, '$$$$')
      file.body = file.body.replace(/\\\(((.|\n)*?)\\\)/g, `
      ::Equation
      $$$$
      $1
      $$$$
      ::
      `)
      file.body = file.body.replace(/\\\{((.|\n)*?)\\\}/g, `
      ::Equation
      $$$$
      \\begin{aligned}
      $1
      \\end{aligned}
      $$$$
      ::
      `)
    }
  })
})
