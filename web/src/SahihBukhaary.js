import React from 'react';
import './App.css'

function SahihBukhaary() {
    return (
        <div className='bukhaary'>
            <div className='bukhaary-content'>
                {/* Add links to downloadable audio and PDF files for Sahih Bukhaary */}
                <h2> Saheeh al Bukhaary</h2>

                <p>
                    This is one of the very prominent books that was written in the feild of Hadeeth.
                </p>
                <h3>Download Audio Files:</h3>
                <ul>
                    <li>
                        <a href="/path/to/audio1.mp3" download>Audio File 1</a>
                    </li>
                    <li>
                        <a href="/path/to/audio2.mp3" download>Audio File 2</a>
                    </li>
                    {/* Add more audio files as needed */}
                </ul>
            </div>
        </div>
       
    );
}

export default SahihBukhaary;
