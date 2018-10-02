import React from 'react';
import moment from 'moment';

const Language = props => {
    const getLanguage = props.languageData.map(function(item, index) {

  		return (
          <div key={index}>
            <h3>{item.language}: </h3>
            <div className='tags'>
              <ul>
              {
                item.fluency ?
                item.fluency.map((hl,idx)=>(
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
  	  <section className="language">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-language"></i> Language</h2>
        {getLanguage}
      </section>
  	)
};

export default Language;
