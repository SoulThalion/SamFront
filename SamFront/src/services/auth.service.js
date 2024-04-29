import app from './config'

const login = async (userName, password) => {
   try {
      const { data } = await app.post('/auth/login', {
        userName,
        password
      })
  
      return data
  
    } catch (error) {
      console.log('Error loging: ', error.message)
    }
  }

  export default login