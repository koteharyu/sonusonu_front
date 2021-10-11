import { memo, VFC } from "react";
import { Flex, Heading, Box, Link, useDisclosure } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Header: VFC = memo(() => {

  const history = useHistory()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickHome = () => history.push('/')
  const onClickMenu = () => history.push('/menu')
  const onClickGournal = () => history.push('/gournal')


  return (
    <>
      <Flex as="nav" bg="white" color="gray.505" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>Sonu Sonu</Heading>
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
              Gournal
            </Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickMenu={onClickMenu} onClickGournal={onClickGournal} />
    </>
  )
})
