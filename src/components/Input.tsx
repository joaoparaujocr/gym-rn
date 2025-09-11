import { InputField, Input as InputGlue } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type InputProps = ComponentProps<typeof InputField>

export function Input({ ...rest }: InputProps) {

  return (
    <InputGlue
      bg="$gray700"
      height="$14"
      px="$4"
      borderWidth="$0"
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: '$green500'
      }}
    >
      <InputField
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </InputGlue>
  )
}