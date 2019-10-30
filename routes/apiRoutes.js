module.exports = function(app){
    // attempt to deal with the cors problem
    app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    app.get('/', function(req,res){
        res.status(200).send('Hello World')
    })

    // ==========GET ROUTES============
    
    // ==========POST ROUTES============
    app.post('/api/signup',(req,res)=>{
        const newUser = {
            email : req.body.userPayload.email,
            name : req.body.userPayload.Name,
            password : req.body.userPayload.password
        }
        console.log(newUser, "newUser")

    })



    // ==========DELETE ROUTES============



}