export const MatchTypeSelector = ({ matchTypes, handleMatchTypeChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <label>
        <input
          type="checkbox"
          name="all"
          checked={matchTypes.all}
          onChange={handleMatchTypeChange}
        />{" "}
        All
      </label>
      <label>
        <input
          type="checkbox"
          name="broad"
          checked={matchTypes.broad}
          onChange={handleMatchTypeChange}
        />{" "}
        Broad Match
      </label>
      <label>
        <input
          type="checkbox"
          name="phrase"
          checked={matchTypes.phrase}
          onChange={handleMatchTypeChange}
        />{" "}
        Phrase Match
      </label>
      <label>
        <input
          type="checkbox"
          name="exact"
          checked={matchTypes.exact}
          onChange={handleMatchTypeChange}
        />{" "}
        Exact Match
      </label>
    </div>
  );
};
