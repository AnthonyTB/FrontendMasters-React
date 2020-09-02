import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from "react";
import pet, { ANIMALS, Animal } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import { RouteComponentProps } from "@reach/router";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setlocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(ThemeContext);

  const requestPets = () => {
    pet
      .animals({
        location,
        breed,
        type: animal,
      })
      .then(({ animals }) => setPets(animals || []));
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
            value={location}
            onChange={(ev) => setlocation(ev.target.value)}
            placeholder="Location"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(ev) => setTheme(ev.target.value)}
            onBlur={(ev) => setTheme(ev.target.value)}
          >
            <option value="peru">peru</option>
            <option value="darkblue">dark blue</option>
            <option value="mediumorchid">medium orchid</option>
          </select>
        </label>
        <button type="submit" style={{ background: theme }}>
          Search
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
