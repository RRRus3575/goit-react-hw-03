import css from "./SearchBox.module.css";

export const SearchBox = ({ name, value, type, onChange }) => {
  return (
    <input
      className={css.input}
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      required
    />
  );
};

export default SearchBox;
