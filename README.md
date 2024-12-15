# TypeScript Type System Misses Type Errors in Function Overloading

This example demonstrates a scenario where TypeScript's type system fails to detect type errors when function overloading is involved. The `add` function is defined to accept two numbers, but the call to `add(1, "2")` passes a number and a string.  A type error is expected but is not thrown during compilation, leading to a runtime error. 

## Bug:
The bug is in the way TypeScript handles function overloading with incompatible parameter types. The compiler doesn't catch the error where the function is called with a string argument instead of a number.

## Solution:
The solution involves refining the function signature to handle different parameter types separately, thus making the type checking more robust.