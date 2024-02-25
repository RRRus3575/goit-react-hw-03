import css from "./SearchBox.module.css";

export const SearchBox = ({ label, name, value, type, onChange }) => {
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        required
      />
    </label>
  );
};

export default SearchBox;
