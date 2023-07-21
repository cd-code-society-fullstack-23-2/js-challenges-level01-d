# Problem01: atFirst

## Instructions:

You are given a string. Your task is to write a JavaScript function called "atFirst" that returns a string of length 2 made of the first 2 characters of the given string. If the string length is less than 2, use the character '@' to fill in the missing characters.

To solve this challenge, you need to extract the first 2 characters of the given string. If the string length is already 2 or more, simply return the first 2 characters. However, if the string length is less than 2, use the character '@' to fill in the missing characters and return the resulting string of length 2.

Write the code for the "atFirst" function below the instructions.

## Examples:

- If you call `atFirst("hello")`, it should return "he" because the first 2 characters of the string "hello" are 'h' and 'e'.

{Try It!}(node .guides/01/try-it-01.js)

- If you call `atFirst("hi")`, it should return "hi" because the string "hi" already has a length of 2.

{Try It!}(node .guides/01/try-it-02.js)

- If you call `atFirst("h")`, it should return "h@" because the string "h" has a length of 1, so '@' is used to fill in the missing character.

{Try It!}(node .guides/01/try-it-03.js)


Write your code for the `atFirst` function inside the function body. Use conditional statements to handle the cases where the string length is less than 2. If the string length is 2 or more, use the `.substring()` method to extract the first 2 characters. If the string length is 1, concatenate the first character with the '@' character to create the resulting string. Finally, return the resulting string.

Additional Test Cases:

```javascript
console.log(atFirst("Good")) // Expected output: "Go"
console.log(atFirst("a")) // Expected output: "a@"
console.log(atFirst("")) // Expected output: "@@"
console.log(atFirst("testing")) // Expected output: "te"
console.log(atFirst("12345")) // Expected output: "12"
```

# Problem 02: lastChars

## Instructions:

You are given two strings, `a` and `b`. Your task is to write a JavaScript function called "lastChars" that returns a new string made of the first character of `a` and the last character of `b`. If either of the strings is empty (has a length of 0), use the character '@' in its place.

To solve this challenge, you need to extract the first character of string `a` and the last character of string `b`. If either string is empty, you should use the character '@' to represent the missing character. Finally, you need to concatenate the two characters to create the resulting string.

Write the code for the "lastChars" function below the instructions.

## Examples:

- If you call `lastChars("last", "chars")`, it should return "ls" because the first character of string "last" is 'l' and the last character of string "chars" is 's'.

{Try It!}(node .guides/02/try-it-01.js)

- If you call `lastChars("yo", "java")`, it should return "ya" because the first character of string "yo" is 'y' and the last character of string "java" is 'a'.

{Try It!}(node .guides/02/try-it-02.js)

- If you call `lastChars("hi", "")`, it should return "h@" because the string `b` is empty, so '@' is used to represent the missing character.

{Try It!}(node .guides/02/try-it-03.js)

Write your code for the `lastChars` function inside the function body. Use conditional statements to handle the cases where either string is empty. If both strings are non-empty, use indexing or the `.charAt()` method to extract the first and last characters. If a string is empty, use the character '@' to represent the missing character. Finally, concatenate the first character of `a` and the last character of `b` to create the resulting string. Return the resulting string.

Additional Test Cases:
Test Case 1:

```javascript
console.log(lastChars("Hello", "World")) // Expected output: "Ho"
console.log(lastChars("", "Hello")) // Expected output: "@o"
console.log(lastChars("Good", "")) // Expected output: "G@"
console.log(lastChars("", "")) // Expected output: "@@"
console.log(lastChars("12345", "abcde")) // Expected output: "1e"
```

# Problem 03: conCat

## Instructions:

You are given two strings, `a` and `b`. Your task is to write a JavaScript function called "conCat" that appends the two strings together and returns the result. However, if the concatenation creates a double character (two consecutive characters that are the same), you should omit one of the characters.

To solve this challenge, you need to concatenate the strings `a` and `b`. However, before concatenating, you should check if the last character of `a` is the same as the first character of `b`. If they are the same, you should omit one of the characters to avoid a double character. Finally, you can concatenate the modified strings to create the resulting string.

Write the code for the "conCat" function below the instructions.


## Examples:

- If you call `conCat("abc", "cat")`, it should return "abcat" because there is no double character in the concatenation.

{Try It!}(node .guides/03/try-it-01.js)

- If you call `conCat("dog", "cat")`, it should return "dogcat" because there is no double character in the concatenation.

{Try It!}(node .guides/03/try-it-02.js)

- If you call `conCat("abc", "")`, it should return "abc" because there is no double character in the concatenation.

{Try It!}(node .guides/03/try-it-03.js)

Write your code for the `conCat` function inside the function body. Use conditional statements to check if the last character of `a` is the same as the first character of `b`. If they are the same, omit one of the characters from either `a` or `b`. Finally, concatenate the modified strings to create the resulting string. Return the resulting string.

Additional Test Cases:
Test Case 1:

```javascript
console.log(conCat("abc", "de")) // Expected output: "abcde"
console.log(conCat("hello", "o")) // Expected output: "hello"
console.log(conCat("world", "ld")) // Expected output: "world"
console.log(conCat("abc", "abc")) // Expected output: "abcabc"
console.log(conCat("", "xyz")) // Expected output: "xyz"
```

# Problem 04: lastTwo

## Instructions:

You are given a string of any length. Your task is to write a JavaScript function called "lastTwo" that swaps the last two characters of the string, if they are present. In other words, you need to create a new string where the last two characters are swapped with each other.

To solve this challenge, you should check if the string has at least two characters. If it does, you can extract the last two characters, swap them, and then concatenate them with the rest of the string. If the string has fewer than two characters, you should return the string as it is.

Write the code for the "lastTwo" function below the instructions.

## Examples:

- If you call `lastTwo("coding")`, it should return "codign" because the last two characters ("n" and "g") are swapped.

{Try It!}(node .guides/04/try-it-01.js)

- If you call `lastTwo("cat")`, it should return "cta" because the last two characters ("a" and "t") are swapped.

{Try It!}(node .guides/04/try-it-02.js)

- If you call `lastTwo("ab")`, it should return "ba" because the last two characters ("a" and "b") are swapped.

{Try It!}(node .guides/04/try-it-03.js)

Write your code for the `lastTwo` function inside the function body. Use conditional statements to check if the length of the string is at least two. If it is, extract the last two characters, swap them, and concatenate them with the rest of the string. If the length of the string is less than two, simply return the string as it is.

Additional Test Cases:
Test Case 1:

```javascript
console.log(lastTwo("Hello")) // Expected output: "Helol"
console.log(lastTwo("a")) // Expected output: "a"
console.log(lastTwo("xyz")) // Expected output: "xzy"
console.log(lastTwo("12345")) // Expected output: "12354"
console.log(lastTwo("")) // Expected output: ""
```

# Problem 05: seeColor

## Instructions:

You are given a string. Your task is to write a JavaScript function called "seeColor" that checks if the string begins with the word "red" or "blue". If it does, you should return that color string. Otherwise, you should return an empty string.

To solve this challenge, you need to check if the string starts with "red" or "blue". If it does, you can simply return the corresponding color string. Otherwise, return an empty string.

Write the code for the "seeColor" function below the instructions.

## Examples:

- If you call `seeColor("redxx")`, it should return "red" because the string begins with "red".

{Try It!}(node .guides/05/try-it-01.js)


- If you call `seeColor("xxred")`, it should return an empty string ("") because the string does not begin with "red" or "blue".

{Try It!}(node .guides/05/try-it-02.js)

- If you call `seeColor("blueTimes")`, it should return "blue" because the string begins with "blue".

{Try It!}(node .guides/05/try-it-03.js)


Write your code for the `seeColor` function inside the function body. Use conditional statements to check if the string starts with "red" or "blue". If it does, return the corresponding color string. Otherwise, return an empty string.

Additional Test Cases:
Test Case 1:

```javascript
console.log(seeColor("greenapple")) // Expected output: ""
console.log(seeColor("bluebird")) // Expected output: "blue"
console.log(seeColor("redvelvet")) // Expected output: "red"
console.log(seeColor("yellowbanana")) // Expected output: ""
console.log(seeColor("blueberries")) // Expected output: "blue"
```

# Problem 06: frontAgain

## Instructions:

You are given a string. Your task is to write a JavaScript function called "frontAgain" that checks if the first two characters of the string also appear at the end of the string. If they do, you should return true. Otherwise, you should return false.

To solve this challenge, you need to compare the first two characters of the string with the last two characters. If they are the same, you can return true. Otherwise, return false.

Write the code for the "frontAgain" function below the instructions.

## Examples:

- If you call `frontAgain("edited")`, it should return true because the first two characters "ed" also appear at the end of the string.

{Try It!}(node .guides/06/try-it-01.js)

- If you call `frontAgain("edit")`, it should return false because the first two characters "ed" do not appear at the end of the string.

{Try It!}(node .guides/06/try-it-02.js)

- If you call `frontAgain("ed")`, it should return true because the first two characters "ed" also appear at the end of the string.

{Try It!}(node .guides/06/try-it-03.js)


Write your code for the `frontAgain` function inside the function body. Use string slicing to extract the first two characters and the last two characters of the string. Then, compare the two extracted substrings. If they are the same, return true. Otherwise, return false.

Additional Test Cases:
Test Case 1:

```javascript
console.log(frontAgain("banana")) // Expected output: true
console.log(frontAgain("apple")) // Expected output: false
console.log(frontAgain("hello")) // Expected output: true
console.log(frontAgain("world")) // Expected output: false
console.log(frontAgain("programming")) // Expected output: false
```

# Problem 07: minCat

## Instructions:

You are given two strings. Your task is to write a JavaScript function called "minCat" that concatenates the strings together and returns the result. However, if the strings have different lengths, you should omit characters from the longer string so that it becomes the same length as the shorter string. The resulting concatenated string should have the same length as the shorter string.

To solve this challenge, you need to compare the lengths of the two strings. If they are the same, you can simply concatenate them together and return the result. If they have different lengths, you should truncate the longer string by removing characters from the end until it becomes the same length as the shorter string. Then, you can concatenate the modified strings and return the result.

Write the code for the "minCat" function below the instructions.

## Examples:

- If you call `minCat("Hello", "Hi")`, it should return "loHi" because the shorter string is "Hi", and you need to remove the first two characters from the longer string "Hello" to make it the same length as "Hi". Then, you can concatenate the modified strings to get "loHi".

{Try It!}(node .guides/07/try-it-01.js)

- If you call `minCat("Hello", "java")`, it should return "ellojava" because the shorter string is "java", and you need to remove the first two characters from the longer string "Hello" to make it the same length as "java". Then, you can concatenate the modified strings to get "ellojava".

{Try It!}(node .guides/07/try-it-02.js)

- If you call `minCat("java", "Hello")`, it should return "javaello" because the shorter string is "java", and you need to remove the first two characters from the longer string "Hello" to make it the same length as "java". Then, you can concatenate the modified strings to get "javaello".

{Try It!}(node .guides/07/try-it-03.js)

Write your code for the `minCat` function inside the function body. Use conditional statements to compare the lengths of the two strings. If they are the same, concatenate them and return the result. If they have different lengths, modify the longer string by removing characters from the end until it becomes the same length as the shorter string. Then, concatenate the modified strings and return the result.

Additional Test Cases:
Test Case 1:

```javascript
console.log(minCat("abc", "defgh")) // Expected output: "bcdef"
console.log(minCat("apple", "banana")) // Expected output: "plebanana"
console.log(minCat("cat", "dog")) // Expected output: "catdog"
console.log(minCat("Hello", "")) // Expected output: ""
console.log(minCat("", "Hi")) // Expected output: ""
```

# Problem 08: without2

## Instructions:

You are given a string. Your task is to write a JavaScript function called "without2" that checks if a length 2 substring appears at both the beginning and end of the string. If it does, return a new string without the substring at the beginning. If the substring doesn't appear at both ends, return the original string unchanged.

To solve this challenge, you need to compare the first two characters of the string with the last two characters. If they are the same, it means the length 2 substring appears at both ends. In that case, you should return a new string that excludes the substring at the beginning. If the first two characters are not the same as the last two characters, return the original string as it is.

Write the code for the "without2" function below the instructions.

## Examples:

- If you call `without2("HelloHe")`, it should return "lloHe" because the first two characters "He" match the last two characters "He". You need to return a new string without the substring "He" at the beginning.

{Try It!}(node .guides/08/try-it-01.js)

- If you call `without2("HelloHi")`, it should return "HelloHi" because the first two characters "He" do not match the last two characters "Hi". In this case, the substring does not appear at both ends, so you should return the original string unchanged.

{Try It!}(node .guides/08/try-it-02.js)

- If you call `without2("Hi")`, it should return "" because the string has only two characters, which are both "Hi". Since the substring appears at both ends, you should return an empty string.

{Try It!}(node .guides/08/try-it-03.js)

  
Write your code for the `without2` function inside the function body. Use conditional statements to compare the first two characters with the last two characters. If they are the same, return a new string that excludes the substring at the beginning. If they are different, return the original string.

Additional Test Cases:
Test Case 1:

```javascript
console.log(without2("HiHi")) // Expected output: ""
console.log(without2("HiHello")) // Expected output: "Hello"
console.log(without2("xyzxyz")) // Expected output: "xyzxyz"
console.log(without2("abc")) // Expected output: "abc"
console.log(without2("")) // Expected output: ""
```

# Problem 09: deFront

## Instructions:

You are given a string. Your task is to write a JavaScript function called "deFront" that returns a modified version of the string. The modified version should exclude the first two characters, except when the first character is 'a' and the second character is 'b'. In that case, you should keep both characters in the modified string. The string may have any length.

To solve this challenge, you need to examine the first two characters of the string. If the first character is 'a', you should include it in the modified string. If the second character is 'b', you should also include it. For the remaining characters, starting from the third character, you can simply copy them to the modified string.

Write the code for the "deFront" function below the instructions.

## Examples:

- If you call `deFront("Hello")`, it should return "llo" because the first character 'H' is not 'a' and the second character 'e' is not 'b'. Therefore, you should exclude both characters from the modified string.

{Try It!}(node .guides/09/try-it-01.js)

- If you call `deFront("java")`, it should return "va" because the first character 'j' is not 'a' and the second character 'a' is not 'b'. Therefore, you should exclude both characters from the modified string.

{Try It!}(node .guides/09/try-it-02.js)

- If you call `deFront("away")`, it should return "aay" because the first character 'a' is 'a' and the second character 'w' is not 'b'. Therefore, you should keep the first character 'a' and exclude the second character 'w' from the modified string.

{Try It!}(node .guides/09/try-it-03.js)


Write your code for the `deFront` function inside the function body. Use conditional statements to check the first two characters of the string and construct the modified string accordingly.

Additional Test Cases:
Test Case 1:

```javascript
console.log(deFront("apple")) // Expected output: "apple"
console.log(deFront("banana")) // Expected output: "anana"
console.log(deFront("abacus")) // Expected output: "abacus"
console.log(deFront("cat")) // Expected output: "t"
console.log(deFront("xyz")) // Expected output: "z"
```

# Problem 10: startWord

## Instructions:

You are given a string and a second "word" string. Your task is to write a JavaScript function called "startWord" that determines if the word matches the beginning of the string. The matching criteria are as follows:

- The word should appear at the front of the string.
- The first character of the word does not need to match exactly with the first character of the string.

If the word matches, you should return the front part of the string. If there is no match, you should return an empty string. The word will always have a length of at least 1.

To solve this challenge, you need to compare the substring of the string starting from the second character with the substring of the word starting from the second character. If the substrings match, you should return the front part of the string. Otherwise, you should return an empty string.

Write the code for the "startWord" function below the instructions.

## Examples:

- If you call `startWord("hippo", "hi")`, it should return "hi" because the substring "ip" in the string matches the substring "ip" in the word. Therefore, you should return the front part of the string, which is "hi".

{Try It!}(node .guides/10/try-it-01.js)

- If you call `startWord("hippo", "xip")`, it should return "hip" because the substring "ip" in the string matches the substring "ip" in the word. Therefore, you should return the front part of the string, which is "hip".

{Try It!}(node .guides/10/try-it-02.js)

- If you call `startWord("hippo", "i")`, it should return "h" because the substring "i" in the string matches the substring "i" in the word. Therefore, you should return the front part of the string, which is "h".

{Try It!}(node .guides/10/try-it-03.js)


Write your code for the `startWord` function inside the function body. Use string methods and conditional statements to compare the substrings and construct the return value.

Additional Test Cases:
Test Case 1:

```javascript
console.log(startWord("hello", "hell")) // Expected output: "hell"
console.log(startWord("hello", "xell")) // Expected output: ""
console.log(startWord("hello", "h")) // Expected output: "h"
console.log(startWord("hello", "helloo")) // Expected output: ""
console.log(startWord("hello", "hoo")) // Expected output: ""
```