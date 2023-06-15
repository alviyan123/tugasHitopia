
    function isBalancedBracket(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (openingBrackets.includes(char)) {
        stack.push(char);
        } else if (closingBrackets.includes(char)) {
        if (stack.length === 0) {
            return 'NO';
        }

        const top = stack.pop();
        if (matchingBrackets[char] !== top) {
            return 'NO';
        }
        }
    }

    if (stack.length !== 0) {
        return 'NO';
    }

    return 'YES';
    }

    // Contoh penggunaan:
    console.log(isBalancedBracket("{[()]}"));
    console.log(isBalancedBracket("{[(])}"));
    console.log(isBalancedBracket("{(([])[])[]}"));
