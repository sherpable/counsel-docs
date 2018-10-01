# Annotations

## @test

As an alternative to prefixing your test method names with `test`, you can use the `@test` annotation in a method's DocBlock to mark it as a test method.

```js
/** @test */
public function something()
{
    $this->assertTrue(true);
}
```