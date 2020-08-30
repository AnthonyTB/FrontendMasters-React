import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [Location, setlocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  const requestPets = async () => {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  };

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="Location">
          Location
          <input
            type="text"
            id="location"
            value={Location}
            onChange={(ev) => setlocation(ev.target.value)}
            placeholder="Location"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit">Search</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
