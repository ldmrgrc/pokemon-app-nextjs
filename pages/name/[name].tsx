import { useState } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { BsStarFill } from 'react-icons/bs';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { PokeListResponse, Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id))

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInFavorite(!isInFavorite)

        if (!isInFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 1,
                    y: 0
                }
            })
        }
    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2} >
                <Grid xs={12} sm={4} >
                    <Card isHoverable css={{ padding: '$10' }} variant='bordered' >
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8} >
                    <Card css={{ padding: '$10' }} variant='bordered'>
                        <Card.Header css={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Text h1 transform='capitalize' >{pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost={!isInFavorite}
                                auto
                                onPress={onToggleFavorite}
                            >
                                {isInFavorite ? <BsStarFill color='gold' /> : <BsStarFill />}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30} >Sprites:</Text>

                            <Container display='flex' direction='row'>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await pokeApi.get<PokeListResponse>(`/pokemon?limit=151`)
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

    return {
        paths: pokemonNames.map(name => ({ params: { name } })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }

    const pokemon = await getPokemonInfo(name)

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        }, 
        revalidate: 86400,
    }
}

export default PokemonByNamePage