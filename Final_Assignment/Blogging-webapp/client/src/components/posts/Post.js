import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   console.log(post);
   const postDate = getFormattedDate(post.date);
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
         <Card.Title className="text-center p-3 font-weight-bold"><h1>{post.title}</h1></Card.Title>
         <Card.Subtitle  className="text-center p-2 "><small className="font-weight-bold">Posted by : {post.author}</small></Card.Subtitle>
         <Card.Body className="postCover text-muted" ><span dangerouslySetInnerHTML={{
         __html:
             post.body
                 .substring(0, 800)
                 .trim(),}}></span><small  className="text-center p-2 text-dark font-weight-bold" >Read more...</small></Card.Body>
         <Card.Footer>
            <small className="text-muted">Posted on: {postDate}</small>
         </Card.Footer>
      </Card>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;