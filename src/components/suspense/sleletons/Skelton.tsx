import "./Skelton.css"

const SkeletonPage = () => {
  return (
    <div className="post">
        <SkeletonComp classes="title width-50" />
        <SkeletonComp classes="text width-100" />
        <SkeletonComp classes="text width-100" />
        <SkeletonComp classes="text width-100" />
    </div>
  )
}

export default SkeletonPage;

const SkeletonComp = ({ classes } : { classes: string }) => {
  const classNames = `skeleton ${classes} animate-pulse`
  return <div className={classNames}></div>
}