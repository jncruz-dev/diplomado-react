import OpenLink from "../components/Core/OpenLink"
import Body from "../components/Home/Body"
import Footer from "../components/Home/Footer"

import viteLogo from "../assets/vite.svg"
import reactLogo from "../assets/react.svg"
import gitHubLogo from "../assets/github.svg"
import { useSelector } from "react-redux"

const Home = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <span>{count}</span>
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