import React from 'react'

function StatisticsMain() {
  return (
    <div className='Statistics'>
      <div className='td1'>
        <span>
          <img src={require('./../../public/images/menu-vertical-25.png')} />
        </span>
        <div className='card'>
          <h1 style={{ margin: '10px 5px', fontSize: '40px', color: '#fff' }}>
            50
          </h1>

          <h3>Total Tasks</h3>

          <p>+2 this week</p>
        </div>
      </div>
      <div className='td2'>
        {' '}
        <span>
          <img src={require('./../../public/images/menu-vertical.png')} />
        </span>
        <div className='card'>
          <h1 style={{ margin: '10px 5px', fontSize: '40px', color: '#000' }}>
            12
          </h1>

          <h3>Completed Tasks</h3>

          <p>+1 this week</p>
        </div>
      </div>
      <div className='td3'>
        <div className='card'>
          <h1
            style={{
              fontSize: '35px',
              lineHeight: '55px'
            }}
          >
            Get <span>Premium+</span>
            <br />
            to mangage
            <br />
            more than
            <br />
            100 projects
          </h1>
        </div>
        <a href='#/' className='linkt3'>
          Learn More <i className='fas fa-arrow-right'></i>
        </a>
      </div>
      <div className='td4'>
        {/*<span>
          <img src={require('./../../public/images/loader0.jpg')} />
          </span> */}
        <div className='card'>
          <h2>
            of project <br />
            is Complated
          </h2>
        </div>
      </div>
      <div className='td5'>
        <span>
          <img src={require('./../../public/images/menu-vertical.png')} />
        </span>
        <div className='card'>
          <h1 style={{ margin: '10px 10px', fontSize: '40px', color: '#000' }}>
            3
          </h1>
          <h3>Overdue Tasks</h3>
          <p>+1 this week</p>
        </div>
      </div>
      <div className='td6'>
        <span>
          <img src={require('./../../public/images/menu-vertical.png')} />
        </span>
        <div className='card'>
          <h1 style={{ margin: '10px 10px', fontSize: '40px', color: '#000' }}>
            35
          </h1>
          <h3>To Do Tasks</h3>
          <p>+12 this week</p>
        </div>
      </div>
    </div>
  )
}

export default StatisticsMain
