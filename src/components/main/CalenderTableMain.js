import React, { useState } from 'react'

function CalenderTableMain() {
  return (
    <div className='CalenderTable'>
      <div className='arrow-down'>
        <div className='arrow'></div>
        <div className='arrow-line'></div>
      </div>
      <table>
        <tr>
          <th>
            17 Sept<h6>Saturday</h6>
          </th>
          <th>
            18 Sept<h6>Saturday</h6>
          </th>
          <th>
            19 Sept<h6>Saturday</h6>
          </th>
          <th>
            20 Sept<h6>Saturday</h6>
          </th>
          <th>
            21 Sept<h6>Saturday</h6>
          </th>
          <th>
            22 Sept<h6>Saturday</h6>
          </th>
          <th>
            23 Sept<h6>Saturday</h6>
          </th>
          <th>
            24 Sept<h6>Saturday</h6>
          </th>
          <th>
            25 Sept<h6>Saturday</h6>
          </th>
          <th>
            26 Sept<h6>Saturday</h6>
          </th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td className='end-tr'></td>
          <td
            className='end-tr'
            style={{
              borderRight: 'none',
              borderBottom: 'none'
            }}
          ></td>
        </tr>
      </table>
      <div className='box1'>
        <span className='MenuSpan'>
          <img src={require('./../../public/images/menu-vertical.png')} />
        </span>
        <span className='ImageSpan'>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span className='ImageSpan'>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span className='ImageSpan'>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <div>
          <h4>Create main project for the website</h4>
          <p>9/18/22-9/22/22</p>
        </div>
      </div>
      <div className='box2'>
        <span className='MenuSpan'>
          <img src={require('./../../public/images/menu-vertical.png')} />
        </span>

        <span>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <span>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <div>
          <h4>Design workshop</h4>
          <p>9/23/22-9/26/22</p>
        </div>
      </div>
      <div className='box3'>
        {' '}
        <span className='MenuSpan'>
          <img src={require('./../../public/images/menu-vertical.png')} />
        </span>
        <span>
          <img
            className='ImageBoxTable'
            alt='Trevor Henderson'
            src={require('./../../public/images/3.jpg')}
          />
        </span>
        <div>
          <h4>Create a logo</h4>
          <p>9/19/22-9/23/22</p>
        </div>
      </div>

      <div className='box4'>
        <span style={{ marginRight: '10px', marginTop: '8px' }}>
          {' '}
          <img src={require('./../../public/images/plus25.png')} />
        </span>
        <span className='text-box4'> Add new task</span>
      </div>
    </div>
  )
}

export default CalenderTableMain
