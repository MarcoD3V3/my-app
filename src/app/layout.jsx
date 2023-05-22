import './globals.css'
import { Inter } from 'next/font/google'
import {Footer} from '../components/Footer/index'
import {NavBar} from '../components/NavBar/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Page',
  description: 'Esta es una pagina personal que la utilizo para hacer pruevas de mis habilidades de desarrollador web y hacer ver mi progreso.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar/>
          <div className='main__children__body'>{children} </div> 
        <Footer/>
      </body>
    </html>
  )
}
