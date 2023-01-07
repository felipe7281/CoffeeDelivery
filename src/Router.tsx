import { Routes, Route } from 'react-router-dom'


import { DefaultLayout } from './layouts/defaultLayout/index'

import { Home } from './pages/Home'
import { OrderConfirm } from './pages/OrderConfirm'
import { ShopCart } from './pages/ShopCart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderConfirm />} />
        <Route path="/cart" element={<ShopCart />} />
      </Route>
    </Routes>
  )
}