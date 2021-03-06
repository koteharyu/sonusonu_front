import { memo, VFC } from "react";
import { Flex, Heading, Box, Link, useDisclosure, Image } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Header: VFC = memo(() => {

  const history = useHistory()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickHome = () => history.push('/')
  const onClickMenu = () => history.push('/menu')
  const onClickGournal = () => history.push('/journals')


  return (
    <>
      <Flex as="nav" bg="white" color="gray.505" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          {/* <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>Sonu Sonu</Heading> */}
          <Image src={`${process.env.PUBLIC_URL}/logo.jpg`} boxSize={{ base: "50px", md: "80px"}} borderRadius="full" />
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickHome}>
              Home
            </Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickMenu}>
              Menu
            </Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickGournal}>
              Journal
            </Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickGournal}>
              Order Online
            </Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickGournal}>
              Access
            </Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickGournal}>
              Contact
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickMenu={onClickMenu} onClickGournal={onClickGournal} />
    </>
  )
})
