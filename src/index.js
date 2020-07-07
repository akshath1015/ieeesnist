const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
//Getting the paths
const publicPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname , '../views/templates')
const partialsPath = path.join(__dirname, '../views/partials')

//Setting the view Engine
app.set('views', viewPath)
app.set('view engine', 'hbs')

//Setting the public folder and Partials Folder
app.use(express.static(publicPath))
hbs.registerPartials(partialsPath)

//Getting All the Routes
app.get('/', (req,res) => {
    res.render('index', {
        title:'IEEE SNIST'
    })
})

app.get('/about-ieee', (req,res) => {
    res.render('about-ieee', {
        title:'About Us',
    })
})
app.get('/about-hydSection', (req, res) => {
    res.render('about-hyd-section', {
        title: 'About Us',
    })
})
app.get('/about-r10', (req, res) => {
    res.render('about-ieee-r10', {
        title: 'About Us',
    })
})
app.get('/about-snist-sb', (req, res) => {
    res.render('about-sb', {
        title: 'About Us',
    })
})

//TEAM ROUTER
app.get('/team-excomm', (req, res) => {
    res.render('team-excomm', {
        title: 'Team',
    })
})
app.get('/team-halloffame', (req, res) => {
    res.render('team-halloffame', {
        title: 'Team',
    })
})
app.get('/team-bare-constitution', (req, res) => {
    res.render('team-bare-constitution', {
        title: 'Team',
    })
})

app.get('/events', (req, res) => {
    res.render('events', {
        title: 'Events',
    })
})


app.get('/dataCenter-active', (req, res) => {
    res.render('dataC-activeMem', {
        title: 'Data Center',
    })
})
app.get('/dataCenter-filing', (req, res) => {
    res.render('dataC-filing', {
        title: 'Data Center',
    })
})
app.get('/dataCenter-reports', (req, res) => {
    res.render('dataC-reports', {
        title: 'Data Center',
    })
})

app.get('/student-services-resume', (req, res) => {
    res.render('student-resume', {
        title: 'Student Services',
    })
})
app.get('/student-services-techSem', (req, res) => {
    res.render('student-techSem', {
        title: 'Student Services',
    })
})
app.get('/student-services-journal&paper', (req, res) => {
    res.render('student-journal', {
        title: 'Student Services',
    })
})
app.get('/student-services-linkedinAllStar', (req, res) => {
    res.render('student-linkedin', {
        title: 'Student Services',
    })
})
app.get('/student-services-joinUs', (req, res) => {
    res.render('student-join', {
        title: 'Student Services',
    })
})

app.get('/chapters-pes', (req, res) => {
    res.render('chapters-pes', {
        title: 'Chapters',
    })
})
app.get('/chapters-wie', (req, res) => {
    res.render('chapters-wie', {
        title: 'Chapters',
    })
})
app.get('/chapters-cs', (req, res) => {
    res.render('chapters-cs', {
        title: 'Chapters',
    })
})
app.get('/chapters-comsoc', (req, res) => {
    res.render('chapters-comsoc', {
        title: 'Chapters',
    })
})
app.get('/construction', (req,res) => {
    res.render('construction', {
        title:'Adastra'
    })
})

//Listening to the Server
const port = process.env.PORT || 8050
app.listen(port,() => {
    console.log('Server Running on PORT:' + port)
})