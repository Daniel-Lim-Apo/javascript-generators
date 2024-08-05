# javascript-generators
Tutorial Javascript Generators - Examples

JavaScript generators are a special class of functions that allow you to pause and resume code execution.
They are useful for creating iterators, handling asynchronous programming, and managing state in a way that makes code more readable and maintainable.

Basic Concept

A generator function is defined using the function* syntax. Inside a generator function, the yield keyword is used to pause the execution of the function and return a value.

The function can be resumed from where it was paused by calling the next() method on the generator object.
