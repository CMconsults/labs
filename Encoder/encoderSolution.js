//The Encoder function takes two arrays as its parameters, raw and code_words.
//This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(raw, code_words) {
    let newObj = new Object;
	let finalArray = [];
	for (let i = 0; i < raw.length; i++) {
		if (!newObj[raw[i]]) {
			newObj[raw[i]] = code_words[i];
		}

		if (newObj[raw[i]]) {
			finalArray.push(newObj[raw[i]]);
		}
	}

	return finalArray;
}

// console.log(encoderSolution(['a', 'a', 'a', 'a', 'a', 'a'], ['23', '12', '10']));

module.exports = encoderSolution;