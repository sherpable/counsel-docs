---
home: true
heroImage: /logo.svg
actionText: Get Started →
actionLink: /guide/
features:
- title: It's like PHPUnit
  details: If you love using PHPUnit, this testing framework is made for you.
- title: It's different
  details: Counsel is different from frameworks like jasmine, mocha, ava or jest. Simple, no callbacks.
- title: Vue.js support
  details: It contains an elegant API for testing Vue.js components out of the box.
footer: MIT Licensed | Copyright © 2018
---

```js
class CountdownTest extends VueComponentTestCase
{
    beforeEach()
    {
        super.beforeEach();

        this.until = moment().add(10, 'seconds');

        this.component = this.render('<countdown :until="until"></countdown>', { until: this.until });
    }

    /** @test */
    it_is_able_to_render_the_countdown_component()
    {
        this.component.assertSee('0 Days');
        this.component.assertSee('0 Hours');
        this.component.assertSee('0 Minutes');
        this.component.assertSee('10 Seconds');
    }

    /** @test */
    it_will_update_the_seconds_proper_after_1_second_and_after_5_seconds()
    {
        this.component.fastForward('1s');

        this.component.assertSee('0 Days');
        this.component.assertSee('0 Hours');
        this.component.assertSee('0 Minutes');
        this.component.assertSee('9 Seconds');

        this.component.fastForward('4s');

        this.component.assertSee('5 Seconds');
    }
}
```