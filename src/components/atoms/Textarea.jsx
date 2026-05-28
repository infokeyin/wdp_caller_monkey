import { forwardRef, useId } from 'react';
import { cn } from '@utils/classNames';

/**
 * Textarea atom
 * Mirrors Input but for multiline text. Shows character count when maxLength is set.
 */
const Textarea = forwardRef(function Textarea(
  { label, error, id: propId, maxLength, className, value, ...rest },
  ref
) {
  const autoId = useId();
  const id     = propId || autoId;
  const count  = typeof value === 'string' ? value.length : 0;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="custom-label">
          {label}
          {rest.required && <span className="ml-1" style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        maxLength={maxLength}
        value={value}
        className={cn(
          'custom-input resize-none',
          error && 'custom-input-error',
          className
        )}
        rows={rest.rows || 4}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      <div className="flex justify-between items-start mt-1">
        {error ? (
          <p id={`${id}-error`} className="custom-error-text" role="alert">{error}</p>
        ) : (
          <span />
        )}
        {maxLength && (
          <span
            className="text-xs ml-auto"
            style={{ color: count >= maxLength ? 'var(--color-error)' : 'var(--color-text-muted)' }}
          >
            {count}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
});

export default Textarea;
