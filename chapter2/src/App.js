import React from 'react';
import './App.css';
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src="Screenshot from 2023-01-08 17-48-22.png" alt="Logo S5AMP"></img>
                    </div>
                    <li><a href="https://anshsarkar2.github.io/S5AMP.github.io/">Home</a></li>
                    <li><a href="#tutorials">Courses</a></li>
                    <li><a href="#jobs">About us</a></li>
                    <li><a href='#student'>Social Networking</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>

            <section className='section'>
                <div className='head'>
                   <u> Managing I/O Operations</u>
                </div>
            </section>
            <section className='section'>
                <section className='#sec1'>
                <div className='firsthalf'>
                    <div className='text-big'>
                        Introduction
                    </div>
                    <div className='text-small'>
                        There are three function in a C program.
                        <dl>
                            <dt>
                                <ul>
                                    <li>
                                        Taking input
                                    </li>
                                    <li>
                                        Processing the data
                                    </li>
                                    <li>
                                        Displaying Output
                                    </li>
                                </ul>
                            </dt>
                        </dl>
                    </div>
                </div>
                </section>
            </section>
           
            <footer className="footer">
                <p className="text-footer">
                    S5AMP <a href="#"><i class="fa fa-instagram"></i></a>
                </p>
            </footer>
        </div>
    )
}
  
export default App