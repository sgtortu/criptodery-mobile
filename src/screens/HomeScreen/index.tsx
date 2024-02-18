import React, {useEffect, useState} from 'react';
import {genericGet} from '../../services/genericServices';
import {Box, Text} from '@gluestack-ui/themed';

const HomeScreen = () => {
  const [blocks, setBlocks] = useState<any[]>([]);

  useEffect(() => {
    getTenders();
  }, []);

  const getTenders = async () => {
    try {
      const response: any = await genericGet('blocks');
      if (response) {
        setBlocks(response);
      }
    } catch (error) {}
  };

  return (
    <Box>
      <Text>Bloques</Text>
      {blocks.map(item => {
        return <Text>-{item.name}</Text>;
      })}
    </Box>
  );
};

export default HomeScreen;
