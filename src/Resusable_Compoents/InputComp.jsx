import TextField from "@mui/material/TextField";

export default function InputComp({
  label,
  variant,
  placeholder,
  size,
  color,
  style,
  inputProps,
  type
}) {
  return (
    <div>
      <TextField
        label={label}
        variant={variant}
        placeholder={placeholder}
        size={size}
        color={color}
        style={style}
        inputProps={inputProps}
        type={type}
      />
    </div>
  );
}
