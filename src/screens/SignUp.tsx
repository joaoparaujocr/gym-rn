import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}
    >
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

        <VStack
          flex={1}
          px="$10"
          pb="$16"
        >
          <Center my='$16'>
            <Logo />
            <Text>
              Treine sua mente e seu corpo.
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input
              placeholder="Nome"
              autoCapitalize="words"
            />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder="Senha"
              secureTextEntry
            />

            <Button
              title="Criar e acessar"
              bg="$gree"
            />
          </Center>

          <Button title="Voltar para o login" variant="outline" />
        </VStack>
      </VStack>
    </ScrollView>
  )
}