import PropTypes from 'prop-types';

export default PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;
