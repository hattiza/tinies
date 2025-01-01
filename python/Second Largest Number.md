#### Second Largest Number

Given 3 integers, return the second largest number.

**Example 1:**

```
Input: A = 7, B = 3, C = 9
Output: 7
```

**Example 2:**

```
Input: A = 12, B = 8, C = 3
Output: 8
```

**Note:**

Your algorithm should run in **O(1)** time and use **O(1)** extra space.

**Hints:**

Hint #1


There are three candidates to the solution: `A`, `B` and `C`. We should try out each of them until we find the correct one. How can we check if `A` is the solution? What should happen for `A` to be the second largest value?

Hint #2

`A` is the second largest value if `min(B, C) <= A` and `A <= max(B, C)`. We can write an `if` statement checking these conditions and if they hold, `return A`:

```py
if A >= min(B, C) and A <= max(B, C):
	return A
```

What if the conditions don't hold and `A` is not the solution? What should we do next?

Hint #3

We should test `B`. Similarly, `B` is the second largest value if `min(A, C) <= B` and `B <= max(A, C)`. We can write an `if` statement checking these conditions and if they hold, `return B`.

```py
if A >= min(B, C) and A <= max(B, C):
	return A
if B >= min(A, C) and B <= max(A, C):
	return B
```

What if not even `B` is the solution?

Hint #4

Then, it's clear that `C` is the solution, so we should `return C`. We don't even need to check the conditions anymore:

```py
if A >= min(B, C) and A <= max(B, C):
	return A
if B >= min(A, C) and B <= max(A, C):
	return B
return C
```

