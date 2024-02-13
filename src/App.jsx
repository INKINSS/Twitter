import { FloatButton } from 'antd';
import MenuMobile from './assets/components/menuMobile/MenuMobile'
import { FaFeatherPointed } from "react-icons/fa6";
import Header from './assets/layouts/header/Header'

import './App.css'

function App() {
  return (
    <main>
      <Header />
      <MenuMobile />
      <FloatButton icon= { <FaFeatherPointed style={{ width: '20px', height:'20px' }} /> } type='primary' style={{ right: '24px', bottom: '75px', width: '60px', height: '60px' }} />
    </main>
  )
}

export default App
