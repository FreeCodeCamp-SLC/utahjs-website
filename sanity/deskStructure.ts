// import sanity typescript definitions
export const myStructure = (S: any) =>
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
							S.listItem().title(`Metadata`).child(S.document().schemaType(`metaData`).documentId(`metaData`)),
							S.listItem().title(`Header`).child(S.document().schemaType(`header`).documentId(`header`)),
							S.documentTypeListItem(`menu`).title(`Menus`),
							S.listItem().title(`Footer`).child(S.document().schemaType(`footer`).documentId(`footer`)),
						]),
				),
			S.divider(),
			// The next 3 list items are singleton documents, and each document has a schema type and a documentId
			S.listItem()
				.title(`Home Page`)
				.child(S.document().schemaType(`homePage`).documentId(`homePage`).title(`Home Page`)),
			S.listItem()
				.title(`Conference Page`)
				.child(S.document().schemaType(`conferencePage`).documentId(`conferencePage`).title(`Conference Page`)),
			S.listItem()
				.title(`Code of Conduct Page`)
				.child(
					S.document().schemaType(`codeOfConductPage`).documentId(`codeOfConductPage`).title(`Code of Conduct Page`),
				),
			S.divider(),
			// This list item is a document list, and it has a title and a schema type, this is for managing conferences by year.
			S.documentTypeListItem(`conference`).title(`Conferences`),
		]);
