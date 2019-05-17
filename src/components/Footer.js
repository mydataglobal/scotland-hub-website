import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>A MyData Global local hub</h2>
      <p>
        A registered non-profit association and a global network whose mission is to empower individuals by improving their right to self-determination regarding their personal data.
      </p>
      <ul className="actions">
        <li>
          <a href="https://mydata.org" className="button">
            Learn More
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:scotland@mydata.org">scotland@mydata.org</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a target="_blank"  href="https://twitter.com/MyDataScotland" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://mydata.org/slack/" className="icon fa-slack alt">
            <span className="label">Slack</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/mydatascotland" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:scotland@mydata.org" className="icon fa-envelope alt">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Development: <a target="_blank" href="https://wip-abramson.dev">Will Abramson</a> Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
