import gitHubLogo from "../../assets/github.svg"

const GitHub = () => {
  return (
    <div>
      <a href="https://github.com/jncruz-dev/diplomado-react" target="_blank">
        <img src={gitHubLogo} className="logo github" alt="GitHub logo" />
      </a>
    </div>
  )
}

export default GitHub;
