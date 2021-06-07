import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  PinterestShareButton,
  PinterestIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import PropTypes from 'prop-types';

const SocialShare = ({
  title, url, tags, twitterHandle,
}) => (
  <React.Fragment>
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <InstapaperShareButton url={url}>
        <InstapaperIcon size={40} round />
      </InstapaperShareButton>

      <PinterestShareButton url={url}>
        <PinterestIcon size={40} round />
      </PinterestShareButton>

      <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={40} round />
      </RedditShareButton>
    </div>
  </React.Fragment>
);

SocialShare.defaultProps = {
  twitterHandle: 'corinatopor',
  tags: [],
};

SocialShare.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  twitterHandle: PropTypes.string,
};

export default SocialShare;
