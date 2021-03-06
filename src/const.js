export const REQUEST_TIMEOUT = 5000;

export const API_URL = 'https://7.react.pages.academy/six-cities';

export const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  PLACES: '/hotels',
  NEARBY: '/nearby',
  REVIEWS: '/comments',
  FAVORITES: '/favorite',
};

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  NOT_FOUND: '/404',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const defaultCity = CITIES[0];

export const MAP_ICON_DEFAULT = {
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};

export const MAP_ICON_ACTIVE = {
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};

export const MAX_RATING_VALUE = 5;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_COMMENT_LENGTH = 300;

export const MIN_COMMENT_LENGTH = 50;

export const PlacesListClassModifier = {
  CITIES: 'cities__places-list',
  NEAR_PLACES: 'near-places__list',
};

export const SortType = {
  DEFAULT: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  RATING_TO_LOW: 'Top rated first',
};

export const ReviewSendStatus = {
  DEFAULT: 'DEFAULT',
  POSTING: 'POSTING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

