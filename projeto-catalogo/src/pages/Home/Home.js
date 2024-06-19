import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer'
import { Highlight } from '../../components/Highlight/Highlights';

export function Home() {
    const product = ["Placa mãe", "Processador", "SDD"]
    return (<>
        <NavBar />
        <Highlight product={product} />
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
        <Footer />
    </>
    )
}