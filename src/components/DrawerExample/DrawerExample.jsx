import React, { useRef } from "react";
import styles from './DrawerExample.module.scss';
import { useBoolean } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react"
import { Code } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const DrawerExample = () => {
  const [flag, setFlag] = useBoolean()
  const [flagtoggle, setFlagtoggle] = useBoolean()

  return (
    <div>
      <Box w="100%" h="200px" bgColor='red'>
        <Input variant='filled' placeholder='Filled' />
        <Input variant='flushed' placeholder='Flushed' />
      </Box>
    </div>
  );
}

export default DrawerExample;
