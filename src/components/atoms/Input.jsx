import { forwardRef, useId } from 'react';
import { cn } from '@utils/classNames';

/**
 * Input atom
 * Applies custom-input class. Shows label + error message when provided.
 * Forward ref so react-hook-form can register it.
 *
 * Props:
 *   label       Label text
 *   error       Error string (activates custom-input-error styling)
 *   id          Input id (auto-generated if omitted)
 *   className   Extra classes on the <input> element
 */
const Input = forwardRef(function Input(
  { label, error, id: propId, className, ...rest },
  ref
) {
  const autoId = useId();
  const id     = propId || autoId;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="custom-label">
          {label}
          {rest.required && <span className="ml-1" style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn('custom-input', error && 'custom-input-error', className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="custom-error-text" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
