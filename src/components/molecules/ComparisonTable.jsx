import React from 'react';
import { cn } from '@utils/classNames';

/**
 * ComparisonTable
 * Renders all comparison data as a real semantic <table> with proper
 * <thead>, <th scope="col">, and <tbody>. Applies the custom-table class.
 *
 * NEVER render comparison data as flex/grid hacks. This is semantic HTML.
 *
 * Props:
 *   columns   Array of column header strings
 *             e.g. ['What Others Offer', 'What Caller Monkey Delivers']
 *   rows      Array of row arrays (each row = array of cell strings)
 *             e.g. [['A calling bot', 'Full AI communication system'], ...]
 *   colStyles Array of inline style objects per column (optional)
 *             e.g. [{ color: 'var(--color-text-muted)' }, { color: 'var(--color-green-700)', fontWeight: 600 }]
 *   caption   Optional <caption> text for screen readers
 *   className Extra classes on the wrapper div
 */
function ComparisonTable({ columns = [], rows = [], colStyles = [], caption, className }) {
  return (
    <div className={cn('w-full overflow-x-auto rounded-xl', className)}>
      <table className="custom-table" role="table">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}

        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                scope="col"
                style={colStyles[i] || {}}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, colIdx) => (
                <td
                  key={colIdx}
                  style={colStyles[colIdx] || {}}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
