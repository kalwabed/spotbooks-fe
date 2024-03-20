'use client'

import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, useStatStyles } from "@chakra-ui/react";
import React from "react";

export default function LoginPage() {
  const username = React.useRef('')
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    console.log(username.current.value)
  }

  return (
    <Container maxW='lg'>
      <Heading fontSize="4xl" mb={4} textAlign='center'>Login</Heading>
      <form onSubmit={handleOnSubmit}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input ref={username} name="username" />
        </FormControl>

        <Flex mt={8}>
          <Button type="submit" colorScheme="blue" width='full'>Sign In</Button>
        </Flex>
      </form>
    </Container>
  )
}
