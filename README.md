<div align="center">

# Checkout Order Form

*Professional multi-step checkout wizard with advanced validation*

[![GitHub stars](https://img.shields.io/github/stars/damianczer/Checkout-Order-Form?style=for-the-badge&color=gold)](https://github.com/damianczer/Checkout-Order-Form/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/damianczer/Checkout-Order-Form?style=for-the-badge&color=blue)](https://github.com/damianczer/Checkout-Order-Form/watchers)
[![GitHub issues](https://img.shields.io/github/issues/damianczer/Checkout-Order-Form?style=for-the-badge&color=red)](https://github.com/damianczer/Checkout-Order-Form/issues)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://www.damianczerwinski.pl/checkout-order-form/)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react) | `18.2.0` | Modern UI Framework |
| ![Redux](https://img.shields.io/badge/Redux-4.2.1-764ABC?style=flat-square&logo=redux) | `4.2.1` | State Management |
| ![Material-UI](https://img.shields.io/badge/MUI-6.4.9-007FFF?style=flat-square&logo=mui) | `6.4.9` | Component Library |
| ![Redux Form](https://img.shields.io/badge/Redux_Form-8.3.10-764ABC?style=flat-square&logo=redux) | `8.3.10` | Form State Management |
| ![i18next](https://img.shields.io/badge/i18next-24.2.3-26A69A?style=flat-square&logo=i18next) | `24.2.3` | Internationalization |

Comprehensive React Redux checkout order form with multi-step wizard, real-time validation, and responsive design optimized for both desktop and mobile devices.

<img alt="checkout-light" src="https://github.com/user-attachments/assets/771ea53a-2e5a-454b-a012-64f6f7606d00" />

</div>

**Key Features & Capabilities:**

- **Multi-step Checkout Process** - 4 distinct steps: Personal Data, Shipping Address, Payment Details, Order Summary
- **Real-time Form Validation** - Field-level error display with comprehensive validation rules
- **Smart Input Controls** - Phone masking, IBAN/BIC validation, postal code formatting
- **Dark/Light Theme** - Smooth theme transitions with system preference detection
- **Internationalization** - Full support for English and Polish languages
- **Responsive Design** - Mobile-first approach, works on all devices
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **hCaptcha Integration** - Bot protection on order submission

## 📁 Project Architecture

```
Checkout-Order-Form/
├── application/
│   ├── public/
│   │   └── index.html              # Main HTML template with SEO meta tags
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddressData.jsx     # Shipping address form step
│   │   │   ├── ErrorBoundary.jsx   # Error handling component
│   │   │   ├── Footer.jsx          # Footer with modals & toggles
│   │   │   ├── Header.jsx          # Header with theme/language toggles
│   │   │   ├── PaymentData.jsx     # Payment details form step
│   │   │   ├── PersonalData.jsx    # Personal information form step
│   │   │   ├── Product.jsx         # Product line item component
│   │   │   ├── ProductSummary.jsx  # Order summary sidebar
│   │   │   ├── Summary.jsx         # Final review step with hCaptcha
│   │   │   └── ThankYouPage.jsx    # Order confirmation page
│   │   │
│   │   ├── controls/
│   │   │   ├── Bic.jsx             # BIC code input with validation
│   │   │   ├── Checkbox.jsx        # Custom accessible checkbox
│   │   │   ├── Container.jsx       # Form container layout
│   │   │   ├── Country.jsx         # Country dropdown with API
│   │   │   ├── DatePicker.jsx      # Date selection component
│   │   │   ├── Iban.jsx            # IBAN input with formatting
│   │   │   ├── Label.jsx           # Accessible form labels
│   │   │   ├── Phone.jsx           # Phone number with masking
│   │   │   ├── Select.jsx          # Dropdown select component
│   │   │   ├── Text.jsx            # Text input component
│   │   │   ├── Wrapper.jsx         # Input wrapper layout
│   │   │   └── Zipcode.jsx         # Postal code with formatting
│   │   │
│   │   ├── constants/
│   │   │   ├── config.js           # Application configuration
│   │   │   └── products.js         # Product data definitions
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.js       # Theme & language context
│   │   │
│   │   ├── locales/
│   │   │   ├── en.json             # English translations
│   │   │   └── pl.json             # Polish translations
│   │   │
│   │   ├── theme/
│   │   │   └── theme.js            # MUI theme configuration
│   │   │
│   │   ├── App.jsx                 # Main application with stepper
│   │   ├── App.css                 # Global styles
│   │   ├── i18n.js                 # i18next configuration
│   │   ├── index.js                # Application entry point
│   │   ├── store.js                # Redux store configuration
│   │   └── validation.js           # Form validation rules
│   │
│   ├── craco.config.js             # CRACO configuration
│   ├── package.json                # Dependencies & scripts
│   └── .gitignore
│
├── LICENSE                         # MIT License
└── README.md                       # Project documentation
```

## ⚒️ Installation & Setup

### Prerequisites

```bash
- Node.js 14.0.0 or higher
- npm 7.0.0 or higher (or yarn/pnpm equivalent)
- Modern web browser (Chrome, Firefox, Safari, Edge)
```

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/damianczer/Checkout-Order-Form.git

# 2️⃣ Navigate to project directory
cd Checkout-Order-Form/application

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm start

# 🎉 Application will open at http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Production files will be in the 'build' folder
# Deploy the entire build folder to your web hosting

# Optional: Analyze bundle size
npm run build:analyze
```

## 📜 License

```
Copyright © 2025 Damian Czerwiński

This project is copyrighted and proprietary software.
All rights reserved.

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit written permission
from the copyright holder.

For licensing inquiries or permission requests:
📧 Email: kontakt@damianczerwinski.pl
🌐 Web: https://www.damianczerwinski.pl
```

<br>

<div align="center">
  
**Made with ❤️ and ☕ by Damian Czerwiński**

*Building beautiful, functional web experiences one component at a time*

</div>
