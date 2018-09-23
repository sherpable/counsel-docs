# Writing Vue component tests

One other nice feature about Counsel is "VueComponent" tests. This will give you an elegant API to write tests for [Vue.js](https://vuejs.org/). Under the hood Counsel will use [Vue Test Utils](https://vue-test-utils.vuejs.org/).

The way you write vue component tests is the same you write normal tests for Counsel. But rather than extending `TestCase` you will need to extend `VueComponentTestCase`.

## Example

For example imagine this Menu component.

```js
Vue.component('menu', {
    template: `
        <ul>
            <menu-item v-for="item in items" :key="item" v-text="item"></menu-item>
        </ul>
    `,

    props: ['items'],

    methods: {
        setItems(items)
        {
            this.items = items;
        }
    }
});
```

With Counsel we can write tests for this component in a way we also will use the component in our website.

```js
class MenuTest extends VueComponentTestCase
{
    beforeEach()
    {
        super.beforeEach();

        this.component = this.render('<menu :items="items"></menu>', {
            items: ['Foo', 'Bar', 'Baz']
        });
    }

    /** @test */
    it_is_able_render_the_items_in_the_menu_component()
    {
        this.assertEquals(
        	'<ul><li>Foo</li><li>Bar</li><li>Baz</li></ul>',
        	this.component.toHtml()
        );

        this.component.setItems(['Foo', 'Bar']);

        this.assertEquals(
        	'<ul><li>Foo</li><li>Bar</li></ul>',
        	this.component.toHtml()
        );
    }

    /** @test */
    the_last_menu_item_contains_the_text_baz()
    {
        this.assertEquals('Baz', this.component.find('li:last-child').text());
    }
}
```

## Vue Countdown component test example

```js
Vue.component('countdown', {
    template: `
        <div>
            <div v-if="! finished">
                <span>{{ remaining.days() }} Days, </span>
                <span>{{ remaining.hours() }} Hours, </span>
                <span>{{ remaining.minutes() }} Minutes, </span>
                <span>{{ remaining.seconds() }} Seconds </span>
                left...
            </div>

            <div v-else v-text="expiredText"></div>
        </div>
    `,

    props: {
        until: null,
        expiredText: { default: 'Now Expired' }
    },

    data()
    {
        return {
            now: new Date(),
            interval: null
        };
    },

    computed: {
        finished()
        {
            return this.remaining <= 0;
        },

        remaining()
        {
            let remaining = moment.duration(Date.parse(this.until) - this.now);
            if (remaining <= 0) {
                this.$emit('finished');
            }
            return remaining;
        }
    },

    created()
    {
        this.interval = setInterval(() => {
            this.now = new Date();
        }, 1000);

        this.$on('finished', () => clearInterval(this.interval));
    },

    destroyed()
    {
        clearInterval(this.interval);
    }
});
```

```js
class CountdownTest extends VueComponentTestCase
{
    beforeEach()
    {
        super.beforeEach();

        this.until = moment().add(10, 'seconds');

        this.component = this.render(
        	'<countdown :until="until"></countdown>',
        	{ until: this.until }
        );
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