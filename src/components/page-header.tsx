'use client'

import { tokenAtom } from "@/store/auth";
import { getMemberById } from "@/utils/fetcher";
import { Member } from "@/utils/types";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageHeader() {
  const [authToken, setToken] = useAtom(tokenAtom)
  const router = useRouter()
  const { data } = useQuery<Member>({ queryKey: ['members', authToken], queryFn: () => getMemberById(authToken) })

  const logout = () => {
    setToken(RESET)
  }

  return (
    <Container as='header' mb={20} mt={4} maxW='container.xl' px={4} py={2} border="1px solid" borderColor="gray.200" shadow="sm" bgColor="gray.100" rounded="md">
      <Flex justify="space-between" align='center'>
        <Link href="/">
          <Text as="b" fontSize="xl">Spotbooks</Text>
        </Link>
        {authToken ? (
          <Flex align='center' gap={4}>
            <Text>Your point: ${data?.point}</Text>
            <Button onClick={logout} size='sm' variant='ghost' colorScheme="red">Logout</Button>
          </Flex>
        ) : (
          <Button onClick={() => router.push('/login')}>Login lur</Button>
        )}
      </Flex>
    </Container>
  )
}
