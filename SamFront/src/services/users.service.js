import app from './config'

export const getAllUsers = async () => {
    const token = localStorage.getItem('token');
    try {
        const { data } = await app.get('/user', {
            headers: {
                token: token
            }
        })
    
        return JSON.stringify(data)
    
      } catch (error) {
        console.log('Error loging: ', error.message)
      }
  }