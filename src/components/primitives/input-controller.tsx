import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormControlProps } from './form-control';

type InputControllerProps<T extends FieldValues> = FormControlProps & {
  control: Control<T>;
  name: FieldPath<T>;
};

export const InputController = <T extends FieldValues>({ control, name, ...props }: InputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = '', onBlur, onChange }, fieldState: { error } }) => {
        return (
          <FormControl
            {...props}
            error={!!error?.message}
            errorMessage={error?.message}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        );
      }}
    />
  );
};
