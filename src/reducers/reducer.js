const initialState = {
	products: [],
	loading: false,
	error: false,
	errorMessage: null,
	filters: [],
	filteredFilters: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PRODUCTS_FETCHING':
			return {
				...state,
				loading: true
			}
		case 'PRODUCTS_FETCHED':
			return {
				...state,
				products: action.payload,
				loading: false
			}
		case 'FETCHING_ERROR':
			return {
				...state,
				loading: false,
				error: true,
				errorMessage: action.payload.message
			}
		case 'PRODUCT_DELETED':
			const newList = state.products.filter(item => item.id !== action.payload)
			return {
				...state,
				products: newList
			}
		case 'ADD_PRODUCT':
			return {
				...state,
				products: [...state.products, action.payload]
			}
		case 'FILTERS_FETCHING':
			return {
				...state,
				loading: true
			}
		case 'FILTERS_FETCHED': {
			return {
				...state,
				loading: false,
				filters: action.payload
			}
		}
		case 'ADD_ACTIVE_FILTER': {
			return {
				...state,
				filteredFilters: [...state.filteredFilters, action.payload]
			}
		}
		case 'REMOVE_ACTIVE_FILTER': {
			const newFilterList = state.filteredFilters.filter(item => item !== action.payload)
			return {
				...state,
				filteredFilters: newFilterList
			}
		}
		default:
			return state
	}

}

export default reducer