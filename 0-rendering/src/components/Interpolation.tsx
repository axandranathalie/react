export const Interpolation = () => {
  const name = "Alexandra";
  const x = 10;
  const product = { name: "golfboll", imageUrl: ".....", price: 100};

  return (
    <>
    <h3>{name}</h3>
    <div className={x === 10 ? "ten" : "other"}>styla div</div>
    <img src={product.imageUrl} alt={product.name}/>
    </>
  )
}