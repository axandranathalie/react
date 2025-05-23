export const ConditionalRending = () => {
  const x = 10;
  const isLoading = true;

  // ett sätt att skriva det på
  // if (x >= 100) {
  //   return <div>x är ett stort tal</div>
  // } else {
  //   return <div>x är ett litet tal</div>
  // }


  //annat sätt 
  return (
    <>
    {isLoading && <div>Loading...</div>}
      {x >= 100 ? <div>x är ett stort tal</div> :
       <div>x är ett litet tal</div>}
    </>
  );
};
