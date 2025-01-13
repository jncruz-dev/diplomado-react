import OpenLink from "../components/Core/OpenLink"
import Body from "../components/Home/Body"
import Footer from "../components/Home/Footer"

import viteLogo from "../assets/vite.svg"
import reactLogo from "../assets/react.svg"
import gitHubLogo from "../assets/github.svg"

const Home = () => {
  return (
    <div>
      <div>
        <OpenLink
          redirectURL="https://vite.dev"
          logoImage={viteLogo} />
        <OpenLink
          redirectURL="https://react.dev"
          logoImage={reactLogo} />
        <OpenLink
          redirectURL="https://github.com/jncruz-dev/diplomado-react"
          logoImage={gitHubLogo} />
      </div>
      <Body />
      <Footer />
    </div>
  )
}

export default Home;