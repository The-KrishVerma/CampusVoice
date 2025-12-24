import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Newsletter = () => {
  const { axios } = useAppContext()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const { data } = await axios.post('/api/newsletter/subscribe', { email })
      if (data.success) {
        toast.success(data.message)
        setEmail('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message
      toast.error(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center text-center space-y-4 my-20 px-4'>
      <h1 className='md:text-4xl text-2xl font-semibold text-white'>Never Miss a Blog</h1>
      <p className='md:text-lg text-gray-400 pb-8 max-w-2xl mx-auto'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <form onSubmit={onSubmit} className='flex items-center justify-between max-w-xl w-full h-12 bg-gray-800 rounded-full border border-gray-700 overflow-hidden' >
        <input
          className='w-full h-full bg-transparent outline-none px-6 text-gray-300 placeholder-gray-500'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email id'
          required
        />
        <button disabled={isSubmitting} type='submit' className='md:px-6 px-4 h-10 text-white bg-primary hover:bg-primary/90 transition-all cursor-pointer rounded-full m-1 disabled:opacity-60'>
          {isSubmitting ? 'Sending...' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}

export default Newsletter
