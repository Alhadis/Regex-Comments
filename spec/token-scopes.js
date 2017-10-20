"use strict";

const fs     = require("fs");
const {join} = require("path");
const files  = fs.readdirSync(__dirname);

describe("Token scopes", () => {
	before("Activation", async () => {
		attachToDOM(atom.views.getView(atom.workspace));
		await Promise.all([
			atom.packages.activatePackage("language-coffee-script"),
			atom.packages.activatePackage("language-javascript"),
			atom.packages.activatePackage("one-dark-syntax"),
			atom.packages.activatePackage("regex-comments"),
		]);
	});
	
	for(const file of files){
		if(!/\.cson$/.test(file))
			continue;
		
		const path = join(__dirname, file);
		const name = file.replace(/\.cson$/, "");
		
		it(`tokenises ${name}`, async () => open(path).then(async editor => {
			editor.scan(/n+/g, match => {
				const pos = match.computedRange.start;
				const {scopes} = editor.tokenForBufferPosition(pos);
				expect(grep(/^comment\./, scopes)).to.be.null;
			});
			editor.scan(/y+/g, match => {
				const pos = match.computedRange.start;
				const {scopes} = editor.tokenForBufferPosition(pos);
				expect(grep(/^comment\./, scopes)).to.be.a("string");
			});
		}));
	}
});

async function open(file){
	const editor = await atom.workspace.open(file);
	await Promise.all([
		new Promise(done => editor.emitter.once("did-stop-changing", done())),
		new Promise(done => editor.emitter.once("did-tokenize", done())),
	]);
	await new Promise(done => setTimeout(() => done(), 250));
	return editor;
}

function grep(pattern, strings){
	for(const string of strings)
		if(pattern.test(string))
			return string;
	return null;
}
