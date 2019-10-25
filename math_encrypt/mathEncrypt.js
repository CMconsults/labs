
function solution(expression) {
	//code goes in here....
	let listed = {
		"*": 2,
		"/": 2,
		"+": 1,
		"-": 1,
	};
	expression = expression.split(' ').join("");
	expression
	let myEncryptArray = [];
	let final = '';
	for (let i = 0; i < expression.length; i++) {
		if ((expression[i].match(/^[A-Za-z]+$/)
			|| "0123456789".includes(expression[i]))) {
			final += expression[i];
		} else if (expression[i] == '(') {
			myEncryptArray.push(expression[i]);
		} else if (listed[expression[i]]) {
			while (myEncryptArray.length != 0
				&& listed[myEncryptArray[myEncryptArray.length - 1]] >= listed[expression[i]] && myEncryptArray[myEncryptArray.length - 1] != '(') {
				final += myEncryptArray[myEncryptArray.length - 1];
				myEncryptArray.pop();
			}
			myEncryptArray.push(expression[i]);
		} else if (expression[i] == ')') {
			while (myEncryptArray[myEncryptArray.length - 1] != '(') {
				final += myEncryptArray[myEncryptArray.length - 1];
				myEncryptArray.pop();
			}
			myEncryptArray.pop();
		}
	}
	while (myEncryptArray.length !== 0) {
		final += myEncryptArray[myEncryptArray.length - 1];
		myEncryptArray.pop();
	}
	return final;
}


module.exports = solution;
