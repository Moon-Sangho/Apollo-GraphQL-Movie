import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import styled from "styled-components";

const TOGGLE_LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id) @client
  }
`;

const Movie = ({ id, isLiked, bg }) => {
  const [toggleLikeMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
    variables: { id: Number(id) },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <LikeBtn onClick={toggleLikeMovie}>{isLiked ? "Unlike" : "Like"}</LikeBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 380px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 7px;
`;

const Poster = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const LikeBtn = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid gray;
`;

export default Movie;
