import { Header } from "./header"
import "./globals.css";
import { Footer } from "./footer";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Header/>
          <div className="bg-gradient-to-b from-cyan-500 to-blue-400">            
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
export default MainLayout;