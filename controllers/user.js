const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  loginPage:(req,res)=>{
    // console.log(req.flash("error"))
    res.render("login",{message:req.flash("error")})
  },
  register:(req, res)=>{
    knex('guest').insert({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
    }).then(()=>{
      res.redirect("/");
    })
  },
  login:(req,res)=>{
    knex('guest').where("email",req.body.email)
    .then((result)=>{

      let guest = result[0];
      if(guest.password===req.body.password){
        req.session.guest_id=guest.id;
        // res.send('ok')
        res.redirect("/blog")
      }else{
        res.redirect("/");
        // ADD~SHOW WRONG PASSWORD
      }
    })
  },
  logout:(req,res)=>{
    req.session.guest_id=null;
    req.session.save(()=>{
      res.send('ok')
      // res.redirect("/login")
    })
  },
}
