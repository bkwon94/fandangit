import React from 'react';

// styled components
const PosterImage = window.styled.img`
  height: 99.75%;
  max-width: 95%;
  opacity: 1;
  transition: opacity .25s, transform .25s ease;
  :hover {
    transform: scale(1.09);
    opacity: 0.7;
  }
`;

const PosterDiv = window.styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  height: 100%;
`;


const MoviePoster = ({ poster }) => {
  // look into object destructuring
  return (
    <PosterDiv>
      <PosterImage src={poster}/>
    </PosterDiv>
  );
};

export {
  MoviePoster,
  PosterDiv,
  PosterImage
};