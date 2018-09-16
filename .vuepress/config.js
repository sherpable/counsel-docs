module.exports = {
	dest: './docs',
	base: '/counsel-docs/',
	title: 'Counsel',
	description: `Elegant testing framework for JS and Vue.js`,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'External', link: 'https://google.com' },
		],
		sidebar: {
			'/guide/': [
				['', 'Guide'],
				'page-a',
				'page-b',
			],
		},
	}
}