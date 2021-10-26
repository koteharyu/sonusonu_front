import { memo, VFC } from "react";
import { Box, Text, Stack } from '@chakra-ui/react'

export const Story: VFC = memo(() => {
  return (
    <Box p={10} my={6}>
      <Stack>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">Sonu Sonu</Text>
        <Text textAlign="center">The Butcher’s Daughter is a plant-based restaurant, cafe, juice bar and “vegetable slaughterhouse."  We treat fruits and vegetables as a butcher would meat: We chop,</Text>
        <Text textAlign="center">fillet and carve fresh produce into healthy vegetarian dishes and press them into pretty juices.</Text>
      </Stack>
    </Box>
  )
})
