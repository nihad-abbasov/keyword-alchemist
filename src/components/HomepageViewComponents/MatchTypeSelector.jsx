export const MatchTypeSelector = ({ matchTypes, handleMatchTypeChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <label className="flex flex-row items-center justify-center gap-0.5 text-sm">
        <input
          type="checkbox"
          name="all"
          checked={matchTypes.all}
          onChange={handleMatchTypeChange}
        />{" "}
        All
      </label>
      <label className="flex flex-row items-center justify-center gap-0.5 text-sm">
        <input
          type="checkbox"
          name="broad"
          checked={matchTypes.broad}
          onChange={handleMatchTypeChange}
        />{" "}
        Broad Match
      </label>
      <label className="flex flex-row items-center justify-center gap-0.5 text-sm">
        <input
          type="checkbox"
          name="phrase"
          checked={matchTypes.phrase}
          onChange={handleMatchTypeChange}
        />{" "}
        Phrase Match
      </label>
      <label className="flex flex-row items-center justify-center gap-0.5 text-sm">
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
