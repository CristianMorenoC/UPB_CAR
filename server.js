const { app } = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

//database
const { sequelize } = require('./utils/database');

sequelize
    .authenticate()
    .then(()=> console.log('database authenticate'))
    .catch(err => console.log(err));


sequelize
    .sync()
    .then(() => console.log('database sync'))
    .catch(err => console.log(err));


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`App running on PORT ${PORT}`);
});

