# Writing tests

Let's take a look how we can write tests using Counsel. The example will show basic conventions and steps for writing tests with Counsel:

1. The tests for a class `Array` go into a class `ArrayTest`.

2. `ArrayTest` inherits from `TestCase`.

3. The tests are public methods that are named `test\*`.
Alternatively, you can use the `@test` annotation in a method’s docblock to mark it as a test method.

4. Inside the test methods, assertion methods such as `assertEquals()` (see [Assertions](assertions.html)) are used to assert that an actual value matches an expected value.

Example - Testing array operations with Counsel.

```js
class ArrayTest extends TestCase
{
    /** @test */
    it_is_possible_to_push_and_pop_from_an_array()
    {
        let array = [];
        this.assertCount(0, array);

        array.push('Counsel', 'Unit testing');
        this.assertCount(2, array);

        let lastItem = array.pop();
        this.assertEquals('Unit testing', lastItem);
        this.assertCount(1, array);
    }
}
```