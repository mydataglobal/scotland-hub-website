import React from 'react'

import Layout from '../components/layout'
import ProfileImage from '../components/ProfileImage';
import will from '../assets/images/steeringroup/will.jpg'
import david from '../assets/images/steeringroup/david.jpg'
import thomas from '../assets/images/steeringroup/thomas.jpg'
import danielle from '../assets/images/steeringroup/danielle.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
          <section className="main">
            <header className="major">
              <h2>MyData Scotland Steering Group</h2>
            </header>
            <ul className="features profile-pictures">
              <li>
                <ProfileImage firstName="Iain" lastName="Henderson" imgSrc={will}/>
              </li>
              <li>
                <ProfileImage firstName="Will" lastName="Abramson" imgSrc={will}/>
              </li>
              <li>
                <ProfileImage firstName="Danielle" lastName="Baillie" imgSrc={danielle}/>
              </li>
              <li>
                <ProfileImage firstName="Thomas" lastName="Presslie" imgSrc={thomas}/>
              </li>
              <li>
                <ProfileImage firstName="David" lastName="Laughlin" imgSrc={david}/>
              </li>

            </ul>

          </section>
          {/*<section id="about" className="main">*/}
            {/*<header className="major">*/}
              {/*<h2>What We Do</h2>*/}
              {/*<p>Our scope includes: influencing Ilkley’s Neighbourhood Plan; helping residents and businesses reduce the climate impact of their homes/ workplaces, travel and purchasing choices; improving food waste regimes; promoting renewable energy projects; co-ordinating with initiatives by other groups on water, wildlife, biodiversity, heritage and social inclusion.</p>*/}
            {/*</header>*/}
          {/*</section>*/}
        </div>
      </Layout>
    )
  }
}

export default Generic
