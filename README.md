# ClicknCod Frontend

This is the React frontend for ClicknCod, integrated with the Express backend using React Query.

## 🚀 Features

- **Contact Form**: Integrated with backend API, includes validation and loading states
- **Testimonials**: Dynamic loading from backend, submission form with rating system
- **React Query**: Efficient data fetching and caching
- **Toast Notifications**: User feedback for all actions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Skeleton loaders and spinners for better UX

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library

## 📦 Installation

```bash
npm install
```

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🔌 API Integration

### Contact Form

- **Endpoint**: `POST /api/contact`
- **Features**:
  - Form validation
  - Loading states
  - Success/error handling
  - Toast notifications
  - Rate limiting (handled by backend)

### Testimonials

- **Endpoints**:
  - `GET /api/testimonials/featured` - Get featured testimonials
  - `POST /api/testimonials` - Submit new testimonial
- **Features**:
  - Dynamic loading
  - Submission form
  - Star rating system
  - Service categorization

## 🎨 UI/UX Features

- **Loading States**: Spinners and skeleton loaders
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Success states and confirmations
- **Form Validation**: Real-time validation with visual feedback
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Proper labels and ARIA attributes

## 📱 Components

- **ContactForm**: Integrated contact form with backend
- **Testimonials**: Dynamic testimonials with submission
- **LoadingSpinner**: Reusable loading component
- **Toast Notifications**: User feedback system

## 🔒 Security Features

- **Input Sanitization**: XSS prevention
- **Form Validation**: Client and server-side validation
- **Rate Limiting**: Backend-enforced limits
- **CSRF Protection**: Token-based protection

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Set environment variables**: Create `.env` file
3. **Start backend**: Ensure backend is running on port 5000
4. **Start frontend**: `npm run dev`
5. **Open browser**: Navigate to `http://localhost:5173`

## 📊 API Response Format

All API responses follow this format:

```json
{
  "status": "success|error",
  "message": "Human readable message",
  "data": { ... }
}
```

## 🎯 Next Steps

- [ ] Add authentication system
- [ ] Implement admin dashboard
- [ ] Add image upload functionality
- [ ] Implement real-time notifications
- [ ] Add analytics tracking
- [ ] Implement PWA features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
