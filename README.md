# gatsby-plugin-clearbit

Gatsby plugin for Clearbit.

## Install

```sh
yarn add gatsby-plugin-clearbit
```

## Usage

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-clearbit',
    options: {
      publishableKey: 'YOUR-PUBLISHABLE-KEY',
      enableOnDevMode: true // if 'false', clearbit will be fired on NODE_ENV=production only
    },
  },
],
```
