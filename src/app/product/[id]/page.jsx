import {Card,CardActions,Button,ButtonGroup, CardMedia,CardContent, Typography,Box} from '@/app/(mui)/mui';
async function getData(id)
{
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if(!res.ok)
  {
    throw new Error('Failed to fetch data');
  }
  return res.json() ;
}
export default async function SingleProduct({params}) {

  const  data = await getData(params.id);
  console.log(data);
  return (
      <Card sx={{
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      flexDirection : {
        xs : 'column',
        sm : 'row',
        md : 'row',

      },
      padding : 2.5,
      boxShadow : '0px 3px 50px -40px rgba(0,0,0,0),0px 0px 65px -25px rgb(30,144,255)',
   }} >
    <CardMedia component={'img'} image={`${data.image}`} alt='Product card' sx={{
      height : {
        xs : '285px',
        sm : '400px',
        md : '300px'
      },
      width: {
        xs : '285px',
        sm : '300px',
        md : '200px'
      },
      borderRadius : '80px',
      objectFit : 'contain',
      objectPosition : 'center'
    }}/>
    <Box>

    </Box>
    <CardContent sx={{
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'space-between',
      flexDirection : 'column',
      padding : 1,
      }}>
      <Typography sx={{
        width : {
          xs : '285px',
        },
        
      }}>
        {data.description}
      </Typography>
      <CardActions sx={{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        padding : 1,
      }}>
       <Button variant='outline'>Buy Now</Button>
        <Button variant='text' >Buy Now</Button>
    </CardActions>
    </CardContent>

   </Card>
  )
}
