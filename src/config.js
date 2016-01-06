require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Whathandgunshouldicc',
    description: 'Tools to help you pick your CCW',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'What Handgun Should I carry',
        'og:locale': 'en_US',
        'og:title': 'Which handgun should i carry',
        'og:description': 'Tools to help you pick your CCW'
      }
    }
  }
}, environment);
