// const cloudinary = require('cloudinary').v2
import cloudinary from 'cloudinary'

export default cloudinary.config({ 
    cloud_name: import.meta.env.REACT_APP_CLOUD_NAME, 
    api_key: import.meta.env.REACT_APP_API_KEY, 
    api_secret: import.meta.env.REACT_APP_API_SECRET
  });

module.exports = cloudinary