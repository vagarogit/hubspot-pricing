import { useState } from 'react'

type TeamSizeOption = 'Just Me' | '2' | '3' | '4' | '5' | '6' | '7+'

export default function PricingCalculator() {
  const [locationType, setLocationType] = useState<'one' | 'multiple'>('one')
  const [teamSize, setTeamSize] = useState<TeamSizeOption>('Just Me')
  
  const teamSizeOptions: TeamSizeOption[] = ['Just Me', '2', '3', '4', '5', '6', '7+']
  const pricingTiers: Record<TeamSizeOption, number> = {
    'Just Me': 23.99,
    '2': 33.99,
    '3': 43.99,
    '4': 53.99,
    '5': 63.99,
    '6': 73.99,
    '7+': 83.99
  }
  
  const totalPrice = pricingTiers[teamSize]

  return (
    <div className="container mx-auto justify-center flex">
      <div className="bg-white rounded-3xl shadow-(--card-shadow) p-10 max-w-lg w-full border border-ink-light min-h-[610px]">
        {/* Location Toggle */}
        <div
          className="tab-inner-shadow mx-auto mb-10 h-14 w-full max-w-[408px] cursor-pointer rounded-full p-1 bg-ink-lightest"
          onClick={() => setLocationType(locationType === 'one' ? 'multiple' : 'one')}
        >
          <div className="relative mx-auto h-12 w-full max-w-[400px]">
            <div
              className={`absolute bottom-0 top-0 flex w-1/2 items-center justify-center rounded-full font-semibold text-[#777777] transition-all duration-500 hover:text-black ${
                locationType === 'multiple' ? 'left-0' : 'left-1/2'
              }`}
            >
              {locationType === 'one'
                ? 'Multiple Locations'
                : 'One Location'}
            </div>
            <div
              className={`absolute bottom-0 top-0 flex w-1/2 items-center justify-center rounded-full bg-charcoal text-white transition-all duration-500 ${
                locationType === 'multiple' ? 'left-1/2' : 'left-0'
              }`}
            >
              {locationType === 'multiple' ? 'Multiple Locations' : 'One Location'}
            </div>
          </div>
        </div>

        {locationType === 'multiple' ? (
          <>
            {/* Enterprise-specific content */}
           <div className="flex flex-col gap-4">
           <img
              src="https://us-west-2.graphassets.com/AalLHDRueT6SDLkGLppQVz/4Ayj6CA9Qaeg0Vbr5jgM"
              alt="Enterprise Icon"
              className="mx-auto"
              width="207"
              height="95"
            />
            <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 md:block">
              Enterprise Business Software
            </h2>
            <p className="mb-4 text-center text-base text-gray-400">
              Go enterprise for Vagaro&apos;s powerful and intuitive
              <br />
              multi-location platform with advanced admin
              <br /> features and security.
            </p>
            <div className="flex justify-center gap-4">
                <div className="flex justify-center">
                    <button className="bg-none text-charcoal px-4 py-2 rounded-2 h-12">
                   Call us Now (925) 515-5055
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-primary text-white px-4 py-2 rounded-2 h-12">
                Contact Multi-location Team
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-none text-blue-default px-4 py-2 ">
                Learn more
              </button>
            </div>
           </div>
            {/* Add more enterprise-specific content */}
          </>
        ) : (
          <>
            {/* Pricing Display */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-medium text-charcoal mb-6">Here's what you'll pay:</h2>
              <div className="mb-3 flex items-center justify-center h-full">
                <span className="text-7xl font-bold text-charcoal">
                  <span className="text-2xl align-top text-charcoal">$</span>{totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-ink-dark text-lg">per month</p>
              <p className="text-ink-light text-base mt-2">1 bookable calendar</p>
            </div>

            {/* Team Size Selector */}
            <div className="bg-ink-lightest rounded p-1 mb-10 flex gap-1">
              {teamSizeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setTeamSize(option)}
                  className={`flex-1 py-2.5 px-3 rounded text-base font-medium transition-all duration-200 text-nowrap h-11 ${
                    teamSize === option
                      ? 'bg-charcoal text-white shadow-md'
                      : 'text-ink-dark hover:text-charcoal'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                className="w-full md:max-w-[200px] hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded text-lg transition-colors duration-200  bg-primary cursor-pointer"
              >
                Start Free Trial
              </button>
              
              <button className="w-full text-bluelink hover:text-blue-dark font-medium flex items-center justify-center gap-2 text-base transition-colors duration-200 cursor-pointer">
                Contact Sales
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}