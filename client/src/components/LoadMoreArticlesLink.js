import React from "react";
import { Trans } from "@lingui/macro";

const LoadMoreArticlesLink = props => (
  <div className="load-more">
    <button onClick={(e) => e.preventDefault()} {...props}><Trans>LOAD MORE ARTICLES</Trans></button>
  </div>
);

export default LoadMoreArticlesLink;
