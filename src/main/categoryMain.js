export const categoryMain = (data, category) =>{
	return data.fetchMore({
		variables: {
			"category": {
				"title": category
			}
		},
	}).then((res) => {
		return res.data.category
	})
}