import { Button, FormControl, FormHelperText, FormLabel, HStack, Image, Input, InputLeftAddon, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Login = () => {
  return (
    <Stack direction={{base:"column" ,md:"row"}} justify="center" width="full"  spacing={50} p={5}>
        <VStack >
            <Image src='https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg'/>
            
        </VStack>


        <VStack  w={400} spacing={5} p={5}>
        <Text as="b">Enter details to login/sign-up
</Text>
        <FormControl >
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
           
            </FormControl>


        <FormControl>
            <FormLabel>password </FormLabel>
            <Input type='password' />
            <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <Button color="white" bg='rgb(16,163,16)'>Continue</Button>
        </VStack>
    </Stack>
  )
}
