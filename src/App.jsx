import { useEffect, useRef, useState } from "react";
import { simpleSlider } from "simpleslider-ssjs";
function App() {

  const [slider,setSlider] = useState(false);

  const imgList = [
    'https://images.unsplash.com/photo-1615864691387-6e986695017a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1541&q=80',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  ];
  
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current || slider !== false) return;

    const options = {
      container: sliderRef.current,
      imgList,
      autoPlay: true,
      autoPlayDuration: 4000,
      style: {
        maxWidth: 'unset',
        minWidth: '320px',
        maxHeight:"90vh",
        boxSizing: 'border-box',
        display:'flex'
      }
    }

    setSlider(simpleSlider.init(options));

  }, [sliderRef]);

  useEffect(()=>{
    if(slider === false) return;
    slider.on('changed',(index)=>{
      console.log('slide changed',index)
    })
  },[slider]);

  return (
    <div style={{background:'#000', width:'100vw', minHeight:'100vh'}} className="App" role="main">
      <div ref={sliderRef}></div>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
        }}>
          <button onClick={()=>{
            slider.goToSlide('<');
          }}
          type="button">
            Go Backward
          </button>
          <button onClick={()=>{
            slider.goToSlide('>');
          }}
          type="button">
            Go Forward
          </button>
        </div>
    </div>
  );
}

export default App;
