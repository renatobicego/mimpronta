
import { Metadata } from "next"
import Carousel from "./Carousel"
import Values from "./Values"

export const metadata: Metadata = {
    title: "Sobre Mimpronta",
    description: "Mimpronta nace de un genuino deseo por ayudar y acompañar a personas y empresas que quieran emprender el camino de combinar sus habilidades con las necesidades del mundo.",
  }
const AboutUsPage = () => {
    
    return (
        <main className="main pt-0">
            <Carousel /> 
            <Values />
        </main>
    )
} 

export default AboutUsPage