// import sanity typescript definitions
export const myStructure = (S) =>
	// This is the structure used by Sanity Studio to build the Desk, it's the very first pane to the left.
	S.list()
		.title(`Dashboard`)
		// Inside the left pane "Dashboard" we have a list of items
		.items([
			// Each item is a list item, and each list item has a title and a child
			// This first list item 'site settings' has a child which is a list of other schema types instead of a document.
			S.listItem()
				.title(`Site Settings`)
				.child(
					S.list()
						.title(`Site Settings`)
						.items([
							// I have two singleton documents, and one document list in this group.
							S.listItem()
								.title(`Metadata`)
								.child(S.document().schemaType(`metaData`).documentId(`metaData`)),
							S.documentTypeListItem(`navigation`).title(`Main Navigation`),
							S.listItem().title(`Footer`).child(S.document().schemaType(`footer`).documentId(`footer`)),
						]),
				),
			S.divider(),
			// The next 3 list items are singleton documents, and each document has a schema type and a documentId
			S.listItem().title(`Home`).child(S.document().schemaType(`home`).documentId(`home`)),
			S.listItem().title(`Conference`).child(S.document().schemaType(`conference`).documentId(`conference`)),
			S.listItem()
				.title(`Code of Conduct`)
				.child(S.document().schemaType(`codeOfConduct`).documentId(`codeOfConduct`)),
			S.divider(),
			// The next 3 list items are documents, and each document has a schema type. These ones will show a list of their ddocuments and allow you to create new ones.
			S.documentTypeListItem(`speaker`),
			S.documentTypeListItem(`pastSpeakers`),
			S.documentTypeListItem(`sponsors`),
		]);
