import React from 'react'
import Main from '../components/Main/Main'

const Home = ({searchValue, setSearchValue}) => {
  return <Main searchValue={searchValue} setSearchValue={setSearchValue}/>
}

export default Home