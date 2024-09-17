// components/Categories.js
'use client'
import { useState, useEffect } from 'react'
import ModalForm from './ModalForm'
import CategoryItem from './CategoryItem'
import FlyingPlane from './FlyingPlane'
import LandShipping from './LandShipping'
import SailingShip from './SailingShip'

const FreightOptions = ['air', 'sea', 'road']

const Categories = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedFreight, setSelectedFreight] = useState('')

  useEffect(() => {
    if (selectedFreight) {
      setModalOpen(true)
    }
  }, [selectedFreight])

  const openModal = (freight) => {
    setSelectedFreight(freight)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedFreight('')
  }

  const categoryData = [
    {
      title: 'Air',
      AnimatedComponent: FlyingPlane,
      description:
        'Fast and efficient transportation of goods by aircraft for long distances.',
      onClick: () => openModal(FreightOptions[0]),
      className: 'bg-tertiary',
    },
    {
      title: 'Sea',
      AnimatedComponent: SailingShip,
      description:
        'Reliable and cost-effective shipping of large volumes of goods by sea.',
      onClick: () => openModal(FreightOptions[1]),
      className: 'bg-primary-dark',
    },
    {
      title: 'Land',
      AnimatedComponent: LandShipping,
      description: 'Convenient and flexible transportation of goods by road.',
      onClick: () => openModal(FreightOptions[2]),
      className: 'bg-secondary',
    },
  ]

  return (
    <>
      <section
        id="categories"
        className="h-[110vh] md:h-[100vh] md:pb-20 md:pt-32 flex flex-col gap-8"
        style={{ perspective: '2500px' }}
      >
        <h3 className="text-center">customized solutions for your business</h3>
        <div className="w-full h-full flex flex-col md:flex-row gap-8">
          {categoryData.map(
            ({ title, AnimatedComponent, description, onClick, className }) => (
              <CategoryItem
                key={title}
                title={title}
                AnimatedComponent={AnimatedComponent}
                description={description}
                onClick={onClick}
                className={className}
              />
            )
          )}
        </div>
      </section>
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        freightOption={selectedFreight}
      />
    </>
  )
}

export default Categories
