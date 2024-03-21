'use client'

import { tokenAtom } from "@/store/auth";
import { kayi } from "@/utils/fetcher";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, useStatStyles, useToast } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import ky from 'ky'
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const username = React.useRef('')
  const toast = useToast()
  const setToken = useSetAtom(tokenAtom)
  const router = useRouter()

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = await kayi.post('members/login', {
        json: {
          username: username.current.value
        }
      }).json<{ id: string; username: string; point: number }>()

      toast({
        title: 'You have been sign in',
        description: 'Happy shopping!',
        status: 'success'
      })
      setToken(user.id)
      router.replace('/')
    } catch (error) {
      console.error(error)
      toast({
        title: 'Failed to login',
        description: 'Username is not found!',
        status: 'error'
      })
    }
  }

  return (
    <Container maxW='lg'>
      <Heading fontSize="4xl" mb={4} textAlign='center'>Login</Heading>
      <form onSubmit={handleOnSubmit}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input autoFocus ref={username} name="username" />
        </FormControl>

        <Flex mt={8}>
          <Button type="submit" colorScheme="blue" width='full'>Sign In</Button>
        </Flex>
      </form>
    </Container>
  )
}
