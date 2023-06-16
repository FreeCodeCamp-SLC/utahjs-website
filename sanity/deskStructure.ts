export const myStructure = (S) =>
	S.list()
		.title('Dashboard')
		.items([
			// Our singleton type has a list item with a custom child
			S.listItem()
				.title('Site Settings')
				.child(S.document().schemaType('siteSettings').documentId('siteSettings')),
			S.listItem().title('Home Page').child(S.document().schemaType('homePage').documentId('homePage')),
			S.listItem()
				.title('Code of Conduct')
				.child(S.document().schemaType('codeOfConduct').documentId('codeOfConduct')),
			// Regular document types
			S.documentTypeListItem('speaker').title('Speaker'),
			// ...S.documentTypeListItems().filter((listItem) => !['siteSettings'].includes(listItem.getId())),
		]);
