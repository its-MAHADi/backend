import express from "express";
 const app = express()
 const port = 3000

//  post request
app.use (express.json())
app.post("/users",(req,res) => {
   res.status(200).json({
    message:"users create successfuly",
    success:true,
    data:{}
   })
})
 

// patch request

app.patch("/product/:id",(req,res) => {
 const product =[{name : "mahadi",age: "22",id:3 }, {name:"opuu",age:"23", id:4 }]
  const id = req.params.id
  const updateproduct = product.find(product =>product.id === id)

 res.status (200).json({
  message:"update successfully",
  success:true ,
  data:updateproduct
 })
})

// delete 

app.delete("/product/:id",(req,res) => {
  const product =[{name : "mahadi hasan", age:"22",id:1},{name : "mahadi hasan",age : "21", id:2 }]
  const id =  (req.params.id)
  const remainingproduct = product.filter(product => product.id !==id);

  res.status (200).json({
    message:"delete successfully",
    success : true ,
    data :remainingproduct
  })
})

//  get

 app.get("/users", (req, res) => {
  console.log(req.query)
    const users=[{ name: "mahadi", age: "21" , id:1 }, {name:"opu" ,age:"22" ,id:2 }]
    const minimamdata=users.filter(users =>users.age === Number( req.query.age))
    res.status (200).json({
      message:"users retrieved successfully",
      sucess:true ,
      data:minimamdata
    })
  })

  app.get("/users/:id",(req,res)=>{
    const users=[{ name: "mahadi", age: "21" , id:1 }, {name:"opu" ,age:"22" ,id:2 }]
    const getsingleuser = users.find(users =>users.id === Number( req.params.userid))
    res.status (200).json({
      message:"users retrieved successfully",
      sucess:true ,
      data:getsingleuser
    })
  })

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })