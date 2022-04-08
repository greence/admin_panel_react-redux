import { useHttp } from '../../hooks/hookhttp'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtersFetching, filtersFetched, addActiveFilter, removeActiveFilter } from '../../actions/actions'
import './Filters.scss'

const Filters = () => {
	const { request } = useHttp()
	const dispatch = useDispatch()
	const { filters } = useSelector(state => state)
		;
	const onChange = e => {
		if (e.target.checked) {
			dispatch(addActiveFilter(e.target.value))
		} else {
			dispatch(removeActiveFilter(e.target.value))
		}
	}

	useEffect(() => {
		dispatch(filtersFetching())
		request('http://localhost:3001/categories')
			.then(data => dispatch(filtersFetched(data)))
			.catch(e => console.log(e))

		// eslint-disable-next-line
	}, [])

	const filtersList = filters.sort().map(item =>
		<div key={item}>
			<label className="container">
				{item}
				<input type="checkbox" value={item} onChange={onChange} />
				<span className="checkmark"></span>
			</label>
		</div>
	)

	return (
		<>
			<form>
				<div className="form__header">
					<div className="form__title">Фильтры</div>
					<button>Показать</button>
				</div>
				<div className="form__filters">
					{filtersList}
				</div>
			</form>
		</>
	)
}

export default Filters