import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    // useImperativeHandle: used for exposing a component API to a parent component
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log('CLEARING');
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);

      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
