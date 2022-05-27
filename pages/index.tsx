const Index = ({ images }) => {
  console.log({images})
  return <h1>Hi!</h1>
}

export const getStaticProps =  async() => {
  const res = await fetch('http://localhost:1337/api/images?populate=image')
  const images = await res.json()

  console.log({res, images})
  return {
    props: { images }
  }
}

export default Index

