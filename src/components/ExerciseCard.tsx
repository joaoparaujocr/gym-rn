import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ExerciseCardProps = TouchableOpacityProps & {
  title: string
}

export function ExerciseCard({ title, ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity
      {...rest}
    >
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2023/06/17/16/22/man-8070375_1280.jpg'
          }}
          alt="Imagem do exercicio"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack
          flex={1}
        >
          <Heading
            fontSize="$lg"
            color="$white"
          >
            {title}
          </Heading>

          <Text
            fontSize="$sm"
            color="$gray200"
            mt="$1"
            numberOfLines={2}
          >
            3 series x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  )
}