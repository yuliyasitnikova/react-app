import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {useDispatch} from 'react-redux';
import {setFavorite} from '../../store/api-actions';

function BookmarkButton({className, placeId, children, isActive}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFavorite(placeId, Number(!isActive)));
  };

  return (
    <button className={classNames(className, {[`${className}--active`]: isActive}, 'button')} type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

BookmarkButton.propTypes = {
  className: PropTypes.string.isRequired,
  placeId: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default BookmarkButton;
