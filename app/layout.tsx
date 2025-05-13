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
          <div className="bg-gradient-to-bl from-teal-200 to-teal-500">            
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
export default MainLayout;