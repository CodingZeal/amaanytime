import { HTMLProps } from 'react'

import {
  FieldError,
  InputField,
  InputFieldProps,
  Label,
  LabelProps,
  PasswordField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

export interface IInputProps {
  type?: string
  inputProps?: Partial<InputFieldProps>
  labelProps?: Omit<LabelProps, 'name'>
  wrapperProps?: HTMLProps<HTMLDivElement>
  name?: string
  label?: string
  defaultValue?: string
  value?: string
  required?: boolean
  tabIndex?: number
  placeholder?: string
  focus?: boolean
  className?: string
}

const INPUT_CLASSES =
  'z-0 relative left-1 top-1 border border-neutral-800 bg-transparent p-2 text-md w-full md:w-full'

const ERROR_CLASSES = 'border border-red-500'

const MAX_INPUT_WIDTH = 'max-w-[1000px]'

const DefaultLabel = (props: IInputProps) => {
  const { label, name, labelProps } = props
  return label ? (
    <Label
      name={label}
      htmlFor={name}
      className="font-slab text-base font-bold uppercase"
      {...labelProps}
    />
  ) : (
    <></>
  )
}

export const TextInput = (props: IInputProps) => {
  const ref = props.focus
    ? { ref: (input: HTMLInputElement) => input?.focus() }
    : {}
  return (
    <div className={`my-4 mb-7 mr-2 md:mb-0 ${props.className}`}>
      <DefaultLabel {...props} />
      <div className={`${MAX_INPUT_WIDTH} bg-white`}>
        <InputField
          {...ref}
          className={INPUT_CLASSES.concat(` ${props.className || ''}`)}
          errorClassName={ERROR_CLASSES}
          name={props.name}
          defaultValue={props.defaultValue}
          value={props.value}
          validation={{
            required: {
              value: props.required,
              message: `${props.label} is required!`,
            },
          }}
          placeholder={props.placeholder || ''}
          tabIndex={props.tabIndex}
          {...props.inputProps}
        />
      </div>
      <FieldError name={props.name} className={ERROR_CLASSES} />
    </div>
  )
}

export const PasswordInput = (props: IInputProps) => (
  <div className={`mb-7 mr-2 md:mb-0 ${props.className}`}>
    {props.label && <DefaultLabel {...props} />}
    <div className={`${MAX_INPUT_WIDTH} bg-white`}>
      <PasswordField
        className={INPUT_CLASSES.concat(` ${props.className || ''}`)}
        errorClassName={ERROR_CLASSES}
        name={props.name}
        validation={{
          required: {
            value: props.required,
            message: `${props.label} is required!`,
          },
        }}
        placeholder={props.placeholder || ''}
        tabIndex={props.tabIndex}
        {...props.inputProps}
      />
    </div>
    <FieldError name={props.name} className={ERROR_CLASSES} />
  </div>
)

export const ForgotPasswordInput = (props: IInputProps) => {
  return (
    <div>
      <div className={`flex items-center justify-between ${MAX_INPUT_WIDTH}`}>
        <DefaultLabel {...props} />
        <Link
          to={routes.forgotPassword()}
          className="text-sm underline hover:no-underline md:text-xs"
        >
          Forgot password?
        </Link>
      </div>
      <div className={`${MAX_INPUT_WIDTH} bg-white`}>
        <PasswordField
          className={INPUT_CLASSES.concat(` ${props.className || ''}`)}
          errorClassName={ERROR_CLASSES}
          name={props.name}
          validation={{
            required: {
              value: props.required,
              message: `${props.name} is required!`,
            },
          }}
          placeholder={props.placeholder || ''}
          tabIndex={props.tabIndex}
          {...props.inputProps}
        />
      </div>
      <FieldError name={props.name} className={ERROR_CLASSES} />
    </div>
  )
}
