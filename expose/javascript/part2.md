# Expose, Part 2

1. 3 is printed to the console. `i` is declared with `var` so it stays in scope when the loop exits. Hence, it equals `prices.length`, which is 3
2. 150 is printed to the console. `discountedPrice` is declared with `var` so it stays in scope when the loop exits. Hence, it equals the last value it took on in the loop, which is 150
3. 150 is printed to the console. `finalPrice` is declared with `var` at the *start of the function*, so it is in scope throughout the entire function. Hence, it equals the last value it took on in the loop, which is 150
4. For each loop iteration, the value stored in `finalPrice` is copied and appended to the end of the `discounted` list, which is in scope because it is declared as a `var` at the start of the function. Hence, after the loop exits, `discounted` is returned with all 3 values of `finalPrice`, which looks like `[50, 100, 150]`
5. An error. `i` is defined with `let` within the scope of the for loop, so it is out of scope in line 12
6. An error. `discountedPrice` is defined with `let` within the scope of the for loop, so it is out of scope in line 12
7. 150 is printed to the console. `finalPrice` is declared with `let` at the *start of the function*, so it is in scope throughout the entire function. Hence, it equals the last value it took on in the loop, which is 150
8. For each loop iteration, the value stored in `finalPrice` is copied and appended to the end of the `discounted` list, which is in scope because it is declared as a `let` at the *start of the function*. Hence, after the loop exits, `discounted` is returned with all 3 values of `finalPrice`, which looks like `[50, 100, 150]`
9. An error. `i` is defined with `let` within the scope of the for loop, so it is out of scope in line 12. It in fact seems like an error on line 8 should have occured, since the `const discounted` array is being altered, but that is legal because `discounted` is not being reassigned
10. The value 3 is logged in the console. The variable `length` stores the length of the `price` array, which is 3, and is still in scope on line 12 because it was defined with `const` at the start of the function and hasn't been reassigned
11. It still returns `[50, 100, 150]`. Despite the fact that some of the variables are `const`, none of them get reassigned, so nothing errors out. Hence, it stores and returns the discounted values of the 3 prices as before.
12. Listed below:

    A. `student.name`
    
    B. `student["Grad Year"]`

    C. `student.greeting`

    D. `student["Favorite Teacher"].name`

    E. `student.courseLoad[0]`

13. Listed below:

    A.`'32'`. This is because the integer 2 is converted to its string equivalent and then concatenated with the string `'3'`

    B. 1. This is because the string `'3'` is converted to its integer equivalent, from which the 2 is subtracted

    C. 3. This is because the integer conversion of `null` is 0, which is then added to the 3

    D. `'3null'`. This is because the string conversion of `null` is `'null'`, which is then appended to the string `'3'`

    E. 4. This is because the integer equivalent of `true` is 1, which is then added to 3

    F. 0. Both `false` and `null` have integer equivalents of 0, which are then added

    G. `'3undefined'`. This is because the string conversion of `undefined` is `'undefined'`, which is then appended to the string `'3'`

    H. `NaN`. This is because the number equivalent of `'3'` is 3 and that of `undefined` is `NaN`. Any operation on `NaN` outputs a `NaN`.

14. Listed below:

    A. `true`. This is because the number equivalent of `'2'` is 2, which is greater than 1

    B. `false`. This is because the character `'2'` is ordered after `'1'`, so `'12'` is actually lexicographically shorter

    C. `true`. This is because the number equivalent of `'2'` is 2, which is eqivalent to 2

    D. `false`. This is because `===` prevents type conversion, and `'2'` and 2 are of different types.

    E. `false`. This is because the number equivalent of `true` is 1, which is not equal to 2

    F. `true`. This is because `Boolean(2)` creates a `true` boolean, which has the same type as and is equivalent to `true`

15. `==` performs type conversion if necessary before comparison but `===` does not
16. [Located here](./part2-question16.js)
17. In the function `modifyArray()`, the for loop iterates through each element of `array`, passes it through `callback`, and then appends the result to `newArr`. In this case, `callback` is `doSomething`, which squares its input value. Hence, the returned array is a list of squared values from `array`, which looks like `[1, 4, 9]`
18. [Located here](./part2-question18.js)
19. The function prints to console in the following order: 1, 3, 4, 2