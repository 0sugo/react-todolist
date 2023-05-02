
function Footer({length}) {

    const today = new Date();
    
  return (
    <div>
       <p>{length} list {length ===1? 'item' : 'items'}</p>
       <p>Rights reserved &copy; OSUGO{today.getFullYear()}</p> 
    </div>
  )
}

export default Footer