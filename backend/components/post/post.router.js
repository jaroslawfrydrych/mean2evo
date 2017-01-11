/**
 * Created by jarek on 19/12/2016.
 */

import Post from './post.model';

export default (app, router, passport) => {
  router.route('/posts')
    .get((req, res) => {
      //res.status(404).send('aaa'); //for testing purposes only

      Post.find()
        .then(posts => {
          res.json(posts);
        })
        .catch(err => {
          res.send(err);
        })
    })

    .post(passport.authenticate('jwt', {session: false}), (req, res) => {
      Post.create(req.body)
        .then(posts => {
          console.log('created', posts);
          return res.send(posts);
        })
        .catch(err => {
          return res.send(err);
        });
    });
}