'use client'

import { tokenAtom } from "@/store/auth";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

export default function PageHeader() {
  const authToken = useAtomValue(tokenAtom)
  const router = useRouter()

  return (
    <Container as='header' mb={20} mt={4} maxW='container.xl' px={4} py={2} border="1px solid" borderColor="gray.200" shadow="sm" bgColor="gray.100" rounded="md">
      <Flex justify="space-between" align='center'>
        <Text as="b" fontSize="xl">Spotbooks</Text>
        {authToken ? (
          <Text>Your point: $200</Text>
        ) : (
          <Button onClick={() => router.push('/login')}>Login lur</Button>
        )}
      </Flex>
    </Container>
  )
}
