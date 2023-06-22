// import sanity typescript definitions
export const myStructure = (S) =>
	S.list()
		.title('Dashboard')
		.items([
			// Our singleton type has a list item with a custom child
			S.listItem()
				.title('Site Settings')
				.child(
					S.list()
						.title('Settings Documents')
						.items([
							S.listItem()
								.title('Metadata')
								.child(S.document().schemaType('metaData').documentId('metaData')),
							S.listItem()
								.title('Main Navigation')
								.child(S.document().schemaType('navigation').documentId('navigation')),
							S.listItem().title('Footer').child(S.document().schemaType('footer').documentId('footer')),
						]),
				),
			S.listItem().title('Home').child(S.document().schemaType('home').documentId('home')),
			S.listItem().title('Conference').child(S.document().schemaType('conference').documentId('conference')),
			S.listItem()
				.title('Code of Conduct')
				.child(S.document().schemaType('codeOfConduct').documentId('codeOfConduct')),
			...S.documentTypeListItems().filter(
				(listItem) =>
					!['metaData', 'navigation', 'footer', 'home', 'conference', 'codeOfConduct'].includes(
						listItem.getId(),
					),
			),
		]);
