export const environment = {
  production: false,
  locale: 'en-US',
  basePath: '/',
  host: {
    auth: {
      protocol: 'https',
      host: 'cer-api.herokuapp.com',
    },
    security: {
      protocol: 'https',
      host: 'cer-api.herokuapp.com',
    },
    master: {
      protocol: 'https',
      host: 'cer-api.herokuapp.com',
    },
    file: {
      protocol: 'https',
      host: 'cer-api.herokuapp.com',
    },
    notification: {
      protocol: 'https',
      host: 'cer-api.herokuapp.com',
    },
    panic: {
      protocol: 'https',
      host: 'cer-api.herokuapp.com',
    },
  },
};
