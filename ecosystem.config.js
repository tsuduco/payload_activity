module.exports = {
  apps: [
    {
      name: 'activity-cms',
      script: 'dist/server.js',
      env: {
        PAYLOAD_CONFIG_PATH: 'dist/payload.config.js',
        NODE_ENV: 'production'
      }
    }
  ]
};
