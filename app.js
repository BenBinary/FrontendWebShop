const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// Template Engine: EJS
app.set('view engine', 'ejs');
app.set('views', 'views');


// Datensätze aus anderen Modulen

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {

    res.status(404).render('404', { 
        pageTitle: 'Page not found',
        path: ''
    
    });
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
