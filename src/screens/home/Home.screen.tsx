import React, { useEffect, useState } from 'react';
import { genericGet } from '../../services/generic/Generic.service';
import { Box, Text } from '@gluestack-ui/themed';

const HomeScreen = () => {
  const [blocks, setBlocks] = useState<any[]>([]);

  const getTenders = async () => {
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
