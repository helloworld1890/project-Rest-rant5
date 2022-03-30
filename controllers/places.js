const router = require("express").Router();
//const places = require("../models/places");
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find().then((places) => {
    console.log(places);
      res.render('places/index', { places })
    }).catch(err => {
      console.log(err) 
      res.render('error404')
    })
});

router.post('/', (req, res) => {
  if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = undefined
      }
      if (!req.body.city) {
        req.body.city = undefined
      }
      if (!req.body.state) {
        req.body.state = undefined
      }  

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log()
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
     res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false;
  req.body.stars = req.body.stars ? req.body.stars : undefined;
  req.body.author = req.body.author ? req.body.author : undefined;
  req.body.content = req.body.content ? req.body.content : undefined;
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

module.exports = router;

// router.get('/new', (req, res) => {
//   res.render('places/new');
// });

// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//     req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//     req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// router.get('/', (req, res) => {
//     res.render('places/index', {places})
// })

// //SHOW
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// });

// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// });

// //EDIT
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//       res.render('error404');
//   } else if (!places[id]) {
//     res.render('error404');
//   } else {
//     res.render('places/edit', ({place: places[id], id}));
//   }
// })

// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })

module.exports = router;
