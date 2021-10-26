import { memo, VFC } from "react";
import { Box, Image, Flex, Heading, Link } from '@chakra-ui/react'
import { Story } from "./templates/Story";
import { HeadingJournals } from "./templates/HeadingJournals";
import { Access } from "./molecules/Access";
import { OnlineOrder } from "./templates/OnlineOrder";

export const Home: VFC = memo(() => {
  return (
    <>
      <Box>
        <Image src={`${process.env.PUBLIC_URL}/TacoRIce.jpeg`} style={{ width: "100%" }} />
      </Box>

      <Box>
        <Story />
      </Box>

      <Box>
        <HeadingJournals />
      </Box>

      <OnlineOrder />

      <Access />

      {/* <Box ml={10}>
        <Heading as="h3">SNS</Heading>

      </Box> */}
    </>
  )
})
