import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BasketProvider } from './context/BasketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {
      Provider(sağlayıcı) bütün uygulamayı saracak şekilde konumlandırılır.
      Bu sayede uygulamanın içerisindeki bütün bileşenler sağlayıcı
      tarafından value olarak tnımlanarak erişileblir.
    } */}
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);