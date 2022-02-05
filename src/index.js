import './css/styles.css';
import fetchCountries from './js/fetchCountries.js';
import { debounce } from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

Notify.info('Too many matches found. Please enter a more specific name.');
Notify.failure('Oops, there is no country with that name');
