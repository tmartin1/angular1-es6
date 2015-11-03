/**
 * Main application routes.
 */

import express from 'express';

export default function (app) {

    // Insert routes below
    app.use(express.static('public'));

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(process.cwd() + '/.tmp/serve/index.html');
        });

    return app;
}
