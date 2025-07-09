import cn from "../../utils/cn";

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  prefix,
  error,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label
        className={cn(
          "block text-base text-dark font-normal font-encode mb-1.5"
        )}
      >
        {label}
      </label>
      {prefix ? (
        <div
          className={cn(
            "flex items-center w-full border rounded-md border-hr-thin focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary"
          )}
        >
          <span
            className={cn(
              "px-3 py-2 text-base font-encode text-dark bg-gray-light rounded-l-md"
            )}
          >
            {prefix}
          </span>
          <input
            type={type}
            name={name}
            className={cn(
              "block w-full text-base text-dark font-normal font-encode px-3 py-2 rounded-r-md outline-none"
            )}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
      ) : (
        <>
          <input
            type={type}
            name={name}
            className={cn(
              "block w-full text-base text-dark font-normal font-encode px-3 py-2 border rounded-md outline-none focus:border-secondary focus:ring-1 focus:ring-secondary border-hr-thin"
            )}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </>
      )}
    </div>
  );
};

export default InputField;
