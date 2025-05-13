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
        <div className="min-h-screen">
          <Header/>
          <div className="bg-gradient-to-b to-teal-400 from-0% to-50% from-cyan-500">            
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
export default MainLayout;