import { memo, VFC } from "react";
import { Box, Image, Flex, Heading, Link } from '@chakra-ui/react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { SiInstagram } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'
import { Story } from "./templates/Story";
import { HeadingJournals } from "./templates/HeadingJournals";
import { Access } from "./molecules/Access";

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

      <Access />

      <Box ml={10}>
        <Heading as="h3">SNS</Heading>
        <Flex justifyContent="space-between">
          <Link href="https://twitter.com/twitterjp?lang=ja" isExternal>
            <AiFillTwitterCircle />
          </Link>
          <Link href="https://www.instagram.com/?hl=ja" isExternal>
            <SiInstagram />
          </Link>
          <Link href="https://ja-jp.facebook.com/facebook/" isExternal>
            <FaFacebook />
          </Link>
        </Flex>
      </Box>
    </>
  )
})
