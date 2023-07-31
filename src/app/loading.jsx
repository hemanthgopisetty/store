import {Backdrop, CircularProgress} from '@/app/(mui)/mui'
export default function Loading() {
  return(
    <Backdrop open transitionDuration={1} sx={
      {
        background : 'white'
      }
    }>
      <CircularProgress  color='primary'/>
    </Backdrop>
  );
}1