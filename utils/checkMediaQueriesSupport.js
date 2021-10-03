const checkMediaQueriesSupport = () =>
  typeof window.matchMedia !== 'undefined' ||
  typeof window.msMatchMedia !== 'undefined'

export default checkMediaQueriesSupport
