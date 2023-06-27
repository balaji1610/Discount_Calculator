import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";
export default function InputComp({
  label,
  variant,
  placeholder,
  size,
  color,
  style,
  inputProps,
  type,
  value,
  onChange,
  name,
  helperText
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
        value={value}
        onChange={onChange}
        name={name}
        helperText={helperText}
        InputLabelProps={{
          sx: {
            color: "red",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "blue",
            },
          },
        }}
      />
    </div>
  );
}
