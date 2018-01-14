import React from 'react';

const Skills = props => {
    // const getSkills = props.skillsData[0].keywords.map(function(item, index) {
    //   return (<li key={index}><span className="label label-success">{item}</span></li>)
    // });

    // console.log(1)
    // console.log(props.skillsData.reduce((objout,skill)=>objout.concat(skill.keywords),[]))
    // let a = props.skillsData.reduce((objout,skill)=>objout.concat(skill.keywords),[])
    // a = a.sort((a,b)=>a.localeCompare(b)).map((key)=>{return {
    //   key: key,
    //   score: 1
    // }})
    // console.log(JSON.stringify(a,null, '\t'))

    // const getSkills = props.skillsData.reduce((objout,skill)=>objout.concat(skill.keywords),[])
    // .map(function(item, index) {
    //   return (<li key={index}><span className="label label-success">{item}</span></li>)
    // });
    // const getSkills = props.skillsData.reduce((objout,skill)=>objout.concat(skill.keywords),[])
    // .map(function(item, index) {
    //   return (<li key={index}><span className="label label-success">{item}</span></li>)
    // });

    let tags = ''

    if (props.skillsData && props.skillsData.length !== 0){
      let max = props.skillsData.reduce((num, tag)=>{return Math.max(tag.score, num)}, 0)
      let min = props.skillsData.reduce((num, tag)=>{return Math.min(tag.score, num)}, max)

      // let min = props.skillsData.reduce((num, tag)=>{console.log(tag.count);console.log(Math.min(tag.count, num));return Math.min(tag.count, num)},0)
      // let max = props.skillsData.reduce((num,tag)=>{return Math.max(tag.count, num)})

      let minSize = 0.8
      let maxSize = 1.5
      tags = (
        <div className='tags'>
            <ul className="tags-list">
              {
                  props.skillsData.map((tag,idx) => {
                    let tagSize = minSize + (tag.score-min) / (max-min) *(maxSize-minSize)
                    // console.log(tagSize)
                    return (
                      <li key={idx} style={{
                        fontSize: tagSize.toString()+'em'
                      }} >
                        <a href='#' onClick={()=>{props._searchTag(tag.key)}}>{tag.key} <span></span></a>
                      </li>
                    )
                  })
              }
            </ul>
          </div>
        )
    }

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list list-inline">{tags}</ul>
      </section>
  	)
};

export default Skills;
