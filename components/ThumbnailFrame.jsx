import React from "react";

export function ThumbnailFrame({ layout = "a", copy, imageUrl, device }) {
  return (
    <div className={`hb-thumbnail layout-${layout} hb-surface`}>
      <div className="copy hb-thumbnail-copy">{copy}</div>
      {imageUrl ? <img className="subject" src={imageUrl} alt="" /> : null}
      {device ? <div className="device" aria-hidden="true">{device}</div> : null}
    </div>
  );
}

/*
Human Backstory thumbnail behavior:
- one short hook
- one symbolic device
- one red accent
- subject and text should not duplicate the same information
*/
