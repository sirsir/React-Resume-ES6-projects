import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate, 'MMM, YYYY').format('MMM, YYYY');
  		const enddate = moment(item.endDate, 'MMM, YYYY').format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
            <span className='startdate'> {startdate} - {enddate} </span>
  				</div>
        )
  	});
    // <p>Studied: {startdate} - {enddate}</p>

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;

