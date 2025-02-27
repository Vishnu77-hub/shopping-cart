# Shopping Cart Application

## Project Overview
This is a **React-based shopping cart** application that demonstrates the use of **React Hooks**, **useReducer**, and **Bootstrap** for styling. It allows users to add items to the cart, update quantities, and remove items.

## Getting Started

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn**

### Folder Structure
Shopping-Cart/ 
│-- src/ 
│ ├── components/ 
│ │ ├── Cart.jsx # Main shopping cart component 
│ │ ├── CartItem.jsx # Individual cart item component 
│ ├── reducers/ 
│ │ ├── CartReducer.js # Reducer to handle cart state updates 
│ ├── App.js # Main App component 
│ ├── index.js # Entry point 
│ ├── App.css # Styles for the application 
│ ├── index.css # Global styles 
│ ├── App.test.js # Test file 
│ ├── reportWebVitals.js # Performance measurement 
│ ├── setupTests.js # Test setup 
│-- public/ # Static assets 
│-- package.json # Project dependencies 
│-- README.md # Project documentation

---

##  Installation & Setup

### 1 **Clone the Repository**
```bash
git clone https://github.com/Vishnu77-hub/Form-website.git
cd Form-website
```
## 2️ Install Dependencies
```
npm install
```
## 3️ Start the Development Server
```
npm start
```
This will open the app at http://localhost:3000/.

Features
✅ Add products to the cart
✅ Increase/decrease quantity
✅ Remove items from the cart
✅ Calculate total price
✅ Responsive UI using Bootstrap

Technologies Used
React.js
React Hooks (useReducer)
Bootstrap
Jest & React Testing Library (for unit testing)