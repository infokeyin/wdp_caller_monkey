import React from 'react';
import { cn } from '@utils/classNames';

/**
 * ChipToggle atom
 * Pill-style multi-select toggle used in the demo form for "preferred contact time".
 *
 * Props (controlled):
 *   options      Array of { value, label } objects
 *   selected     Currently selected value(s) — string OR string[] when multi=true
 *   onChange     (value) => void — called with the clicked value
 *   multi        Allow multiple selections (default false)
 *   name         Accessible group name (for aria-label on wrapper)
 */
function ChipToggle({ options = [], selected, onChange, multi = false, name, className }) {
  const isSelected = (val) => {
    if (multi) return Array.isArray(selected) && selected.includes(val);
    return selected === val;
  };

  const handleClick = (val) => {
    if (!onChange) return;
    if (multi) {
      const arr = Array.isArray(selected) ? selected : [];
      onChange(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
    } else {
      onChange(val === selected ? '' : val);
    }
  };

  return (
    <div
      className={cn('flex flex-wrap gap-2', className)}
      role="group"
      aria-label={name || 'Select an option'}
    >
      {options.map((opt) => {
        const active = isSelected(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            role="checkbox"
            aria-checked={active}
            onClick={() => handleClick(opt.value)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-150 custom-focus-ring',
              active
                ? 'bg-brand-green text-white border-brand-green shadow-green'
                : 'bg-white text-grey-700 border-grey-300 hover:border-grey-600 hover:text-grey-900'
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default ChipToggle;
