import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { myContext } from '../../App'
import Card from '../Card/Card'
import './search.css'



const Search = () => {
    const context = useContext(myContext)
    console.log(context.stateOne);
    console.log(context.state);
    const [search , setSearch] = useState([])

    function filterText(){
        setSearch(context.state.filter((ele)=>{
            if((ele.body.toLowerCase()).includes(context.stateOne.toLowerCase())){
                return ele
            }
        }))
    }
    useEffect(()=>{
        filterText()
    },[])
  return (
    <div className='search'>{search.map((ele)=>{
        return(
            <Card post={ele} />
        )
    })}
        <Link to='/'>
        <button> Home</button>
        </Link>
    </div>
  )
}

export default Search