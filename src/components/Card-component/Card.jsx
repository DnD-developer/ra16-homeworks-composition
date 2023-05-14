import "./Card.css"

export default function Card({ children, data }) {
	const cardStyle = {
		width: "18rem"
	}
	const {
		title,
		text,
		linkElement: { link, linkText }
	} = data
	return (
		<>
			<div className="card" style={cardStyle}>
				{children}
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
					<a href={link} className="btn btn-primary">
						{linkText}
					</a>
				</div>
			</div>
		</>
	)
}
