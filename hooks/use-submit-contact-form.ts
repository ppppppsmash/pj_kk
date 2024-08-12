
import { useState } from 'react'

export default function useSubmitContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const api = (data: any) => {
    return new Promise((resolve, reject) => {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
    });
  };

  async function submitForm<T>(data: T) {
    setIsLoading(true)

    console.log(data)
  
    try {
      const response = await api(data)
  
      alert(response)
  
      return response
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  

  return {
    isLoading,
    submitForm,
  }
}