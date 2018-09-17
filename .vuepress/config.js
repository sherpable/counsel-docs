module.exports = {
	dest: './docs',
	base: '/counsel/',
	title: 'Counsel',
	description: `Elegant testing framework for JS and Vue.js`,
	ga: 'UA-125943948-1',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'Github', link: 'https://github.com/timonschenzel/counsel' },
		],
		sidebar: {
			'/guide/': [
				['', 'Guide'],
				'the-command-line-test-runner',
				'writing-tests',
				'writing-io-tests',
				'writing-vue-component-tests',
				'assertions',
				'code-coverage',
				'reporting',
			],
		},
	}
}