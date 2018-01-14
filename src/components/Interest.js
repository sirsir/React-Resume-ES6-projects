import React from 'react';
// import moment from 'moment';

const Interest = props => {
  const getInterest = props.interestData.map(function(item, index) {
		// const date = moment(item.date).format('MMM, YYYY');


    // "organization": "Thammasat U.",
    // "position": "Committee",
    // "website": "",
    // "startDate": "2010",
    // "endDate": "2012",
    // "summary": "",
    // "highlights"

		return (
        <div key={index}>
          <h3>{item.name} :  </h3>
          <div className='tags'>
            <ul>
            {
              item.keywords ?
              item.keywords.map((hl,idx)=>(
                <li key={idx}>
                  {hl}
                </li>
              ))
              :null

            }
            </ul>
          </div>
				</div>
        )
	});

	return (
	  <section className="interest">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-soccer-ball-o"></i> Interest</h2>
      {getInterest}
    </section>
	)
};

export default Interest;
