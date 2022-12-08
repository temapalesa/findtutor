

const Pool = require('pg').Pool;
const pool = new Pool({
    user:'me',
    host: 'localhost',
    database: 'findtutor',
    password : 'password',
    port : 5432,
});
const  jwt  =  require("jsonwebtoken");
const  bcrypt  =  require("bcrypt");

const getUsers = (request ,response) => {
    pool.query('SELECT * FROM users', (error,results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const register = async (request, response) => {

    const {name,surname,email,accounttype,password,phonenumber} = request.body;
    pool.query('SELECT * FROM users where email=$1',[email],(error,results)=>{
        if(results.rowCount == 0 ){

            pool.query('INSERT INTO users(name,surname,email,accounttype,password,phonenumber) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',
            [name,surname,email,accounttype,password,phonenumber], (error,results)=>{
               if(error){
                response.status(400).json({message:'Query failed'});
               }  else{
                response.status(200).json({message: name+' has been registered, Please login'});
               }
            })
        }else{
            response.status(400).json({message:'User already exists, Please login!'});
        }
    })
}


const login =  async (request,response)=>{
    const {email,password} =  request.body;
    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2',[email,password],(error,results)=>{
        if(error){
            response.status(400).json({message: "Error communicating with database"})
        }else{
            if(results.rowCount==0){
                response.status(400).json({message: "User does not exist, Please register"})
            }else{
                bcrypt.compare(password,results.rows[0].password,(error,result)=>{
                   if(password != results.rows[0].password ){
                    response.status(400).json({message: "Invalid Credentials, Please try again"});
                   } else{
                    const token = jwt.sign({
                        id: results.rows[0].id,
                        email: results.rows[0].email,
                        name: results.rows[0].name,
                        surname: results.rows[0].surname,
                        password: results.rows[0].password,
                        accounttype: results.rows[0].accounttype,
                        phonenumber: results.rows[0].phonenumber
                    },
                    "hscjhgkfhdagfh",{
                        algorithm: 'HS256',
                        expiresIn: 120
                    });
                    response.status(200).json({message: "Welcome! user : "+results.rows[0].id +" "+results.rows[0].surname+ " "+results.rows[0].name
                     ,token: token,}); 
                }
                 })
            }
        }
    })
    
}


module.exports = {
    getUsers,
    register,
    login
}