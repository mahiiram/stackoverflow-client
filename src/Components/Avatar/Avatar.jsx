export default function Avatar({children,backgroundColor,px,py,color,borderRadius,fontSize,cursor}){

    const style ={
        backgroundColor,
        padding: `${px} ${py}`,
        color:color || 'black',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor:cursor ||null,
        textDecoration:'none'
    }
    return(
        <div style={style}>
            {children}
        </div>
    )
}