const output = (entry, output) => {
	return entry.name.includes('Global') 
		? `global/[name].${output}`
		: `pages/[name]/[name].${output}`
}
const outputHtml = file => {
	return file.replace('.pug', '')
}

module.exports ={
	output,
	outputHtml
}