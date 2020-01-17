---
home: true
layout: HomepageLayout
pageClass: homepage
navbar: true
---

```js
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
