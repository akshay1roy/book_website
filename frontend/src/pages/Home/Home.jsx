import Banner from "./Banner"
import News from "./News"
import { Recommened } from "./Recommened"
import Topsellers from "./Topsellers"

function Home() {
  return (
    <div className="md:px-16">
    <Banner/>
    <Topsellers/>
    <Recommened/>
    <News/>
    </div>
  )
}

export default Home
