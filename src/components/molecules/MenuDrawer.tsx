import { memo, VFC } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from '@chakra-ui/react'

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickMenu: () => void;
  onClickGournal: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickMenu, onClickGournal } = props
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={onClickHome} w="100%">HOME</Button>
            <Button onClick={onClickMenu} w="100%">MENU</Button>
            <Button onClick={onClickGournal} w="100%">GOURNAL</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
