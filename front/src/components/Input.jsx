
export const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{name}</label>
      <input
        className="p-1 rounded border-[1px] border-slate-400 shadow"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        title={name}
        value={value}
        onChange={onChange}
      />

    </div>
  )
}
