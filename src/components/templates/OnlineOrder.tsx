import { Box, Image, Flex, Text, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";
import '../../OnlineOrder.css'

export const OnlineOrder: VFC = memo(() => {
  return (
    <Box className="onlineOrderImage">
      <Image src={`${process.env.PUBLIC_URL}/TacoRIce.jpeg`} style={{ width: "100%", height: "300px" }} />
      <Text textAlign="center" className="onlineOrderTitle">OneLine Order</Text>
      <Flex justify="space-around" textAlign="center" className="onlineOrderServices">
        <Link fontSize="sm" href="https://www.ubereats.com/jp" target="_blank" className="uberEats" style={{ marginLeft: "30px", fontSize: "19px"}}>Uber Eats</Link>
        <Link fontSize="sm" href="https://www.ubereats.com/jp" className="ddFood" style={{ marginLeft: "60px", fontSize: "19px" }}>dd</Link>
        <Link fontSize="sm" href="https://www.ubereats.com/jp" className="demaekan" style={{ marginLeft: "60px", fontSize: "19px" }}>panda</Link>
        <Link fontSize="sm" href="https://www.ubereats.com/jp" className="foodPanda" style={{ marginLeft: "60px", fontSize: "19px" }}>demaekan</Link>
      </Flex>
    </Box>
  )
})
