import { useHttp } from '../../hooks/hookhttp'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem/ProductItem'
import { productsFetching, productsFetched, fetchingError, productDeleted } from '../../actions/actions'

const ProductList = () => {
	const { request } = useHttp()
	const dispatch = useDispatch()
	const { products, errorMessage, filteredFilters } = useSelector(state => state)

	useEffect(() => {
		dispatch(productsFetching())
		request('http://localhost:3001/products')
			.then(data => dispatch(productsFetched(data)))
			.catch(e => dispatch(fetchingError(e)))

		// eslint-disable-next-line
	}, [])

	const onDelete = useCallback(id => {
		request(`http://localhost:3001/products/${id}`, 'DELETE')
			.then(dispatch(productDeleted(id)))
			.catch(e => dispatch(fetchingError(e)))

		// eslint-disable-next-line
	}, [request])

	let filteredProducts = []
	products.forEach(product => {
		filteredFilters.forEach(filter => {
			if (product.category === filter) {
				filteredProducts.push(product)
				return filteredProducts
			}
		})
	})

	const productList = filteredProducts.map(({ id, ...props }) =>
		<ProductItem key={id} onDelete={() => onDelete(id)} {...props} />
	)

	return (
		<>
			<ul>
				{productList}
				{errorMessage}
			</ul>
		</>

	)
}

export default ProductList
