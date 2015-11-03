/**
 * Main application file.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import express from 'express';
import config from './config';
import routes from './routes';

// Setup server
var app = express();

// Define routes
routes(app);

// Start server
app.listen(config.server.port, config.server.host, (err) => {
    if (err) {
        console.log('Error found at running time:', err);
    }
    console.log('Example app listening on port %s', config.server.port);
});

// Expose app
export default app;
