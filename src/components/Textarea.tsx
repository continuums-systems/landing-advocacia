import { forwardRef } from 'react'

interface TextareaProps {
  label: string
  name: string
  placeholder?: string
  error?: string
  required?: boolean
  rows?: number
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, placeholder, error, required, rows = 5, ...rest }, ref) => {
    const id = `field-${name}`
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-navy">
          {label}
          {required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
        </label>
        <textarea
          ref={ref}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-200 placeholder:text-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-gold/40 ${
            error
              ? 'border-red-400 focus:border-red-400'
              : 'border-gray-200 focus:border-gold'
          }`}
          {...rest}
        />
        {error && (
          <p id={`${id}-error`} className="text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
