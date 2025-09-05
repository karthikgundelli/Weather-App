# 🌦️ Weather App

A simple and responsive **Weather App** built with **React.js** that allows users to search for the current weather of any city worldwide. The app fetches real-time weather data using an external API and displays details such as temperature, weather condition, humidity, and wind speed.

---

## 🚀 Features

* 🌍 Search weather by city name
* 🌡️ Displays temperature, humidity, wind speed, and condition
* 🎨 Responsive UI for all screen sizes
* ⚡ Real-time data using weather API
* 🌑 Clean and minimal design

---

## 🛠️ Tech Stack

* **Frontend:** React.js, CSS
* **API:** OpenWeatherMap (or any weather API you are using)
* **Deployment:** Vercel

---

## 📂 Project Setup

Follow the steps below to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Get API Key

* Go to [OpenWeatherMap](https://openweathermap.org/api)
* Sign up and generate a free API key
* Create a `.env` file in the root directory and add:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Run the project locally

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## 📖 Usage

1. Enter a **city name** in the search bar.
2. Press **Enter/Search button**.
3. View the **current weather details** instantly.

---

## 🌐 Deployment on Vercel

Follow these steps to deploy your Weather App on **Vercel**:

### 1️⃣ Install Vercel CLI (if not already installed)

```bash
npm install -g vercel
```

### 2️⃣ Build the project

```bash
npm run build
```

### 3️⃣ Deploy with Vercel

```bash
vercel
```

* Sign in with your Vercel account.
* Link or create a new project.
* Vercel will auto-detect React and configure settings.
* Provide your **API key** in Vercel Dashboard → Project Settings → Environment Variables.

### 4️⃣ Access your app

After deployment, Vercel will give you a live URL:

```
https://weather-app-sigma-ebon-36.vercel.app/
```


## 📜 License

This project is open-source and available under the **MIT License**.

---

✨ **Enjoy checking the weather anytime, anywhere!** 🌍☀️🌧️

---

