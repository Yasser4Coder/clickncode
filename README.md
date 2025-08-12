# 🚀 Clickncod - Digital Solutions Website

> **Build your smart digital product with just one click** - A modern, responsive website showcasing web development, mobile apps, AI solutions, and UI/UX design services.

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Features Explained](#features-explained)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Clickncod is a professional digital agency website that showcases comprehensive web development, mobile app development, AI solutions, and UI/UX design services. Built with modern technologies, it features a beautiful dark theme, smooth animations, and a fully functional contact system.

### 🎯 What We Offer

- **🌐 Web Development** - Custom responsive websites
- **📱 Mobile Apps** - Cross-platform Flutter development
- **🤖 AI & Automation** - Custom AI logic and integrations
- **🎨 UI/UX Design** - Wireframes and high-fidelity designs

## ✨ Features

### 🎨 **Frontend Features**

- **Responsive Design** - Works perfectly on all devices
- **Dark Theme** - Modern, professional appearance
- **Smooth Animations** - Beautiful transitions and effects
- **Interactive Elements** - Hover effects and micro-interactions
- **Custom Scrollbar** - Branded scrollbar with gradient colors

### 📝 **Contact & Forms**

- **Contact Form** - Professional project inquiry system
- **Newsletter Subscription** - Email marketing integration
- **Form Validation** - Real-time input validation
- **Success Notifications** - Toast notifications for user feedback

### 💬 **Testimonials System**

- **Client Reviews** - Display customer testimonials
- **Moderation System** - Admin approval for testimonials
- **Email Notifications** - Instant admin alerts
- **Direct Approval** - Approve/reject via email links

### 🔧 **Admin Features**

- **Dashboard** - Overview of submissions and statistics
- **Content Management** - Manage testimonials and contacts
- **Email Integration** - Gmail notifications and approvals
- **Secure Routes** - Protected admin functionality

## 🛠️ Technologies Used

### **Frontend**

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and state management
- **React Hot Toast** - Beautiful notifications
- **React Icons** - Comprehensive icon library

### **Backend**

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - Secure authentication tokens
- **Nodemailer** - Email sending functionality

### **Development Tools**

- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Nodemon** - Auto-restart development server
- **Jest** - Testing framework

## 📁 Project Structure

```
clickncod/
├── clickncode-client/          # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── sections/           # Main page sections
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API service functions
│   │   ├── assets/             # Images, icons, and media
│   │   └── App.jsx             # Main application component
│   ├── package.json
│   └── vite.config.js
│
├── clickncode-server/          # Backend Express application
│   ├── config/                 # Database and environment config
│   ├── models/                 # Mongoose data models
│   ├── routes/                 # API route definitions
│   ├── middleware/             # Custom middleware functions
│   ├── utils/                  # Utility functions
│   ├── server.js               # Main server file
│   └── package.json
│
└── README.md                   # This file
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Gmail account (for email notifications)

### **Frontend Setup**

1. **Navigate to client directory**

   ```bash
   cd clickncode-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Backend Setup**

1. **Navigate to server directory**

   ```bash
   cd clickncode-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your credentials:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   SMTP_USER=your_gmail_address
   SMTP_PASS=your_gmail_app_password
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Server running on**
   ```
   http://localhost:5000
   ```

## 🔌 API Endpoints

### **Contact Form**

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### **Testimonials**

- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/featured` - Get featured testimonials
- `PUT /api/testimonials/:id` - Update testimonial status

### **Newsletter**

- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers
- `DELETE /api/newsletter/unsubscribe/:email` - Unsubscribe

### **Admin Routes**

- `GET /api/admin/approve-testimonial/:id` - Approve testimonial via email
- `GET /api/admin/reject-testimonial/:id` - Reject testimonial via email

## 🎯 Features Explained

### **1. Contact Form System**

- **Real-time validation** with helpful error messages
- **Email notifications** sent to admin immediately
- **Welcome emails** sent to clients automatically
- **Newsletter subscription** integrated seamlessly

### **2. Testimonial Moderation**

- **Admin approval system** for quality control
- **Email notifications** with direct approval/rejection links
- **Client notifications** when testimonials are approved/rejected
- **Status tracking** (pending, approved, rejected)

### **3. Newsletter Management**

- **Automatic subscription** from contact forms
- **Email preferences** management
- **Unsubscribe functionality** with resubscribe option
- **Statistics dashboard** for admin insights

### **4. Responsive Design**

- **Mobile-first approach** for optimal mobile experience
- **Breakpoint system** for all device sizes
- **Touch-friendly interactions** for mobile users
- **Performance optimized** for fast loading

## 🌐 Deployment

### **Frontend Deployment**

```bash
cd clickncode-client
npm run build
```

Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

### **Backend Deployment**

```bash
cd clickncode-server
npm run build
```

Deploy to your preferred hosting service (Railway, Render, Heroku, etc.)

### **Environment Variables**

Update production environment variables:

```env
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
BACKEND_URL=https://api.yourdomain.com
MONGODB_URI=your_production_mongodb_uri
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: [by.benseghier.yasser@gmail.com]
- **Website**: [""]
- **LinkedIn**: [https://www.linkedin.com/in/yasser-benseghier/]

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **Vite** for the fast build tool
- **Express.js** for the robust backend framework

---

**Built with ❤️ by Clickncod Team**

> _"No tech knowledge needed, just bring your idea, we'll handle the rest"_
