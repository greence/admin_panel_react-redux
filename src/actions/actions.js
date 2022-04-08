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

export const filtersFetching = () => {
	return {
		type: 'FILTERS_FETCHING'
	}
}

export const filtersFetched = payload => {
	return {
		type: 'FILTERS_FETCHED',
		payload
	}
}
export const addActiveFilter = payload => {
	return {
		type: 'ADD_ACTIVE_FILTER',
		payload
	}
}

export const removeActiveFilter = payload => {
	return {
		type: 'REMOVE_ACTIVE_FILTER',
		payload
	}
}
