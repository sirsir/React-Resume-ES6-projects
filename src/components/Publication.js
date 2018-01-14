import React from 'react';
import moment from 'moment';

const Publication = props => {
  // console.log(props)
    const getPublication = props.publicationData.map(function(item, index) {
  		// const date = moment(item.date).format('MMM, YYYY');

      // {
      //   "name": "Discrete-time Feedback Error Learning Control",
      //   "publisher": "",
      //   "releaseDate": "2007",
      //   "website": "http://koha.library.tu.ac.th/cgi-bin/koha/opac-detail.pl?biblionumber=492156&query_desc=(su%2Ccomplete-subfield%3A%7BAdaptive%20control%20systems.%7D)",
      //   "summary": ["Feedback control systems | Discrete-time systems | Adaptive control systems"]
      // }



  		return (
          <div className='publication' key={index}>
          <span>{item.author}. </span>
          <span className='bold'>{item.name} </span>
          {
            item.website ?
            <a href={item.website}>
             <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
            : null
          }
           <span>
           {item.publisher ? ', '+item.publisher : null}
           {item.releaseDate ? ', '+item.releaseDate : null}
           </span>
           <div className='tags'>
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

  				</div>
          )
  	});

  	return (
  	  <section className="publication">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-book"></i> Publication</h2>
        {getPublication}
      </section>
  	)
};

export default Publication;
