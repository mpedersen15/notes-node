console.log('starting notes.js...');

var addNote = (title, body) => {
	console.log(`Adding note with title, ${title}", and body, "${body}"`);
}

var getAll = () => {
	console.log('Getting all notes...');
}

var getNote = (title) => {
	console.log(`Getting note with title, "${title}"...`);
}

var removeNote = (title) => {
	console.log(`Removing note with title "${title}"`);
}
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
