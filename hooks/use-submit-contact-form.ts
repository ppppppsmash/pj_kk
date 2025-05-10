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
      .then(data => {
        console.log('API Response:', data)
        resolve(data)
      })
      .catch(error => {
        console.error('API Error:', error)
        reject(error)
      });
    });
  };

  async function submitForm<T>(data: T) {
    setIsLoading(true)
  
    try {
      const response = await api(data)
      return response // APIから返される { success: true } をそのまま返す
    } catch (error) {
      console.error('Form submission error:', error)
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    submitForm,
  }
}