import React from "react";
import { useHistory } from "react-router-dom";

import {
  BlogCardData,
  BlogCardDate,
  BlogCardDescription,
  BlogCardIcon,
  BlogCardIconBox,
  BlogCardIconNumber,
  BlogCardIcons,
  BlogCardPoster,
  BlogCardStyled,
  BlogCardTitle,
} from "./styles";

//icons
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as Comment } from "../../assets/icons/comments.svg";

const BlogCard = (
  {
    posterImg,
    title,
    description,
    date,
    view,
    comment
  }
  ) => {

    // routing
    const history = useHistory();
    const handleRoute = () => {
      history.push('/article/1')
    }

  return (
    <BlogCardStyled onClick={handleRoute}>
      <BlogCardPoster>
        <img src={posterImg}
             alt="Medium"/>
      </BlogCardPoster>
      <BlogCardData>
        <BlogCardTitle className="blog-card-title">
          {title}
        </BlogCardTitle>
        <BlogCardDescription>
          {description}
        </BlogCardDescription>
        <BlogCardDate>
          {date}
        </BlogCardDate>
        <BlogCardIcons>
          <BlogCardIconBox>

            <BlogCardIcon><Eye/></BlogCardIcon>
            <BlogCardIconNumber>
              {view}
            </BlogCardIconNumber>
          </BlogCardIconBox>
          <BlogCardIconBox>
            <BlogCardIcon>
              <Comment/>
            </BlogCardIcon>
            <BlogCardIconNumber>
              {comment}
            </BlogCardIconNumber>
          </BlogCardIconBox>

        </BlogCardIcons>

      </BlogCardData>


    </BlogCardStyled>
  );
};

export default BlogCard;