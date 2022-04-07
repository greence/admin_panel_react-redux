export const productsFetching = () => {
	return {
		type: 'PRODUCTS_FETCHING'
	}
}

export const productsFetched = payload => {
	return {
		type: "PRODUCTS_FETCHED",
		payload
	}
}

export const fetchingError = payload => {
	return {
		type: 'FETCHING_ERROR',
		payload
	}
}

export const productDeleted = payload => {
	return {
		type: 'PRODUCT_DELETED',
		payload
	}
}

export const addProduct = payload => {
	return {
		type: 'ADD_PRODUCT',
		payload
	}
}
