import PropTypes from "prop-types";

const PageBanner = (props) => {
	return (
		<section className="page-banner">
			<div className="banner-item">
				<img src={props.imgSrc} loading="lazy" alt={props.title} />
				<div className="banner-content">
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
			</div>
		</section>
	);
};

PageBanner.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default PageBanner;
