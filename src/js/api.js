import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

const FILTERS = 'filters';
const EXERCISES = 'exercises';
const SUBSCRIPTION = 'subscription';

/**
 *  {page: number, perPage: number,  filter: 'Body parts' || 'Muscles' || 'Equipment'}
 */

export const fetchCategories = ({
                                  page = 1,
                                  perPage = 12,
                                  filter = 'Muscles',
                                } = {}) =>
  axios
    .get(`/${FILTERS}?filter=${filter}&page=${page}&limit=${perPage}`)
    .then(response => response.data);

/**
 *  {page: number, perPage: number, filter: {bodypart: string, muscles: string, equipment: string, keyword:string}}
 */
export const fetchExercises = ({
                                 page = 1,
                                 perPage = 12,
                                 filter = {},
                               } = {}) =>
  axios
    .get(
      `/${EXERCISES}?${new URLSearchParams(
        filter,
      ).toString()}&page=${page}&limit=${perPage}`,
    )
    .then(response => response.data);

/**
 *  id: string
 */

export const fetchOneExercise = id =>
  axios.get(`/${EXERCISES}/${id}`).then(response => response.data);

export const fetchQuote = async () => {
  try {
    const { data } = await axios.get('/quote');

    return data;
  } catch (error) {
    console.log('Error request "/quote"');
  }
};

/**
 *  email: string
 */
export const postSubscription = email =>
  axios
    .post(`/${SUBSCRIPTION}`, { email })
    .then(response => response.data);

/**
 *  id: string
 *  data: {rate: number, email: string, review:string}
 */
export const editExercisesRating = (id, data) =>
  axios
    .patch(`/${EXERCISES}/${id}/rating`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(response => response.data);
