import { memo, VFC } from "react";
import { Box, Image, Flex } from '@chakra-ui/react'

export const Home: VFC = memo(() => {
  return (
    <>
      <Box>
        <Image src={`${process.env.PUBLIC_URL}/TacoRIce.jpeg`} style={{ width: "100%" }} />
      </Box>
      <Box>
        <Box textAlign="center">
          <h1>HOME</h1>
        </Box>
        <Box>
          <Flex>
            <Box width="50%">
              <Box mx={10}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4577122499986!2d130.39366601515238!3d33.59342664921627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191e8d8fb638f%3A0x1de986508eac7271!2sSonu%20Sonu!5e0!3m2!1sja!2sjp!4v1633936956133!5m2!1sja!2sjp" width="600" height="450" style=
              {{ border: "0" }} loading="lazy"></iframe>
              </Box>
            </Box>
            <Box>
              SNS
            </Box>
          </Flex>
        </Box>
      </Box>
    </>

  )
})
