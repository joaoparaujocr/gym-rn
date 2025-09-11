import { Center, Image, Text, VStack } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

export function SignIn() {
  return (
    <VStack
      flex={1}
      bg="$gray700"
    >
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        w="$full"
        h={624}
        position="absolute"
      />

      <Center my='$24'>
        <Logo />
        <Text>
          Treine sua mente e seu corpo.
        </Text>
      </Center>
    </VStack>
  )
}