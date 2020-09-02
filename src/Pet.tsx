import React, { FunctionComponent } from "react";
import { Photo } from "@frontendmasters/pet";
import { Link } from "@reach/router";

interface IProps {
  name: string;
  animal: string;
  location: string;
  id: number;
  media: Photo[];
  breed: string;
}

const Pet: FunctionComponent<IProps> = (props) => {
  const { name, animal, breed, media, location, id } = props;

  let placeholderImg = "http://placecorgi.com/300/300";

  if (media.length) {
    placeholderImg = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={placeholderImg} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
