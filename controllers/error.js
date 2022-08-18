// exports.get404 = (req, res, next) => {
//   res.status(404).render('404', { pageTitle: 'Page Not Found' });
// };


const path = require('path');
const rootDir = require('../util/path');


exports.get404 = (req,res,next)=>{
  res.sendFile(path.join(rootDir, 'views', 'nf.html'))
}