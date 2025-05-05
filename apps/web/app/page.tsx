import { PortfolioContainer } from '@/app/components/portfolio-container'
import { Intro } from './components/intro'
import { Projects } from './components/projects'

const Home = () => {
  return (
    <PortfolioContainer>
      <Intro />
      <Projects />
    </PortfolioContainer>
  )
}

export default Home
