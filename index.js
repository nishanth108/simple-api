const express = require('express');

//intializing express
const noddy =express();

noddy.use(express.json());

//get

noddy.get("/",(request,response)=>{
  return   response.json({data:"hello guys"});
});

noddy.get("/a",(request,response)=>{
  return   response.json({data:"hello guys dana undd"});
});


noddy.get("/b/:id",(req,res)=>{
  const students  =[
    {
    id:1,
    name:"student2"
  },
  {
  id:2,
  name:"student1"
  },
  {
    id:3,
    name:"student3"
  },
  {
      id:4,
      name:"student4"
  },
  {
  id:5,
  name:"student5 "
  }
  ]

  const studentID =req.params.id;
  console.log(studentID);
  const getID =students.filter((student) => student.id ==parseInt(studentID));
  return res.json({data:getID})

})


noddy.listen(3000,() => {
  })
