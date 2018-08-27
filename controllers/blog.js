const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index")
  },
  showBlog:(req,res)=>{
    // res.send('ok')
    knex('post').then((result)=>{
      // res.send(result)
      // res.send(result[0].tag)
      res.render("blog",{posts:result,message:req.flash("success")})
    })
  },

  postPost:(req,res)=>{
    knex('post').then((result)=>{
      // res.send(result)
          res.render("postPost",{result})
    })
  },
  post:(req,res)=>{
    knex('post').insert({
      title:req.body.title,
      content:req.body.content,
    }).then(()=>{
      res.redirect("/blog");
    })
  },

// SHOW ONE POST AND THE COMMENT
  showOnePost:(req,res)=>{
    knex.select('post.id AS post_id','img_url AS img_url','title AS title','content AS content','comment AS comment','name AS guest_name').from('post')
    .join('comment','comment.post_id','post.id').join('guest','guest.id','comment.guest_id')
    .where('post.id',req.params.post_id)
    .then((result)=>{
      // res.send(result)
      res.render("showOnePost",{result})
    })

  },
  delete:(req,res)=>{
    knex('post').where('id',req.params.post_id).del()
    .then(()=>
    res.redirect('/blog'))
  },
  editPage:(req,res)=>{
    knex('post').where('id',req.params.post_id)
    .then((result)=>{
      res.render("editPage",{post:result[0]})
      // res.send(result)
    })
  },
  edit:(req,res)=>{
    knex('post').where('id',req.params.post_id).update(
      {
        title:req.body.title,
        content:req.body.content
      }
    ).then(()=>{
      res.redirect('/blog')
    })

  },
  comment:(req,res)=>{
    knex('comment').insert({
      comment:req.body.comment,
      guest_id:req.session.guest_id,
      post_id:req.params.post_id
    }).then(()=>{
      res.redirect(`/blog/show/${req.params.post_id}`)
    })
  }

}
