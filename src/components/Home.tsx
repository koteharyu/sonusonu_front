import { memo, VFC } from "react";
import { Box, Image, Flex, Heading, Link } from '@chakra-ui/react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { SiInstagram } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'

export const Home: VFC = memo(() => {
  return (
    <>
      <Box>
        <Image src={`${process.env.PUBLIC_URL}/TacoRIce.jpeg`} style={{ width: "100%" }} />
      </Box>

      <Box textAlign="center" my={10}>
        <Heading as="h2">HOME</Heading>
      </Box>

      <Flex>
        <Box mx={10}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4577122499986!2d130.39366601515238!3d33.59342664921627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191e8d8fb638f%3A0x1de986508eac7271!2sSonu%20Sonu!5e0!3m2!1sja!2sjp!4v1633936956133!5m2!1sja!2sjp" width="600" height="450" style=
            {{ border: "0" }} loading="lazy"></iframe>
        </Box>
        <Box mx={10}>
          <Box >
            <Heading as="h3">Address</Heading>
            <Box ml={4}>
              <p>福岡県福岡市</p>
              <p>中央区天神</p>
              <p>3-6-29-1F</p>
            </Box>
          </Box>

          <Box ml={5}>
            <Heading as="h3">Business Hour</Heading>
            <Box>
              <p>月曜: AM8-PM8</p>
              <p>火曜: AM8-PM8</p>
              <p>水曜: AM8-PM8</p>
              <p>木曜: AM8-PM8</p>
              <p>金曜: AM8-PM8</p>
              <p>土曜: AM8-PM8</p>
              <p>日曜: AM8-PM8</p>
            </Box>
          </Box>

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

        </Box>
      </Flex>
    </>

  )
})
