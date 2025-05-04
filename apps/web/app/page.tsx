import { Intro } from './components/intro'
import { Projects } from './components/projects'
import {PortfolioContainer} from "@/app/components/portfolio-container";

const Home = () => {
  return (
    <PortfolioContainer>
      <Intro />
      <Projects />
    </PortfolioContainer>
  )
}

export default Home
