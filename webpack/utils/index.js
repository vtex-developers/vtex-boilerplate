const fs = require('fs')

const { 
  TEMPLATES, 
  PATHS
} = require('./variables')

TEMPLATES
  .map(dir => fs.readdirSync(`${PATHS.templates}/${dir}/`)
  .map(template => console.log(fs.readdirSync(`${PATHS.templates}`), template) ))

