import { forwardRef } from 'react'

interface InputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  error?: string
  required?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type = 'text', placeholder, error, required, ...rest }, ref) => {
    const id = `field-${name}`
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-navy">
          {label}
          {required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
        </label>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 ${
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

Input.displayName = 'Input'

export default Input
