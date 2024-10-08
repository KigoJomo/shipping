'use client'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RegularWrapper from './RegularWrapper'
import DiagonalArrow from './DiagonalArrow'

const OptionButton = ({ text, active, onClick, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-10 py-1 md:py-2 rounded-md md:rounded-xl capitalize font-medium cursor-pointer text-nowrap text-xs md:text-base border text-text-primary ${
        active ? 'bg-secondary text-white border-transparent' : 'bg-transparent'
      }
      ${
        type === 'submit'
          ? 'hover:bg-primary hover:text-white hover:border-0'
          : ''
      }}`}
      type={type}
    >
      {text}
    </button>
  )
}

const CategorySelect = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="category-select w-full flex flex-col gap-4">
      <label className="text-xs md:text-base capitalize font-light text-text-primary">
        {label}
      </label>
      <div className="categories flex items-center justify-start flex-wrap gap-4">
        {options.map((option) => (
          <OptionButton
            key={option}
            text={option}
            active={option === selectedOption}
            onClick={() => setSelectedOption(option)}
          />
        ))}
      </div>
    </div>
  )
}

const FreightOptions = ['air', 'sea', 'road']

const originCountries = ['Kenya', 'US', 'China', 'UK']
const destinationCountries = [
  ...originCountries,
  'Uganda',
  'Tanzania',
  'Rwanda',
  'Burundi',
  'South Sudan',
  'Somalia',
  'DRC',
]

const specialOptions = ['Fragile', 'Flammable']

const ModalForm = ({ isOpen, onClose, freightOption }) => {
  const [loading, setLoading] = useState(false)
  const [currentFreightOption, setCurrentFreightOption] = useState('')
  const [packageCategory, setPackageCategory] = useState('General')
  const [specialOption, setSpecialOption] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setCurrentFreightOption(freightOption)
    } else {
      document.body.style.overflow = 'auto'
      setCurrentFreightOption('')
      setPackageCategory('General')
      setSpecialOption('')
    }
  }, [freightOption, isOpen])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)
    try {
      const response = await fetch(event.target.action, {
        method: event.target.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        toast.success("Request submitted.  We'll contact you shortly.", {
          theme: 'dark',
        })
        setTimeout(() => {
          onClose()
        }, 5000)
        event.target.reset()
      } else {
        toast.error('Something went wrong. Please try again.', {
          theme: 'dark',
        })
      }
    } catch (error) {
      toast.error(
        'There was an error sending your request. Please try again.',
        {
          theme: 'dark',
        }
      )
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-700">
      <div className="bg-background border border-tertiary px-4 md:px-8 py-0 rounded-lg w-4/5 md:w-full h-4/5 md:h-[90%] max-w-lg relative flex flex-col gap-6">
        <button
          className="absolute top-4 right-6 text-5xl font-thin"
          onClick={onClose}
        >
          &times;
        </button>
        <ToastContainer />
        <h3 className="w-full">Get a Quote</h3>
        <form
          action="https://public.herotofu.com/v1/2c5f7470-50e9-11ef-8946-916ba40ee922"
          method="post"
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col gap-8 overflow-y-scroll scrollbar-themed md:pr-6 pb-6"
        >
          <input
            type="hidden"
            name="freight-option"
            value={currentFreightOption}
          />

          <CategorySelect
            label={'Freight option'}
            options={FreightOptions}
            selectedOption={currentFreightOption}
            setSelectedOption={setCurrentFreightOption}
          />
          <RegularWrapper
            name={'origin-country'}
            type={'select'}
            options={originCountries}
            label={'Country of Origin'}
          />
          <RegularWrapper
            name={'destination-country'}
            type={'select'}
            options={destinationCountries}
            label={'Destination Country'}
          />

          <RegularWrapper
            name={'package-category'}
            type={'select'}
            label={'Package Category'}
            options={['General', 'Special']}
            selectedOption={packageCategory}
            onChange={(e) => setPackageCategory(e.target.value)}
          />

          {/* Conditional dropdown for special package */}
          {packageCategory === 'Special' && (
            <RegularWrapper
              name={'special-option'}
              type={'select'}
              label={'Special Handling'}
              options={specialOptions}
              selectedOption={specialOption}
              onChange={(e) => setSpecialOption(e.target.value)}
            />
          )}

          <RegularWrapper
            name={'weight'}
            type={'number'}
            label={'Weight (kg) - Rate: $13/kg'}
            max={999}
          />
          <RegularWrapper
            name={'phone'}
            type={'tel'}
            label={'Phone number'}
            placeholder={'eg. +254 7XX XXX XXX'}
          />
          <RegularWrapper name={'email'} type={'email'} label={'Email'} />

          <button
            type="submit"
            className={`w-full px-8 py-4 capitalize flex items-center justify-between rounded-full border border-tertiary bg-tertiary md:hover:bg-secondary md:focus:bg-secondary md:focus:outline-none ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              <>
                <p className="text-white">get a Quote</p>
                <div className="w-6 aspect-square">
                  <DiagonalArrow />
                </div>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModalForm
