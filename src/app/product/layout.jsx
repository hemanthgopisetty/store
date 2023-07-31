import {Box} from '@/app/(mui)/mui'
const Productlayout = ({children}) => {
  return (
    <Box sx={{
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      padding : '4px',
    }}>
      {children}
    </Box>
  )
}

export default Productlayout;
