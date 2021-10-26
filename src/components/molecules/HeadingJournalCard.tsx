import { memo, VFC } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

type Props = {
  title: string
  imageUrl: string
  createdAt: Date
}

export const HeadingJournalCard: VFC<Props> = memo((props) => {

  const { title, imageUrl, createdAt } = props

  return (
    <Center py={12}>
      <Box
        _hover={{ opacity: ".7", cursor: "pointer"}}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={imageUrl}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'xl'} color={'gray.500'}>
              {createdAt}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
})
