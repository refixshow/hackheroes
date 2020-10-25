import React from "react";
import Icon from "../icon/Icon";

const IconWithParagraph = ({ divClass, icon, iconStyle, className, content, value }) => {
  return (
    <div className={divClass ? divClass : null}>
      <Icon src={icon} className={iconStyle} />
      <p className={className}>
        {content}
        {value ? value : null}
      </p>
    </div>
  );
};

export default IconWithParagraph;
