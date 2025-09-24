import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
    '3',
    '5',
    '4',
    '6',
    '7',
  ])
  const [groups, setGroups] = useState([
    'Costas',
    'Biceps',
    'Ombros',
    'Triceps',
    'Pernas'
  ])

  const [groupSelected, setGroupSelected] = useState("")

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item as string}
        renderItem={({ item }) => (
          <Group name={item} isActive={groupSelected === item} onPress={() => setGroupSelected(item)} />
        )}
        horizontal
        style={{
          gap: 4,
          maxHeight: 96
        }}
        contentContainerStyle={{
          gap: 4,
          padding: 26
        }}
        showsHorizontalScrollIndicator={false}
      />

      <VStack px="$7" flex={1}>
        <HStack alignItems="center" justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">Exercicios</Heading>

          <Text color="$gray200" fontSize="$sm" fontFamily="$body">{exercises.length}</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20
          }}
          renderItem={({ item }) => (
            <ExerciseCard title={item} />
          )}
        />
      </VStack>
    </VStack>
  )
}