module.exports = {
	dest: './docs',
	base: '/counsel-docs/',
	title: 'Counsel',
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