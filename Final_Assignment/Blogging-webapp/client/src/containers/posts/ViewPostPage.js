import React, { useEffect } from "react";
import ViewPost from "../../components/posts/ViewPost";
import { deletePost, getPostByID } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; 

const ViewPostPage = ({
   auth,
   post,
   match,
   history,
   getPostByID,
   deletePost
}) => {
   useEffect(() => {
      getPostByID(match.params.id);
   }, [match, getPostByID]);

   const handleEdit = () => {
      history.push(`/blog/post/update/${post._id}`);
   };

   const handleDelete = () => {
      confirmAlert({
         title: "Confirm to delete this post.",
         message: "Are you sure you want to do this?",
         buttons: [
             {
                 label: "YES",
                 onClick: () => deletePost(post._id, history),
             },
             {
                 label: "NO  ",
                 onClick: () =>
                     console.log(
                         "NO! I don't want to delete this magnificant piece of art!"
                     ),
             },
         ],
     });
      // deletePost(post._id, history);
   };

   if (Object.keys(post).length === 0) return <div />;
   return (
      <ViewPost
         post={post}
         auth={auth}
         onDelete={handleDelete}
         onEdit={handleEdit}
      />
   );
};

const mapStateToProps = state => ({
   auth: state.auth.isAuthenticated,
   post: state.post.post
});

ViewPostPage.propTypes = {
   auth: PropTypes.bool.isRequired,
   post: PropTypes.object.isRequired,
   getPostByID: PropTypes.func.isRequired,
   deletePost: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostByID, deletePost }
)(ViewPostPage);