import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import BulmaCSS from 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from '../styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    xtraClassName: PropTypes.string,
    icon: PropTypes.shape(),
    content: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    children: PropTypes.shape({})
  }

  render() {
    const { icon, xtraClassName } = this.props;
    return (
      <div className={mergeClassNames(BulmaCSS.container, Styles.sectionContainer, xtraClassName)}>
        <div className={mergeClassNames(BulmaCSS.columns)}>
          <div className={mergeClassNames(BulmaCSS['is-full'], BulmaCSS.column)}>
            <h4 className={mergeClassNames(BulmaCSS.title, Styles.sectionTitle, BulmaCSS['is-size-4'], Styles.avoidBreakingOnPrint)}>
              <span className={Styles.sectionIcon}>
                <FontAwesomeIcon icon={['fas', icon]} />
              </span>
              {this.props.title}
            </h4>
            <hr className={Styles.diver} />
            {this.props.content &&
            <div className={mergeClassNames(Styles.sectionContent)}>
              {
                typeof this.props.content === 'string'
                  ? <p>{this.props.content}</p> : this.props.content
              }
            </div>
            }
            {this.props.children &&
              <div className={mergeClassNames(Styles.sectionContent, BulmaCSS.container, BulmaCSS['is-small'], 'bakbakbak')}>
                {this.props.children}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
