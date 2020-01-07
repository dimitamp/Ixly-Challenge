export default {
  set: data => ({
    type: 'AUTH.SET',
    payload: data
  }),
  clear: () => ({type: 'AUTH.CLEAR'})
};
