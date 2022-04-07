import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../actions/actions'
import { useHttp } from '../../hooks/hookhttp'
import { v4 as uuidv4 } from 'uuid'
import './AdminForm.scss'

const AdminForm = () => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [description, setDescription] = useState('')
	const [category, setCategory] = useState('')
	const dispatch = useDispatch()
	const { request } = useHttp()

	const onSubmit = e => {
		e.preventDefault()
		const product = {
			title,
			price,
			description,
			id: uuidv4(),
			category
		}
		request('http://localhost:3001/products', "POST", JSON.stringify(product))
			.then(dispatch(addProduct(product)))
			.catch(e => console.log(e))
		setTitle('')
		setPrice('')
		setDescription('')
		setCategory('')
	}


	return (
		<>
			<form onSubmit={onSubmit}>
				<fieldset className='form'>
					<legend>Добавить товар</legend>
					<label htmlFor="title"></label>
					<input
						required
						className='form__input'
						type="text"
						name="title"
						id="title"
						value={title}
						placeholder="Введите название товара"
						onChange={e => setTitle(e.target.value)}

					/>

					<label htmlFor="price"></label>
					<input
						required
						className='form__input'
						type="number"
						name="price"
						id="price"
						value={price}
						placeholder="Введите стоимость товара"
						onChange={e => setPrice(e.target.value)}
					/>

					<label htmlFor="description"></label>
					<textarea
						required
						className='form__textarea'
						type="textarea"
						name="description"
						id="description"
						value={description}
						placeholder="Введите описание товара"
						onChange={e => setDescription(e.target.value)}
					/>

					<label htmlFor="category"></label>
					<select
						required
						name="category"
						id="selected"
						value={category}
						onChange={e => setCategory(e.target.value)}
					>
						<option value="" disabled >Выберите категорию товара</option>
						<option value="brushes">Кисти для макияжа</option>
						<option value="eyes-shadows">Тени для глаз</option>
						<option value="lipsticks">Помады</option>
						<option value="blushes">Румяна</option>
					</select>

					<button className="form__submit-button" type="submit" name="Добавить">Добавить</button>
				</fieldset>
			</form>
		</>
	)
}

export default AdminForm