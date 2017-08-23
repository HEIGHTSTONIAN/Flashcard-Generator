/*we're making a basic card that 
will take a front and an back
the Q will be on the front.
the A on the back. 
creating a card with various properties
*/

module.exports = function BasicCard(question, answer) {
	this.front = question;
	this.back = answer; 
	function _BasicCard(front, back){
		this.front = front;
		this.back = back;
	}
	return new _BasicCard(question, answer);
}
