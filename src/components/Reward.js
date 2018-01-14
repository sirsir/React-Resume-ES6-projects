import React from 'react';
import moment from 'moment';

const Reward = props => {
    const getReward = props.rewardData.map(function(item, index) {
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
            <h3>{item.title} - {item.awarder} <span>[{item.date}] </span></h3>
            <ul>
            {
              item.summary ?
              item.summary.map((hl,idx)=>(
                <li key={idx}>
                  {hl}
                </li>
              ))
              :null

            }
            </ul>
  				</div>
          )
  	});

  	return (
  	  <section className="reward">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-trophy"></i> Reward</h2>
        {getReward}
      </section>
  	)
};

export default Reward;
