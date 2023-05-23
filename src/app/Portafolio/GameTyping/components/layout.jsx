import { Footer } from '../../../../components/Footer'
import { NavBar } from '../../../../components/NavBar'

export default function GameTypingLayout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <div>hola</div>
      <Footer />
    </div>
  )
}