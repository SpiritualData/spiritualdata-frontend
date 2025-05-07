# SpiritualData Frontend

A modern, responsive React application powered by Vite and TypeScript, built for delivering personalized spiritual insights through an elegant UI and AI-driven chatbot.

## 🚀 Key Features

- 🔐 Clerk Authentication
- 💳 Payment Integration (PayPal & Stripe)
- 📧 Email Support via EmailJS
- 📊 Hotjar Analytics
- 🎨 Material-UI based design
- 🔄 Routing with React Router
- ✍️ Typewriter Text Animations
- 📱 Fully Responsive
- 🔍 Strong Type Safety with TypeScript

## 🛠️ Tech Stack

- React 19
- Vite 6
- TypeScript
- Material-UI 7
- React Router DOM 7
- Clerk Authentication
- PayPal & Stripe
- EmailJS
- Hotjar
- Axios

## 📁 Project Structure

```
src/
├── assets/              # Static assets
├── components/
│   ├── Auth/            # Auth-related components
│   ├── componentsExtended/
│   ├── helpers/
│   ├── hooks/
│   ├── pages/           # Page views
│   └── utils/
├── Style/               # Custom styling
├── App.tsx              # Main app component
└── main.tsx             # App entry point
```

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SpiritualData/spiritualdata-frontend.git
cd spiritualdata-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Update the `.env` file with:

- `VITE_CLERK_PUBLISHABLE_KEY`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_STRIPE_PUBLIC_KEY`
- `VITE_PAYPAL_CLIENT_ID`
- `VITE_HOTJAR_ID`

## 💻 Running the Application

### Development

```bash
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🌐 Deployment

The application is deployed via Netlify.  
Test it here: [https://qa.spiritualdata.org/](https://qa.spiritualdata.org/)

## 🧘 Introduction

SpiritualData is an interactive platform offering AI-powered spiritual guidance and personalized insights. With a sleek interface and deep conversational design, it helps users explore spiritual growth supported by intelligent recommendations and analytics.

## 🤝 Contributing

We welcome all contributors!

1. Fork the repo
2. Create a new branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Submit a Pull Request

For major changes, please open an issue to discuss.

## 🛟 Support

If you need help or want to report a bug, open an issue on GitHub or email us at [support@spiritualdata.org](mailto:support@spiritualdata.org)

## 🪪 License

MIT License – you are free to use and contribute under the terms.

## 🙏 Acknowledgments

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Material-UI](https://mui.com)
- [Clerk](https://clerk.dev)
- [Stripe](https://stripe.com)
- [PayPal](https://paypal.com)
- [EmailJS](https://emailjs.com)
