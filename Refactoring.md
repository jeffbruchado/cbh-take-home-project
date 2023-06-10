# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### The main changes were related to increasing code readability and reducing code nesting:

1. I moved all JavaScript source files into a separate `src` folder. This is a common practice to separate source code from other project files, making the project structure cleaner and more manageable. This will also facilitate the setup of a build process in the future.
2. I introduced an early return to handle the case where the input event is not provided. This prevents unnecessary code execution and makes it clearer that TRIVIAL_PARTITION_KEY is the default value.
3. The refactored function contains fewer lines of code, is more readable, and is more in line with JavaScript best practices. I moved the repeated code for creating a SHA-3-512 hash into a separate helper function called `createHash()`. This reduces duplication, keeps our primary function `deterministicPartitionKey()` concise, and makes the purpose of this operation clearer.
4. I reduced the use of if statements and took advantage of logical operators (`||` and `? :`) to make the code more readable. This way, the code is less nested and easier to follow.
5. I switched from using `require` and `module.exports` (which is a `CommonJS` syntax) to the `ES6` `import/export` syntax. This is a more modern approach and is currently the standard in the JavaScript ecosystem.
6. With the code now in the `src` folder, I had configured babel. This will allow transpilation of modern JavaScript features to ensure compatibility across different environments.

All of these changes improve the readability of the code by making the flow of data and the function's purpose clearer. They also align the code with modern JavaScript practices.