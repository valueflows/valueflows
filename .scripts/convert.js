const meow = require('meow')
const ParserN3 = require('@rdfjs/parser-n3')
const SerializerJsonld = require('@rdfjs/serializer-jsonld')
const Readable = require('stream').Readable
const fs = require('fs')
const RdfStore = require('quadstore').RdfStore
const memdown = require('memdown')
const finished = require('stream').finished
const promisify = require('util').promisify
const done = promisify(finished)

const cli = meow('', {
  flags: {
    source: {
      type: 'string'
    },
    outDir: {
      type: 'string'
    }
  }
})

const vfTurtle = fs.readFileSync(cli.flags.source, 'utf8')
const store = new RdfStore(memdown())

const parserN3 = new ParserN3()
const inputTurtle = new Readable({
  read: () => {
    inputTurtle.push(vfTurtle)
    inputTurtle.push(null)
  }
})
const outputTurtle = parserN3.import(inputTurtle)

const serializerJsonld = new SerializerJsonld()

;(async () => {
  await done(store.import(outputTurtle))
  console.log('vocab imported to store')

  const vf = store.match(null, null, null, null)

  const outputJsonld = serializerJsonld.import(vf)
  let vfJsonld
  await done(outputJsonld.on('data', jsonld => vfJsonld = jsonld))
  fs.writeFileSync(cli.flags.outDir + '/vf.jsonld', JSON.stringify(vfJsonld))
  fs.writeFileSync(cli.flags.outDir + '/vf.ttl', vfTurtle)
})()