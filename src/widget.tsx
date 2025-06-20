import React from 'react'
import ReactDOM from 'react-dom/client'
import PricingCalculator from './components/pricing/PricingCalculator'
import './index.css'

// Widget initialization function
(window as any).HubSpotPricingWidget = {
  init: (elementId: string) => {
    const container = document.getElementById(elementId)
    if (container) {
      const root = ReactDOM.createRoot(container)
      root.render(
        <React.StrictMode>
          <PricingCalculator />
        </React.StrictMode>
      )
    }
  }
}