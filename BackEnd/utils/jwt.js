const sendToken = (user, statusCode, res)=>{

  //creating JWT token
  const token = user.getJwtToken();

  //set cookies
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000), //IT was in millisecond
    httpOnly: true
  }

  res.status(statusCode)
  .cookie('token',token,options)
  .json({
    success: true,
    token,
    user
  })
}

module.exports = sendToken;