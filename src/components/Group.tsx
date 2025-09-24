import { Button, Text } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type GroupProps = ComponentProps<typeof Button> & {
  name: string
  isActive: boolean
}

export function Group({ name, isActive, ...rest }: GroupProps) {
  return (
    <Button
      minWidth="$24"
      h="$10"
      bg="$gray600"
      rounded="$sm"
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ":active": {
          borderWidth: 1
        }
      }}
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  )
}