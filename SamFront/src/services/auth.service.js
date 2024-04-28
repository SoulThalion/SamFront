import { App } from "astro/app"

export const login = async (userName, password) => {
    try {
      const { data } = await App.post('/auth/login', {
        userName,
        password
      })
  
      return data
  
    } catch (error) {
      console.log('Error loging: ', error.message)
    }
  }