import React , {useEffect, useState} from 'react'


export default function SearchFilter() {
    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const[filterVal, setFilterVal] = useState('');
    useEffect(() =>{
      //creating a function
      const fetchData = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>{
            setData(json);
            setSearchApiData(json);
        })
      }

      //calling the function
      fetchData();

    },[]);

    //handling filtering
      const handleFilter = (e) =>{
        //filtering dr name & hsospital name
          if (e.target.value == '') {
            //when no search/filtering is performed : keep the data as it is
            setData(searchApiData);
          }else{
            //the data searched wil directly be converted to lowercase
       const filterResult =  searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.includes(e.target.value));

       if (filterResult.length>0) {
          setData(filterResult);
       }else{
          setData([{"name": "No data found! Improve search results!"}])
       }

      
          }
          setFilterVal(e.target.value);


      }
      const handleSort = (e) =>{
        //filtering dr name & hsospital name
          if (e.target.value == '') {
            //when no search/filtering is performed : keep the data as it is
            setData(searchApiData);
          }else{
            //the data searched wil directly be converted to lowercase
       const filterResult =  searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.includes(e.target.value));

       if (filterResult.length>0) {
          setData(filterResult);
       }else{
          setData([{"name": "No data found! Improve search results!"}])
       }

      
          }
          // setFilterVal(e.target.value);


      }
  return (
    <div className='home' >
  <h1>Doctor Filtering System</h1> 
   <div className="search-field" >
     <input type={'search'} placeholder='Search here' value={filterVal} onInput={(e) => handleFilter(e) } />
     <select onChange={handleSort} style={{width:"20vw", margin:"auto"}} className="form-select mt-3" aria-label="Default select example">
  <option selected value=''>Fiter based on Hospital name</option>
   {
        searchApiData.map(item =>{
          return(
            <option value={item.username}>{item.username}</option>
          )
        })
      }
  
</select>
   </div>
    <div className='container mt-4' >
    <table className='table' >
    <thead>
    <tr>
    <th scope="col">Dr's Name</th>
      <th scope="col">Hospital Name</th>
      <th scope="col">Dr's Email</th>
      <th scope="col">Dr's Phone Number</th>
      <th scope="col">Ratings</th>
      </tr>
      </thead>
      
      {
        data.map(item =>{
          return(
            <tr>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.id}</td>
             
            </tr>
          )
        })
      }
    </table>
    </div>
    </div>
    
  )
}
