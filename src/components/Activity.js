import React from 'react';
import moment from 'moment';

const Activity = props => {
    const getActivity = props.activityData.map(function(item, index) {
  		const startdate = moment(item.startDate, 'MMM, YYYY').format('MMM, YYYY');
  		const enddate = moment(item.endDate, 'MMM, YYYY').format('MMM, YYYY');

      // "organization": "Thammasat U.",
      // "position": "Committee",
      // "website": "",
      // "startDate": "2010",
      // "endDate": "2012",
      // "summary": "",
      // "highlights"

  		return (
          <div key={index}>
            <h3>{item.organization} - {item.position}</h3>
  				  <h4>{item.website}</h4>
  				  <span>Period: {startdate} - {enddate}</span>
            <span>{item.summary}</span>
            <ul>
            {
              item.highlights.map((hl,idx)=>(
                <li key={idx}>
                  {hl}
                </li>
              ))



            }
            </ul>
  				</div>
          )
  	});

  	return (
  	  <section className="activity">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-group"></i> Activity</h2>
        {getActivity}
      </section>
  	)
};

export default Activity;
