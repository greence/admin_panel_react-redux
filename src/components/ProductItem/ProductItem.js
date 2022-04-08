import './ProductItem.scss'

const ProductItem = ({ title, description, category, price, onDelete }) => {

	return (
		<>
			<div className="card">
				<div className="card__top">
					<h2 className='card__title'>{title}</h2>
					<button className="card__delete-button" onClick={onDelete}>Удалить</button>
				</div>

				<div className="card__description">
					<p className="card__description__text">
						{description}
					</p>
				</div>

				<div className="card__bottom">
					<div className="card__category">Категория: {category}</div>
					<div className="card__price">Цена: {price} грн.</div>
				</div>
			</div>
		</>
	)
}

export default ProductItem