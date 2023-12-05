const express = require('express');
const app = express();
const port = 5500;
const bodyParser = require('body-parser');
const cors = require('cors');

const enginesRouter = require('./routers/engines.routers');
const usersRouter = require('./routers/users.routers');
const mediaRouter = require('./routers/media.routers');
const brandsRouter = require('./routers/brands.routers');
const manufacturersRouter = require('./routers/manufacturers.routers');
const componentsRouter = require('./routers/components.routers');
const featuresRouter = require('./routers/features.routers');
const featureDetailsRouter = require('./routers/feature_details.routers');
const compatibleComponentsRouter = require('./routers/compatible_components.routers');
const loginRouter = require('./routers/login.routers');

app.listen(port, () => {
    console.log("Server running http://localhost:"+port);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api/engines', enginesRouter);
app.use('/api/components', componentsRouter);
app.use('/api/users', usersRouter);
app.use('/api/media', mediaRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/manufacturers', manufacturersRouter);
app.use('/api/features', featuresRouter);
app.use('/api/feature_details', featureDetailsRouter);
app.use('/api/compatible_components', compatibleComponentsRouter);
app.use('/api/login', loginRouter);