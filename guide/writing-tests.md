# Writing tests

Let's take a look how we can write tests using Counsel. The example will show basic conventions and steps for writing tests with Counsel:

1. The tests for a class `Array` go into a class `ArrayTest`.

2. `ArrayTest` inherits from `TestCase`.

3. The tests are methods that started with the word `test`. Alternatively, you can use the `@test` annotation in a method’s docblock to mark it as a test method.

4. Inside the test methods, assertion methods such as `assertEquals()` (see [Assertions](assertions.html)) are used to assert that an actual value matches an expected value.

## The TestCase class
In every test file we have to make the TestCase class available. The easiest way to achieve this is to make use of helper method `counsel_use()`.
This helper method will accpect a name, Counsel will look if there is a dependency registerd with that given name.
When found it will assign the dependency to the global object with the given name.

For example, when running this code:

```js
counsel_use('TestCase');
```
The `TestCase` dependency from Counsel will be assigned to `global.TestCase`.

So now that we undestand how to make the `TestCase` class available let's take a look at a test class example.

## Example

Example 1.1 - Testing array operations with Counsel.

```js
counsel_use('TestCase');

class ArrayTest extends TestCase
{
    /** @test */
    it_is_possible_to_push_items_to_an_array()
    {
        let array = [];
        this.assertCount(0, array);

        array.push('Counsel', 'Unit testing');
        this.assertCount(2, array);
    }

    /** @test */
    it_is_possible_to_pop_an_item_from_an_array()
    {
        let array = ['Counsel', 'Unit testing'];
        this.assertCount(2, array);

        let lastItem = array.pop();
        this.assertEquals('Unit testing', lastItem);
        this.assertCount(1, array);
    }
}
```

## Customizing a test method result
The `TestClass` will contain 2 methods for customizing the result from a single test method.

## pass(message)
When calling this method within a test method, the test will be marked as passed.

## fail(message)
When calling this method within a test method, the test will be marked as a failure.