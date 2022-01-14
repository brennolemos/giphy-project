import { useState } from "react";
import * as S from "./Search.styled";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.handleSubmit(search);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Search
        name="search"
        id="search"
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="What Gif are you looking for?"
        required
      />
      <S.Button type="submit"></S.Button>
    </S.Form>
  );
};

export default Search;
