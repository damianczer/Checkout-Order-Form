# Checkout Order Form

A comprehensive React Redux checkout order form with advanced field validation, multi-step wizard, and responsive design. This application demonstrates modern frontend development practices with form handling, state management, and user experience optimization.

![Checkout Order Form](https://github.com/user-attachments/assets/771ea53a-2e5a-454b-a012-64f6f7606d00)

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
   git clone https://github.com/yourusername/checkout-order.git
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

## 🔍 Key Problem Solutions

### 1. Autofill Validation Issue
**Problem**: Browser autofill doesn't trigger Redux Form validation
**Solution**: Implemented custom `onChange` handlers that force validation on autofill events
```javascript
onChange={(event) => {
  input.onChange(event);
  setTimeout(() => input.onBlur(event), 0);
}}
```

### 2. Date Picker Default Value
**Problem**: MUI DatePicker showing default date but Redux Form not recognizing the value
**Solution**: UseEffect hook to explicitly set default value in form state
```javascript
useEffect(() => {
  if (!input.value) {
    input.onChange(new Date());
  }
}, [input]);
```

### 3. Multi-step Form Validation
**Problem**: Need to validate all fields when clicking "Next" button
**Solution**: Touch all fields programmatically to trigger validation display
```javascript
const handleNext = () => {
  dispatch(touch('contactForm', ...allFields));
  setTimeout(() => {
    if (valid) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  }, 100);
};
```

### 4. Input Masking with Validation
**Problem**: Masked inputs (phone, IBAN, BIC) need both formatting and validation
**Solution**: Custom components combining react-input-mask with Redux Form integration

### 5. Responsive Layout Challenges
**Problem**: Complex layout with sidebar and main content area
**Solution**: CSS Grid and Flexbox combination with Material-UI breakpoints

### 6. API Error Handling
**Problem**: External REST Countries API reliability
**Solution**: Comprehensive error handling with user-friendly fallbacks

## 🎨 Design Features

### Visual Design
- **Material Design principles** throughout the application
- **Consistent color scheme** with primary blue (#1976d2) and success green
- **Professional typography** with proper hierarchy
- **Smooth transitions** and hover effects
- **Responsive breakpoints** for optimal mobile experience

### User Experience
- **Progressive disclosure** through multi-step wizard
- **Clear visual feedback** for form validation states
- **Intuitive navigation** with back/next buttons
- **Loading states** and error handling
- **Accessibility considerations** with proper ARIA labels

### Form Usability
- **Smart field formatting** (auto-dash in postal codes, phone masking)
- **Contextual help text** through helper text and placeholders
- **Logical field grouping** across multiple steps
- **Validation timing** optimized for user experience

## 🔒 Security Considerations

- **Client-side validation** with server-side validation recommended
- **hCaptcha integration** for bot protection
- **Input sanitization** through controlled components
- **XSS prevention** through React's built-in protections

## 🧪 Testing Recommendations

### Manual Testing Scenarios
1. **Complete form flow** from start to finish
2. **Validation testing** with invalid inputs
3. **Autofill scenarios** across different browsers
4. **Mobile responsiveness** testing
5. **API failure handling** (disconnect internet)
6. **Back/forward navigation** through steps

### Automated Testing Setup
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

## 🚀 Deployment

### Build Optimization
- **Code splitting** through React lazy loading
- **Asset optimization** via React Scripts
- **Production builds** with minification

### Environment Configuration
- Configure hCaptcha site keys for different environments
- Set up API endpoints for production
- Configure build scripts for CI/CD

## 📈 Performance Optimizations

- **React.memo** usage for component optimization
- **useSelector** with memoized selectors
- **Lazy loading** for heavy components
- **Input debouncing** for API calls
- **Asset optimization** and compression

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Damian Czerwiński**
- LinkedIn: [daczerw](https://www.linkedin.com/in/daczerw)
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Material-UI team for excellent component library
- Redux Form community for form state management
- REST Countries API for reliable country data
- React community for comprehensive documentation

---

*This project demonstrates modern React development practices with focus on user experience, form handling, and responsive design.*
