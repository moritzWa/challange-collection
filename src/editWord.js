function shortestWordEditPath(source, target, words) {
  /**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
  */

  let current = source.split("");

  const replaceAt = (templ, index, replacement) => {
    let res =
      templ.substr(0, index) +
      replacement +
      templ.substr(index + replacement.length);
    return res;
  };

  //loop throught letters of current  //bit[i] => b i t
  for (let i = 0; i < current.length; i++) {
    //try changing first letter current[j] to target[j] => bit[1] to dog[1] = dit
    console.log(
      "(replaceAt(current, i, target[i])",
      words.indexOf(replaceAt(source, i, target[i])) > -1
    );
    console.log(
      "replaceAt(source, i, target[i])",
      replaceAt(source, i, target[i])
    );
  }
  //if(replaceAt(current, i, target[i]) )

  //check if changed version is found in words
  //if()
  //yes
  //found => countOutp = +1
  //update current

  //no
  //keep in loop for next j

  //no
  //keep in loop for next i

  //no
  //return countOutp = -1
}

shortestWordEditPath("bit", "dog", [
  "but",
  "put",
  "big",
  "pot",
  "pog",
  "dog",
  "lot"
]);
