import React, { useEffect, useState } from 'react';
import { Box, Text } from '@gluestack-ui/themed';

//* Services
import GenericService from '_services/generic/';

const HomeScreen = () => {
  // Local state
  const [blocks, setBlocks] = useState<any[]>([]);

  const getTenders = async () => {
    const { genericGet } = GenericService;
    try {
      const response: any = await genericGet('blocks');
      if (response) {
        setBlocks(response);
      }
    } catch (error) {
      /* */
    }
  };

  useEffect(() => {
    getTenders();
  }, []);

  return (
    <Box>
      <Text>Bloques</Text>
      {blocks.map(item => {
        const { name } = item;
        return <Text key={Math.random()}>-{name}</Text>;
      })}
    </Box>
  );
};

export default HomeScreen;
