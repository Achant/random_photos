const express = require('express');
const app = express();
const Gallery = require('express-photo-gallery');

let options = {
  title: 'My Awesome Photo Gallery'
};




app.get('/photos', (req, res)) => {

};










app.listen(3000, () => {
  console.log('the application is running on localhost: 3000')
});
