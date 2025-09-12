import { ComponentProps } from "react"
import { Button as ButtonGlue, ButtonSpinner, Text } from "@gluestack-ui/themed"

type ButtonProps = ComponentProps<typeof ButtonGlue> & {
  title: string
  isLoading?: boolean
  variant?: 'solid' | 'outline'
}

export function Button({ title, isLoading = false, variant = 'solid', ...rest }: ButtonProps) {

  return (
    <ButtonGlue
      w='$full'
      h="$14"
      $base-bg={variant === 'outline' ? 'transparent' : "$green700"}
      $base-borderColor="$green500"
      borderWidth={variant === 'outline' ? "$1" : "$0"}
      rounded="$sm"
      $active-bg={variant === 'outline' ? "$gray500" : "$green500"}
      disabled={isLoading}

      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner
          color="$white"
        />
      ) : (
        <Text
          color={variant === 'outline' ? "$green500" : "$white"}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )
      }
    </ButtonGlue >
  )
}