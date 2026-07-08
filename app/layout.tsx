import { Header } from "./header"
import "./globals.css";
import Body from "./body"
import { Footer } from "./footer";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Toaster position="bottom-right" />
          <Header />
          <Body> {children} </Body>
          <Footer />
        </div>
      </body>
    </html>
  )
}
export default MainLayout;