module.exports = function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze; 
	if (text.match(this.cloze) === null) {
		console.log("wrong answer");
	} else {
		this.partial = this.text.replace(this.cloze, "...");
	}
}

//