import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import logo from '../assets/images/mydata/mydata-wheel-logo.png'
import SubscribeToMailingList from '../components/SubscribeToMailingList'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="MyData Scotland" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Our Mission</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={logo} alt="" />
              </span>
            </div>
          </section>
          <section id="about" className="main special">
            <header className="major">
              <h2>Our Team</h2>
              <h3>We are a diverse group of individuals who are deeply concerned about the current direction we taking with data extraction. We believe MyData offers a better, more human solution.</h3>
            </header>
            <ul className="actions">
              <li><Link to="/about" className="button">Learn More</Link></li>
            </ul>
          </section>
          <section id="first" className="main special">
            <header className="major">
              <h2>Our Focus</h2>
            </header>
            <ul className="features focus-points">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Engagement</h3>
                <p>
                  Control over data affects us all. We want our community to reflect that by engaging with all demographics within Scotland.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy" />
                <h3>Education</h3>
                <p>
                  We cannot expect people to change without them understanding the problem. We aim to focus on education of the current state of data and the potential solutions.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Empowerment</h3>
                <p>
                  We want to be a community that takes action through projects and collaborations to show that the MyData vision is possible.
                </p>
              </li>
            </ul>
            {/*<footer className="major">*/}
              {/*<ul className="actions">*/}
                {/*<li>*/}
                  {/*<Link to="/generic" className="button">*/}
                    {/*Learn More*/}
                  {/*</Link>*/}
                {/*</li>*/}
              {/*</ul>*/}
            {/*</footer>*/}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Subscribe</h2>
              <p>
                Keep up to date with the latest news and events from MyData Scotland
              </p>
              <SubscribeToMailingList/>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
