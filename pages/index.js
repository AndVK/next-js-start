import Head from "next/head"
import MainContainer from "../components/MainContainer"

const index = () => {
  return (
      <MainContainer keywords={'main page'}>
        <div className="wrapper">
          <h1>Главная страница</h1>
        </div>
      </MainContainer>
  )
}

export default index
