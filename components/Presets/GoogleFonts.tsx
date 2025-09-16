// Import fonts from Google
import {
  Merriweather,
  Playfair_Display,
  Crimson_Pro,
  Libre_Baskerville,
  Lora,
  Roboto,
  Open_Sans,
  Lato,
  Poppins,
  Inter,
  Roboto_Slab,
  Arvo,
  Zilla_Slab,
  Fira_Code,
  JetBrains_Mono,
  Source_Code_Pro,
  Inconsolata,
  Dancing_Script,
  Pacifico,
  Lobster,
  Caveat,
  Bokor
} from "next/font/google";

// ----- Serif Fonts -----
export const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
export const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: "400" });
export const crimsonPro = Crimson_Pro({ subsets: ["latin"], weight: ["400", "700"] });
export const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
export const lora = Lora({ subsets: ["latin"], weight: "400" });

// ----- Sans-Serif Fonts -----
export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });
export const lato = Lato({ subsets: ["latin"], weight: "400" });
export const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export const inter = Inter({ subsets: ["latin"], weight: "400" });

// ----- Slab Serif Fonts -----
export const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
export const arvo = Arvo({ subsets: ["latin"], weight: "400" });
export const zillaSlab = Zilla_Slab({ subsets: ["latin"], weight: "400" });

// ----- Monospace Fonts -----
export const firaCode = Fira_Code({ subsets: ["latin"], weight: "400" });
export const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
export const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" });
export const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

// ----- Handwriting / Display Fonts -----
export const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
export const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
export const lobster = Lobster({ subsets: ["latin"], weight: "400" });
export const caveat = Caveat({ subsets: ["latin"], weight: "400" });
export const bokor = Bokor({ subsets: ["latin"], weight: "400" });