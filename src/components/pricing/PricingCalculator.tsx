import { useState } from 'react'

export default function PricingCalculator() {
  const [locationType, setLocationType] = useState<'one' | 'multiple'>('one')
  const [teamSize, setTeamSize] = useState<string>('Just Me')
  
  const basePrice = 23.99
  const teamSizeMultiplier = teamSize === 'Just Me' ? 1 : parseInt(teamSize)
  const totalPrice = basePrice * teamSizeMultiplier

  const teamSizeOptions = ['Just Me', '2', '3', '4', '5', '6', '7+']

  return (
    <div className="flex items-center justify-center bg-white border border-inkLightest rounded-2xl p-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg w-full">
        {/* Location Toggle */}
        <div className="bg-inkLightest rounded-full p-1 mb-10 flex">
          <button
            onClick={() => setLocationType('one')}
            className={`flex-1 py-3 px-8 rounded-full text-base font-medium transition-all duration-200 ${
              locationType === 'one'
                ? 'bg-charcoal text-white shadow-md'
                : 'text-inkDark hover:text-charcoal'
            }`}
          >
            One Location
          </button>
          <button
            onClick={() => setLocationType('multiple')}
            className={`flex-1 py-3 px-8 rounded-full text-base font-medium transition-all duration-200 ${
              locationType === 'multiple'
                ? 'bg-charcoal text-white shadow-md'
                : 'text-inkDark hover:text-charcoal'
            }`}
          >
            Multiple Locations
          </button>
        </div>

        {/* Pricing Display */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-charcoal mb-6">Here's what you'll pay:</h2>
          <div className="mb-3">
            <span className="text-6xl font-bold text-charcoal">
              <span className="text-4xl align-top">$</span>{totalPrice.toFixed(0)}
              <span className="text-4xl">.99</span>
            </span>
          </div>
          <p className="text-inkDark text-lg">per month</p>
          <p className="text-inkLight text-base mt-2">1 bookable calendar</p>
        </div>

        {/* Team Size Selector */}
        <div className="bg-inkLightest rounded-full p-1 mb-10 flex gap-1">
          {teamSizeOptions.map((option) => (
            <button
              key={option}
              onClick={() => setTeamSize(option)}
              className={`flex-1 py-2.5 px-3 rounded-full text-base font-medium transition-all duration-200 ${
                teamSize === option
                  ? 'bg-charcoal text-white shadow-md'
                  : 'text-inkDark hover:text-charcoal'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button 
            className="w-full bg-primary hover:bg-primaryHover text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-md hover:shadow-lg bg-primary"
          >
            Start Free Trial
          </button>
          
          <button className="w-full text-bluelink hover:text-blueDark font-medium flex items-center justify-center gap-2 text-base transition-colors duration-200">
            Contact Sales
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}