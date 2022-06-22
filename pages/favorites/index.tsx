import { FC, useEffect, useState } from 'react';

import { Card, Container, Grid, Image, Text } from '@nextui-org/react'

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';


interface Props {

}

const FavoritePage: FC<Props> = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title='Favorites | Pokemon'>
      {
        favoritePokemons.length === 0
          ?
          (
            <NoFavorites />
          )
          :
          (
            <FavoritePokemons pokemons={favoritePokemons} />
          )
      }
    </Layout>
  )
}

export default FavoritePage
