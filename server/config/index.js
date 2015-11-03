var config = {};
var env = process.env;

config.server = {
    port: env.port || '8080',
    host: env.host || 'localhost'
};

export default config;
