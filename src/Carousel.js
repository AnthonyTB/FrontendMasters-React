import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { active, photos } = this.state;

    return (
      <div className="Carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, idx) => (
            // never do this
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleClick}
              data-index={idx}
              src={photo}
              className={idx === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
