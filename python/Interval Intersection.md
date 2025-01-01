#### Interval Intersection

Given two closed intervals `[A1, B1]` and `[A2, B2]`, check and return if the two intervals intersect each other.

A **closed interval** `[a, b]` (with `a <= b`) denotes the set of real numbers `x` with `a <= x <= b`.

Two **closed intervals** are said to intersect if they have common numbers, i.e. that appear in both intervals.

**Example 1:**

```
Input: A1 = 1, B1 = 6, A2 = 3, B2 = 8
Output: true
```

**Example 2:**

```
Input: A1 = 1, B1 = 4, A2 = 4, B2 = 6
Output: true
```

**Example 3:**

```
Input: A1 = 1, B1 = 8, A2 = 4, B2 = 6
Output: true
```

**Example 4:**

```
Input: A1 = 4, B1 = 6, A2 = 1, B2 = 3
Output: false
```

**Note:**

Your algorithm should run in **O(1)** time and use **O(1)** extra space.

### **Hints:**

#### Hint #1

Instead of thinking about when the intervals intersect each other, it's easier to think about when they do not intersect each other.

#### Hint #2


The intervals do not intersect each other when one of them is "to the left" of the other one i.e. `B1 < A2` or `B2 < A1`.

#### Hint #3


We can write an `if` statement checking if `B1 < A2` or `B2 < A1`. If so, we `return false`. Otherwise, we `return true`.

### Bonus


You can implement this using no `else` statements. You can even implement it in one line using only one `return`.

```python
class Solution:
    def intersect(self, A1: int, B1: int, A2: int, B2: int) -> bool:
        if B1 < A2 or B2 < A1:
            return False
        return True

# A1...B1
#   A2....B2  
  
#       A1.....B1
#   A2....B2  


#            A1.....B1
#   A2....B2  

#  A1.....B1
#            A2....B2  

```

