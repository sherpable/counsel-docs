module.exports = {
	dest: './docs',
	base: '/counsel/',
	title: 'Counsel',
	description: `Elegant testing framework for JS and Vue.js. Without callbacks.`,
	ga: 'UA-125943948-1',
	themeConfig: {
		repo: 'timonschenzel/counsel',
		docsRepo: 'timonschenzel/counsel-docs',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
	    serviceWorker: {
	      	updatePopup: true,
	    },
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
		],
		sidebarDepth: 3,
		sidebar: {
			'/guide/': [
				['', 'Introduction'],
				'getting-started',
				'writing-tests',
				'writing-io-tests',
				'writing-vue-component-tests',
				'the-command-line-test-runner',
				'fixtures',
				'incomplete-and-skipped-tests',
				'code-coverage',
				'reporting',
				'assertions',
				'annotations',
				'the-configuration-file',
			],
		},
	}
}
