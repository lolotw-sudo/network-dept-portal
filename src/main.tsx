import React from 'react'
import ReactDOM from 'react-dom/client' // 👈 檢查這行有沒有寫對
import App from './App'
import './index.css'

// 確保這裡是這樣寫的
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)