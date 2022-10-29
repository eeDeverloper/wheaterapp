import React from 'react'

const Form = (props) => {
  return (
    <div className="container p-4 mt-5">
        <h1>WELCOME TO THE WEATHER APP</h1>
        <p>To get information about your location, enter your city and country and press search.</p>
        <form onSubmit={props.getInfoUsers} className="form-group">
            <input type="text" name="cityName" className='form-control mt-2' placeholder="City" id="inputcityID" required/>
            <input type="text" name="countryName" className='form-control mt-3' placeholder="Country" id="inputcountryID" required/>
            <button className="btn btn-lg btn-primary p-2 mt-4" name='btnName' id='btnSearch'>SEARCH</button>
        </form>
    </div>
  )
}

export default Form;