import React from "react";

export default ({ title, description }) => <div>
  <h1 className="ui inverted header primary-header">
    {title}
  </h1>
  <p className="secondary-header lead">
    {description}
  </p>
</div>