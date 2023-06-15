
function weightedStrings(string, queries) {
  const weights = {};  // menyimpan bobot substring/karakter

  // karakter dalam string beserta bobotnya
  for (let i = 0; i < string.length; i++) {
    const weight = i + 1;
    let j = i;
    while (j < string.length && string[j] === string[i]) {
      const substring = string.slice(i, j + 1);
      weights[substring] = weight * substring.length;
      j++;
    }
  }

//   const results = [];
  var result = "HASIL : " ;
  for (const query of queries) {
    if (Object.values(weights).includes(query)) {
        result = result + "YES ";
    } else {
        result = result + "NO ";
    }
  }

  return result;
}

//inputkan disini
const string = 'abbcccd';
const queries = [1, 3, 9, 8];
//jalankan fungsi
console.log(weightedStrings(string, queries));
