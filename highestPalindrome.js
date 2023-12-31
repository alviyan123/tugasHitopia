
function highestPalindrome(string, k) {
  if (string === '') {
    return '';
  }

  if (string.length === 1) {
    if (k > 0) {
      return '9';
    } else {
      return string;
    }
  }

  if (string.length === 2) {
    if (string[0] !== string[1]) {
      if (k > 0) {
        return '99';
      } else {
        return Math.max(string[0], string[1]);
      }
    } else {
      return string;
    }
  }

  if (string[0] === string[string.length - 1]) {
    return string[0] + highestPalindrome(string.slice(1, string.length - 1), k);
  } else {
    if (k > 0) {
      const first = highestPalindrome(string.slice(0, string.length - 1), k - 1);
      const last = highestPalindrome(string.slice(1), k - 1);
      if (first === '-1' && last === '-1') {
        return '-1';
      } else if (first === '-1') {
        return string[string.length - 1] + last;
      } else if (last === '-1') {
        return first + string[0];
      } else {
        if (first > last) {
          return string[string.length - 1] + first;
        } else {
          return string[0] + last;
        }
      }
    } else {
      return '-1';
    }
  }
}

    const string = '3943';
    const k = 1;

    console.log(highestPalindrome(string, k));
