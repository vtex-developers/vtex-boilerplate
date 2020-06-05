const path = require('path')
const fs = require('fs')

const STORE_NAME = 'regattatecidos'

const PATHS = {
	src: path.join(__dirname, '../../src'),
	dist: path.join(__dirname, '../../dist'),
	global: path.join(__dirname, '../../src/global'),
	pages: path.join(__dirname, '../../src/pages'),
	pagesDist: path.join(__dirname, '../../dist/pages'),
	templates: path.join(__dirname, '../../src/templates'),
	templatesDist: path.join(__dirname, '../../dist/templates'),
}

const PAGES = fs.readdirSync(`${PATHS.pages}/`)

const CUSTOM_TEMPLATES = fs.readdirSync(`${PATHS.templates}/Custom`)
const SUB_TEMPLATES = fs.readdirSync(`${PATHS.templates}/Sub/`)
const SHELVES_TEMPLATES = fs.readdirSync(`${PATHS.templates}/Shelves`)

module.exports = {
	PAGES,
	CUSTOM_TEMPLATES,
	SUB_TEMPLATES,
	SHELVES_TEMPLATES,
	PATHS,
	STORE_NAME
}