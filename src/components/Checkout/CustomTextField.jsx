// import React from "react";
// import { TextField } from "@material-ui/core";
// import { useFormContext, Controller } from "react-hook-form";

// function CustomTextField({ name, label, required }) {
//   const { control } = useFormContext();
//   return (
//     <Controller
//       as={TextField}
//       control={control}
//       fullWidth
//       name={name}
//       label={label}
//       required={required}
//     />
//   );
// }

// export default CustomTextField;

import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            name={name}
            label={label}
            required={required}
            fullWidth
          />
        )}
      />
    </Grid>
  );
};

export default CustomTextField;
