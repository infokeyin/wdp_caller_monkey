import { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@utils/classNames';

/**
 * Select atom
 * Custom-styled <select> that applies custom-input class.
 * Adds a chevron icon overlay.
 *
 * Props:
 *   label       Label text
 *   error       Error string
 *   placeholder First option acting as a placeholder (disabled, empty value)
 *   options     Array of { value, label } objects
 */
const Select = forwardRef(function Select(
  { label, error, placeholder, options = [], id: propId, className, ...rest },
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
      <div className="relative">
        <select
          ref={ref}
          id={id}
          className={cn(
            'custom-input appearance-none pr-10',
            error && 'custom-input-error',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--color-grey-400)' }}
          aria-hidden="true"
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="custom-error-text" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Select;
