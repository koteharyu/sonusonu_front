import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
  title: string
  content: string
  imageUrl: string
  authorImageUrl:string
  createdAt: Date
}

export const GournalCard: VFC<Props> = memo((props) => {


  const { title, content, imageUrl, authorImageUrl, createdAt } = props

  return (
    <Center py={6}>
      <Box maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Image src={imageUrl} layout={'fill'} />
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
          my={3}
        >
          {title}
        </Text>
        <Text color={'gray.500'}>
          {content}
        </Text>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar
            src={authorImageUrl}
          alt={'Author'}
        />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text color={'gray.500'}>{createdAt}</Text>
        </Stack>
      </Stack>
    </Box>
    </Center >
  );
})
