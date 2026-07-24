/**
 * Main TypeScript file
 * 
 * Build system: VS Code tasks
 * Tasks execute on project open
 */

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('TypeScript app');
});

export default app;
