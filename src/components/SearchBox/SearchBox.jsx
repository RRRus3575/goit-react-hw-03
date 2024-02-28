import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <input className={css.input} onChange={onChange} value={value} required />
  );
};

export default SearchBox;
