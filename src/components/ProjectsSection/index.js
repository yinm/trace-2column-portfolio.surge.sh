import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import spotifyQuizLogo from '../../assets/images/projects/spotify-quiz.png'
import littleNomadLogo from '../../assets/images/projects/little-nomad.png'
import walkthroughViewGif from '../../assets/images/projects/wvwalkthroughview-optimize.gif'

class ProjectSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={littleNomadLogo}
            colour="#fff"
            title="Little Nomad"
            link="https://www.littlenomad.co/"
            timeperiod="2017 - ???"
            subtitle="A platform for socially aware travellers. Runs on
              React+Redux with a Ruby on Rails backend."
          />
          <ExperienceUnit
            logo={spotifyQuizLogo}
            colour="#20dc6b"
            title="Music Quiz for Spotify"
            link="https://quiz.praagya.com/"
            timeperiod="2017"
            subtitle="A fun quiz which tests your knowledge of music that
              you've saved. Built using React/Redux."
          />
          <ExperienceUnit
            logo={walkthroughViewGif}
            colour="#312f31"
            title="WalkthroughView"
            link="https://github.com/praagyajoshi/WVWalkthroughView"
            timeperiod="2016"
            subtitle="A drop in utility to help onboard a new user/feature.
              Written in Objective C."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectSection
