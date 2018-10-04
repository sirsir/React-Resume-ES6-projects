import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Project from './Project';
import Activity from './Activity';
import Reward from './Reward';
import Publication from './Publication';
import Language from './Language';
import Interest from './Interest';
import Reference from './Reference';


const App = props => {
  const profileData = props.jsonObj.resume.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.resume.work;
  // const skillsData = props.jsonObj.resume.skills;
  const skillsData = props.jsonObj.resume.skillTags;
  const educationData = props.jsonObj.resume.education;
  const projectData = props.jsonObj.project
  const activityData = props.jsonObj.resume.activities;
  const rewardData = props.jsonObj.resume.rewards;
  const publicationData = props.jsonObj.resume.publications;
  const languageData = props.jsonObj.resume.languages;
  const interestData = props.jsonObj.resume.interests;
  const referenceData = props.jsonObj.resume.references;

  props.jsonObj.exclude = props.jsonObj.exclude? props.jsonObj.exclude:[];

                    // <Language languageData={languageData} />
                  // <Interest interestData={interestData} />
                                  // <Work workData={workData} />
                  // <Education educationData={educationData} />
                  // <Activity activityData={activityData} />
                                    // <Language languageData={languageData} />
                  // <Interest interestData={interestData} />
  return (
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner">
                  <Profile profileData={profileData} />
                </div>
              </aside>
              <main className="col-md-8">
                <div className="inner">
                  <About aboutData={aboutData} />

                  <Reward rewardData={rewardData} />
                  <Project projectData={projectData} />
                  <Publication publicationData={publicationData} />
                  
                  <Skills skillsData={skillsData} />
                  <Reference referenceData={referenceData} />
                </div>
              </main>
            </div>
          </div>
    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
