import React from 'react';

class Navbar extends React.Component {
    render() {
      return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Lateral Health Care</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Report</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Consult with doctor</a></li>
                    <li><a className="dropdown-item" href="#">Get Medicine</a></li>
                    <li><a className="dropdown-item" href="#">Book your test</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">About Us</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Username" aria-label="Search" />
                <input className="form-control me-2" type="search" placeholder="Password" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Login</button>
              </form>
            </div>
          </div>
        </nav>
        <div className='login-form'>

          <table align="center" cellPadding={10} >
            <h2 align='center'>Sign up</h2>
        {/*--- First Name --------------------------------------------------------*/}
        <tbody><tr>
            <td>FIRST NAME</td>
            <td><input type="text" name="First_Name" maxLength={30} />
              (max 30 characters a-z and A-Z)
            </td>
          </tr>
          {/*--- Last Name --------------------------------------------------------*/}
          <tr>
            <td>LAST NAME</td>
            <td><input type="text" name="Last_Name" maxLength={30} />
              (max 30 characters a-z and A-Z)
            </td>
          </tr>
          {/*--- Date Of Birth ------------------------------------------------------*/}
          <tr>
            <td>DATE OF BIRTH</td>
            <td>
              <select name="Birthday_day" id="Birthday_Day">
                <option value={-1}>Day:</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={26}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
              </select>
              <select id="Birthday_Month" name="Birthday_Month">
                <option value={-1}>Month:</option>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">Jun</option>
                <option value="July">Jul</option>
                <option value="August">Aug</option>
                <option value="September">Sep</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
              </select>
              <select name="Birthday_Year" id="Birthday_Year">
                <option value={-1}>Year:</option>
                <option value={2012}>2012</option>
                <option value={2011}>2011</option>
                <option value={2010}>2010</option>
                <option value={2009}>2009</option>
                <option value={2008}>2008</option>
                <option value={2007}>2007</option>
                <option value={2006}>2006</option>
                <option value={2005}>2005</option>
                <option value={2004}>2004</option>
                <option value={2003}>2003</option>
                <option value={2002}>2002</option>
                <option value={2001}>2001</option>
                <option value={2000}>2000</option>
                <option value={1999}>1999</option>
                <option value={1998}>1998</option>
                <option value={1997}>1997</option>
                <option value={1996}>1996</option>
                <option value={1995}>1995</option>
                <option value={1994}>1994</option>
                <option value={1993}>1993</option>
                <option value={1992}>1992</option>
                <option value={1991}>1991</option>
                <option value={1990}>1990</option>
                <option value={1989}>1989</option>
                <option value={1988}>1988</option>
                <option value={1987}>1987</option>
                <option value={1986}>1986</option>
                <option value={1985}>1985</option>
                <option value={1984}>1984</option>
                <option value={1983}>1983</option>
                <option value={1982}>1982</option>
                <option value={1981}>1981</option>
                <option value={1980}>1980</option>
              </select>
            </td>
          </tr>
          {/*--- Email Id --------------------------------------------------------*/}
          <tr>
            <td>EMAIL ID</td>
            <td><input type="text" name="Email_Id" maxLength={100} /></td>
          </tr>
          {/* PAssword} */}
          <tr>
            <td>Password</td>
            <td><input type="text" name="Password" maxLength={20} minLength={6}  /></td>
          </tr>
          {/*--- Mobile Number --------------------------------------------------------*/}
          <tr>
            <td>MOBILE NUMBER</td>
            <td>
              <input type="text" name="Mobile_Number" maxLength={10} />
              (10 digit number)
            </td>
          </tr>
          {/*--- Gender ---------------------------------------------------------*/}
          <tr>
            <td>GENDER</td>
            <td>
              Male <input type="radio" name="Gender" defaultValue="Male" />
              Female <input type="radio" name="Gender" defaultValue="Female" />
              Transgender <input type="radio" name="Gender" defaultValue="Transgender" />
            </td>
          </tr>
          {/*--- Address --------------------------------------------------------*/}
          <tr>
            <td>ADDRESS <br /><br /><br /></td>
            <td><textarea name="Address" rows={4} cols={30} defaultValue={""} /></td>
          </tr>
          {/*--- City --------------------------------------------------------*/}
          <tr>
            <td>CITY</td>
            <td><input type="text" name="City" maxLength={30} />
              (max 30 characters a-z and A-Z)
            </td>
          </tr>
          {/*--- Pin Code --------------------------------------------------------*/}
          <tr>
            <td>PIN CODE</td>
            <td><input type="text" name="Pin_Code" maxLength={6} />
              (6 digit number)
            </td>
          </tr>
          {/*--- State --------------------------------------------------------*/}
          <tr>
            <td>STATE</td>
            <td><input type="text" name="State" maxLength={30} />
              (max 30 characters a-z and A-Z)
            </td>
          </tr>
          {/*--- Country --------------------------------------------------------*/}
          <tr>
            <td>COUNTRY</td>
            <td><input type="text" name="Country" defaultValue="India" readOnly="readonly" /></td>
          </tr>
          
          
          {/*--- Course --------------------------------------------------------*/}
          <tr>
          <td>Type  </td>
          <td>
          <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select type
                  </a>
                  <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="#">Patient</a></li>
                    <li><a className="dropdown-item" href="#">Doctor</a></li>
                    <li><a className="dropdown-item" href="#">Medical Store</a></li>
                    <li><a className="dropdown-item" href="#">Lab</a></li>
                  </ul>
                </li>
              </td>
          </tr>
          {/*--- Submit and Reset -----------------------------------------------*/}
          <tr>
            <td colSpan={2} align="center">
              <input type="submit" defaultValue="Submit" />
              <input type="reset" defaultValue="Reset" />
            </td>
          </tr>
        </tbody></table>
        </div>
        </React.Fragment>
      );
    }
  }
  
export default Navbar;