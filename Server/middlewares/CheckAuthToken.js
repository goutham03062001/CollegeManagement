module.exports = function(req, res, next)  {
    // Get the authorization header value
    const authHeader = req.headers['x-auth-token'];
  
    // Check if the authorization header is present
    if (typeof authHeader !== 'undefined') {
      // Split the header value into parts
      
  
      // Check if the header value has the correct format
      
        req.token = token;
  
        // Call the next middleware function
        next();
       
    } else {
      // Return a 401 Unauthorized response
      res.sendStatus(401);
    }
  }
  