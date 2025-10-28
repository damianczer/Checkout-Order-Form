# Checkout Order Form

A comprehensive React Redux checkout order form with advanced field validation, multi-step wizard, and responsive design. This application demonstrates modern frontend development practices with form handling, state management, and user experience optimization.

<img width="1900" height="890" alt="image" src="https://github.com/user-attachments/assets/a88e0ab5-d900-4f25-be7e-3ebf61310c69" />

<img width="1628" height="763" alt="image" src="https://github.com/user-attachments/assets/6cf651e3-7323-4c43-abca-5e1bdf6013e8" />

<img width="1899" height="892" alt="image" src="https://github.com/user-attachments/assets/b4972b6c-e69b-4bc6-8bde-9daa021b46d9" />

<img width="794" height="631" alt="image" src="https://github.com/user-attachments/assets/b8bcc0f7-824a-4e18-b063-8e4d4c935723" />

<img width="986" height="894" alt="image" src="https://github.com/user-attachments/assets/5f2c2fe2-547f-46c9-bd09-0286bc63db22" />

## 🚀 Features

### Core Functionality
- **Multi-step checkout process** with 4 distinct steps:
  - Personal Data Collection
  - Shipping Address Information
  - Payment Details
  - Order Summary & Confirmation
- **Real-time form validation** with field-level error display
- **Autofill support** with automatic validation triggering
- **Responsive design** optimized for desktop and mobile devices
- **Professional thank you page** with order confirmation

### Advanced Form Controls
- **Smart phone number input** with Polish (+48) country code
- **IBAN validation** with Polish bank format (PL XX XXXX XXXX...)
- **BIC code validation** with automatic uppercase conversion
- **Postal code formatting** with automatic dash insertion (XX-XXX)
- **Date picker** with default value handling
- **Country selection** with REST Countries API integration
- **Masked input fields** for consistent data formatting

### Validation Features
- **Comprehensive field validation** including:
  - Required field validation
  - Email format validation
  - Phone number format validation
  - Strong password requirements
  - Password confirmation matching
  - Age restrictions (16-100 years)
  - IBAN/BIC format validation
  - Postal code format validation
- **Real-time validation feedback** with error highlighting
- **Form submission prevention** until all validations pass
- **Touch-based validation** showing errors only after user interaction

## 🛠 Technologies Used

### Frontend Framework & Libraries
- **React 18.2.0** - Core frontend framework
- **Redux 4.2.1** - State management
- **Redux Form 8.3.10** - Form state management and validation
- **@reduxjs/toolkit 2.6.1** - Modern Redux development

### UI Components & Styling
- **Material-UI (@mui/material) 6.4.9** - Component library
- **@mui/x-date-pickers 7.28.0** - Advanced date picker component
- **@mui/icons-material 6.4.9** - Material Design icons
- **@emotion/react & @emotion/styled** - CSS-in-JS styling

### Form Enhancement
- **react-input-mask 2.0.4** - Input masking for phone, IBAN, BIC
- **date-fns 2.29.2** - Date manipulation and formatting

### Security & External Services
- **@hcaptcha/react-hcaptcha 1.10.1** - Bot protection
- **REST Countries API** - Country data fetching

### Development Tools
- **FontAwesome** - Icon library for branding
- **React Scripts 5.0.1** - Build tooling

## 🌍 External APIs

### REST Countries API
- **Endpoint**: `https://restcountries.com/v3.1/all?fields=name,cca2`
- **Purpose**: Fetches real-time country data for the country selection dropdown
- **Error Handling**: Implements fallback mechanism and comprehensive error logging
- **Data Processing**: Filters and formats country data for consistent display

### hCaptcha Service
- **Integration**: Bot protection on order summary page
- **Site Key**: Configured for production use
- **Purpose**: Prevents automated form submissions

## 🔧 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/damianczer/checkout-order.git
   cd checkout-order/application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
application/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Application favicon
├── src/
│   ├── components/         # React components
│   │   ├── AddressData.jsx     # Address form step
│   │   ├── Copyright.jsx       # Footer component
│   │   ├── PaymentData.jsx     # Payment form step
│   │   ├── PersonalData.jsx    # Personal info step
│   │   ├── Product.jsx         # Product line item
│   │   ├── ProductSummary.jsx  # Order summary sidebar
│   │   ├── Summary.jsx         # Final review step
│   │   └── ThankYouPage.jsx    # Order confirmation page
│   ├── controls/           # Custom form controls
│   │   ├── Bic.jsx            # BIC code input
│   │   ├── Checkbox.jsx       # Custom checkbox
│   │   ├── Container.jsx      # Form container layout
│   │   ├── Country.jsx        # Country dropdown
│   │   ├── DatePicker.jsx     # Date selection
│   │   ├── Iban.jsx           # IBAN input with formatting
│   │   ├── Label.jsx          # Form labels
│   │   ├── Phone.jsx          # Phone number input
│   │   ├── Select.jsx         # Dropdown select
│   │   ├── Text.jsx           # Text input
│   │   ├── Wrapper.jsx        # Input wrapper
│   │   └── Zipcode.jsx        # Postal code input
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global styles
│   ├── index.js            # Application entry point
│   ├── store.js            # Redux store configuration
│   └── validation.js       # Form validation rules
├── package.json            # Dependencies and scripts
└── .gitignore             # Git ignore rules
```

## 📈 Performance Optimizations

- **React.memo** usage for component optimization
- **useSelector** with memoized selectors
- **Lazy loading** for heavy components
- **Input debouncing** for API calls
- **Asset optimization** and compression

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Damian Czerwiński**
- LinkedIn: [daczerw](https://www.linkedin.com/in/daczerw)
- GitHub: [Your GitHub Profile]


---

*This project demonstrates modern React development practices with focus on user experience, form handling, and responsive design.*
