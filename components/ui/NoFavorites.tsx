import { Container, Image, Text } from '@nextui-org/react'

 const origen = (typeof window === 'undefined') ? '' : window.location.origin

export const NoFavorites = () => {


    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignContent: 'center',
            justifyContent: 'center'
        }} >
            <Text className='element' h2 >No hay favoritos</Text>
            <Image
                src={`${origen}/img/pokeball.png`}
                alt=''
                css={{
                    opacity: 0.1
                }}
            />
        </Container>
    )
}
