const express = require ('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail,com'},
    { id: 2, name: 'Sabnur', email: 'Sabnur@gmail,com'},
    { id: 3, name: 'Sabila', email: 'Sabila@gmail,com'},

]
// middlewear
app.use(cors());
app.use(express.json())
app.get('/', (req, res) =>{
    res.send('Users management server is running');

})

app.post('/users', (req,res)=>{
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.get('/users',(req,res)=>{
    res.send(users);
} )
app.listen(port, () =>{
    console.log(`Server is running on PORT:${port}`)
})