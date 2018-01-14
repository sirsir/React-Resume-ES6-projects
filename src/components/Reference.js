import React from 'react';

const Reference = props => {
    const getReference = props.referenceData.map(function(item, index) {

  		return (
          <div key={index}>
            <h3>{item.name}</h3><br />
            <ul>
            {
              item.details ?
              item.details.map((hl,idx)=>(
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
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user-circle-o"></i> Reference</h2>
        {getReference}
      </section>
  	)
};

export default Reference;
