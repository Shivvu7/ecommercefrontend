'use client'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Search, ChevronDown, Cake, Heart, Gift, Sparkles, Music, Utensils, GraduationCap } from 'lucide-react'

function SearchInput({ value, onChange }) {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search occasions..."
        className="w-full px-4 py-2 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search occasions"
      />
      <Search className="absolute right-3 top-2.5 h-5 w-5 text-pink-400" aria-hidden="true" />
    </div>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

function OccasionCard({ title, Icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 flex flex-col items-center">
        <Icon className="h-16 w-16 text-pink-500 mb-4" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 flex items-center">
          Shop Now
          <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

OccasionCard.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
}

const occasions = [
  { id: 1, title: 'Birthdays', Icon: Cake },
  { id: 2, title: 'Weddings', Icon: Heart },
  { id: 3, title: 'Holidays', Icon: Gift },
  { id: 4, title: 'Anniversaries', Icon: Sparkles },
  { id: 5, title: 'Parties', Icon: Music },
  { id: 6, title: 'Dinner Events', Icon: Utensils },
  { id: 7, title: 'Graduations', Icon: GraduationCap },
  { id: 8, title: 'Other Occasions', Icon: Gift },
]

export default function OccasionsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOccasions = occasions.filter((occasion) =>
    occasion.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Shop by Occasion</h1>
        
        <div className="flex justify-center mb-8">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredOccasions.map((occasion) => (
            <OccasionCard key={occasion.id} title={occasion.title} Icon={occasion.Icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

