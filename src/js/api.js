import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

const FILTERS = 'filters';
const EXERCISES = 'exercises';
const QUOTE = 'quote';
const SUBSCRIPTION = 'subscription';

/**
 *  {page: number, perPage: number,  filter: 'Body parts' || 'Muscles' || 'Equipment'}
 */

export const fetchCategories = async ({
  page = 1,
  perPage = 10,
  filter = 'Muscles',
} = {}) =>
  await axios
    .get(`/${FILTERS}?filter=${filter}&page=${page}&limit=${perPage}`)
    .then(response => response.data);

/**
 *  {page: number, perPage: number, filter: {bodypart: string, muscles: string, equipment: string, keyword:string}}
 */
export const fetchExercises = async ({
  page = 1,
  perPage = 10,
  filter = {},
} = {}) =>
  await axios
    .get(
      `/${EXERCISES}?${new URLSearchParams(
        filter
      ).toString()}&page=${page}&limit=${perPage}`
    )
    .then(response => response.data);

/**
 *  id: string
 */

export const fetchOneExercise = async id =>
  await axios.get(`/${EXERCISES}/${id}`).then(response => response.data);

export const fetchQuote = async () =>
  await axios.get(`/${QUOTE}`).then(response => response.data);

/**
 *  email: string
 */
export const postSubscription = async email =>
  await axios
    .post(`/${SUBSCRIPTION}`, { email })
    .then(response => response.data);

/**
 *  id: string
 *  data: {rate: number, email: string, review:string}
 */
export const editExercisesRating = async (id, data) =>
  await axios
    .patch(`/${EXERCISES}/${id}/rating`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(response => response.data);
