function strongPasswordChecker(password) {
	let length = password.length;
  let lowercase = false;
  let uppercase = false;
  let digit = false;
  let simpleContiguousSets = 0;
	let complexContiguousSets = 0;
	let deletionScope = 0;
	let deletions = 0;

  let characterOperations = 3;
  let contiguousCharacters = "";

	if (length > 20) {
		deletions = length - 20;
	}

  for (let i = 0; i < length; i++) {
    let value = password[i];

		if (contiguousCharacters !== "" && value !== contiguousCharacters[0]) {

			if (contiguousCharacters.length >= 3) {
				deletionScope += contiguousCharacters.length % 3;
				const tempContiguousSets = ~~(contiguousCharacters.length / 3);

				if (tempContiguousSets > 1 || deletionScope > 0) {
					complexContiguousSets += tempContiguousSets;

				} else {
					simpleContiguousSets += 1;
				}
			}
			contiguousCharacters = "";
		}
		contiguousCharacters += value;

    if (characterOperations !== 0) {

      if (value >= "a") {

        if (lowercase) continue;
        lowercase = true;
        characterOperations -= 1;

      } else if (value >= "A") {

        if (uppercase) continue;
        uppercase = true;
        characterOperations -= 1;

      } else if (value >= "0") {

        if (digit) continue;
        digit = true;
        characterOperations -= 1;
      }
    }
  }
	let steps = 0;

  if (password.length < 6 && 6 - password.length >= characterOperations) {
    steps = 6 - password.length;
		if (simpleContiguousSets > steps) return simpleContiguousSets;
  } else if (password.length > 20) {
    let deletions = password.length - 20;
		if (simpleContiguousSets > deletions) {
			steps += simpleContiguousSets - deletions;
		}
		steps = Math.abs(steps - simpleContiguousSets);
		steps += characterOperations;
  } else {
		steps = characterOperations;
	}

  return steps;
}



console.log(strongPasswordChecker("1aA1aA1aA1aA1aA1aA1a")); 											// 0
console.log(strongPasswordChecker("1aA1aA1aA1aA1aA1aA1a1aA1aA1aA1aA1aA1aA1a")); 	// 20
console.log(strongPasswordChecker("1a")); 																				// 4
console.log(strongPasswordChecker("......1")); 																		// 2
console.log(strongPasswordChecker("...........")); 																// 3
console.log(strongPasswordChecker("....................1")); 											// 3
console.log(strongPasswordChecker("....................1a")); 										// 3
console.log(strongPasswordChecker("....................1aA")); 										// 3
console.log(strongPasswordChecker("....................1aAa")); 									// 4
console.log(strongPasswordChecker(".....................1"));											// 4
console.log(strongPasswordChecker("aa123")); 																			// 1
console.log(strongPasswordChecker("a")); 																					// 5
console.log(strongPasswordChecker("aA1")); 																				// 3
console.log(strongPasswordChecker("aaaaa"));																			// 2
console.log(strongPasswordChecker("aaaaaa")); 																		// 2
console.log(strongPasswordChecker("aaa111")); 																		// 2
console.log(strongPasswordChecker("aaA111")); 																		// 1
console.log(strongPasswordChecker("bbaaaaaaaaaaaaaaacccccc")); 										// 8
console.log(strongPasswordChecker("bbaaabbbcccdddeeecccttt")); 										// 7
console.log(strongPasswordChecker("bbaaa111cccDDDeeecccttt")); 						        // 7 = 3 + 4 
//                                                                                //(bb aaa 111 ccc DDD eee ccc ttt)
console.log(strongPasswordChecker("aaaaaaaaaaaaaaaaaaaaaaa")); 						        // 9 = 3 + 6 
//                                                                                // (aaa aaa aaa aaa aaa aaa aaa aa)
console.log(strongPasswordChecker(".......................")); 										// 9
console.log(strongPasswordChecker("aaaaabbbbbcccccdddddeeeee")); 									// 9
console.log(strongPasswordChecker("aaaaabbbbbcccccdddddeeeee")); 									// 9

//contiguous removal testing
// aa1aa1aa1aa1aa1aa1aa1 7 - 21 -> 23
// aa1aa1aa1aa1aa1aa1aa1aa1 8 - 24 -> 26
// AAABBBCCCdddeeefff111222
// aaaaa - 1
// aaaaaa - 2
// aaabb - 1
//
// bbbaaaaaaaaaccccdddeeefff
// try 1: very intentional deletions
// bbaa1aa1aac1ccddeeff -- 8 = 5 + 3
// try 2: less intentional deletions
// bbaa1aa1aa1c1cddeeff -- 9 = 5 + 4
// 
// aaaaaaabbbbbccccccceeeee

