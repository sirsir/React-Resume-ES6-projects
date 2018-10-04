import React from 'react';
import moment from 'moment';

const Project = props => {
    // window.x = props
    if (! props.projectData) {
      return null;
    }
    // const props.projectData

    const fnProjectFromObj = (item,idx)=>{
      return (
          <div key={'project'+idx} >
            <h5>{item.name} </h5>
            <h6>{item.description}</h6>
            <ul>
              <li>End-user: {item.enduser}</li>
              <li>Customer: {item.customer}</li>
              <li>Skills&Tools:
                <div className='tags'>
                  <ul>
                    {item.skill_tool.map(
                      (s,idx2)=>{return (<li key={'project'+idx+'-'+idx2}>
                        <a href='#' onClick={(e)=>{e.preventDefault();}}>
                          {s}
                        </a>
                        </li>)}
                    )}
                  </ul>
                </div>
              </li>
              <div className="screenshots">
              {item.images.map(
                (img,idx3)=>{
                  const style = {
                    'maxWidth': 100/item.images.length+'%',
                  };

                  return (
                    <a key={idx3} href={'img/projects/'+img} target='_blank'>
                      <img src={'img/projects/'+img} style={style}  />
                    </a>
                  )
                }
              )}
              </div>

            </ul>
  				</div>
        )
    }

    // <img src={'img/projects/'+img} width={100/item.images.length+'%'}  />

    const getProjectsByJob = []

    // const getProject = Object.keys(props.projectData.projects).map(function(element, key, _array) {

    const getProject = props.projectData.projects.map(function(element, key, _array) {
      return (
        <div key={key}>
        <h3>{element.name}</h3>
        <div>
        {element.projects.map(
        (p,idx) => fnProjectFromObj(p,idx)
        )}
        </div>
        </div>
      )
    })

  	return (
  	  <section className="project">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-suitcase"></i> Project</h2>
        {getProject}
      </section>
  	)
};

export default Project;
