import React from "react";
import PropTypes from "prop-types";
import mergeClassNames from "classnames";
import BulmaCSS from "bulma/css/bulma.css";
import Styles from "../styles.css";
import Section from "./Section";
import { getFixedUrl } from "../utils";
import { PureTagList } from "./TagsList";

export default class BasicTextBox extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({})
  };

  render() {
    const {
      authority,
      authorityWebSite,
      authorityMeta,
      rightSide,
      descriptionTags,
      title,
      lastLine,
      description,
      icon,
      content,
      xtraClassName
    } = this.props;
    return (
      <Section
        xtraClassName={xtraClassName}
        title="Test"
        content={description}
        icon={icon}
        hasNoHeader={true}
      >
        <div>
          {content.map((paragraph, i) => {
            return <div>{paragraph}</div>;
          })}
          {lastLine ? (
              <div><br /><i>{lastLine}</i></div>
          ) : null}
        </div>
      </Section>
    );
  }
}
