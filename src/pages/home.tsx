import cs from './home.module.css'



export function Home() {
  return (
    <div className={cs.container}>
    <div className={cs.imgContainer}>
      <img src="./4.jpg" width={"100%"} height={"600vh"} style={{objectFit:'cover'}} />
      <div className={cs.imgOverlay}>
        <div className={cs.content}>ابدأ رحلتك معنا</div>
      </div>
    </div>
    </div>
  )
}
