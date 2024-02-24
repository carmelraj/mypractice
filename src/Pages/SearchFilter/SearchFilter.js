import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './SearchFilter.css';
import axios from 'axios';
const SearchFilter = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  useEffect(()=>{
    loadData()
  },[])

  const loadData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        setData(response.data)
    })
    .catch((error)=>console.error('error',error));
  }

  return(<div className="SearchFilter" data-testid="SearchFilter">

      <div className='continer'>
        <input type='text' placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)} />
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
            { data.filter(
                  data=>data.name.toLowerCase().includes(query.toLowerCase())
              ).map((data, index)=>{
              return <tr key={index}>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.username}</td>
                          <td>{data.email}</td>
                      </tr>
            })            
          }
        </table>
      </div>
  </div>);
};

SearchFilter.propTypes = {};

SearchFilter.defaultProps = {};

export default SearchFilter;
