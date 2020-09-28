export const environment = {
  production: true,
  locale: 'en-US',
  basePath: '/cer-ngxa/',
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
